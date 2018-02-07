import { Component, OnInit } from '@angular/core';
// import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angular5-social-login';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FerrariService } from '../../ferrari.service';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';




@Component({
  selector: 'app-loginbody',
  templateUrl: './loginbody.component.html',
  styleUrls: ['./loginbody.component.css']
})
export class LoginbodyComponent implements OnInit {
  message;
  messageClass;
  form: FormGroup;

  processing = false;


  member = {
    "firstName": "",
    "lastName": "",
    "age": "",
    "country": "",
    "gender": "",
    "password": "",
    "email": "",
  }





  constructor(private sociallogin: FerrariService, private _http: HttpClient, private router: Router, private formBuilder: FormBuilder, public snackBar: MatSnackBar) {
    this.createForm();
    this.form.controls['password'].disable();
   sociallogin.validateMobileNumber();

  }

  onGoogleLogin() {
    this.sociallogin.socialSignIn('google');
  }
  onFacebookLogin() {
    this.sociallogin.socialSignIn('facebook');
  }


  createForm() {
    this.form = this.formBuilder.group({

      email: ['', Validators.compose([
        Validators.required,
      ])],


      // Password Input
      password: ['', Validators.compose([
        Validators.required,
      ])]
    });
  }





  onLogin() {
    this.processing = true;
    this.member.email = this.form.get('email').value;
    this.member.password = this.form.get('password').value;
    this.sociallogin.isMember(this.member)
      .subscribe((data) => {
        if (data != null) {
          console.log(data[0].firstName);
          localStorage.setItem("email", this.member.email);
          localStorage.setItem("userName", data[0].firstName);
           this.messageClass = '';
          this.message = '';
          {
            this.snackBar.open(" Welcome " + data[0].firstName + " " + data[0].lastName, "", {
              duration: 2000,
              extraClasses: ['blue-snackbar']
            });
          }

          this.processing = false;
          {
            setTimeout(() => {
              window.location.reload();
              this.router.navigate(['home']);
            }, 3000);
          }
        } else {
          this.processing = false;
          this.messageClass = 'alert alert-danger';
          this.message = "Password is wrong";
          this.form.controls['password'].setValue('');

        }
      });
  }


    checkEmail() {
    this.member.email = this.form.get('email').value;
     const regExp = new RegExp(/^([a-zA-Z0-9])([a-zA-Z0-9._]){5}([a-zA-Z0-9._]*)@([a-zA-Z]+)(([.][a-zA-Z][a-zA-Z][a-zA-Z]))$/);
    
     if(this.member.email==''){
         this.messageClass = '';
          this.message = '';
     }else {
    this.sociallogin.checkEmail(this.member)
      .subscribe((data) => {
        if (data) {
         // this.validEmail = false;
          this.messageClass = 'alert alert-success';
          this.message = "email id is available";
           this.form.controls['password'].enable();
         
        } else {
         // this.validEmail = true;
          // this.messageClass = 'alert alert-success';
          // this.message = "email id available";
          this.messageClass = 'alert alert-danger';
          this.message = "email id does not exist";
           this.form.controls['password'].setValue('');
           this.form.controls['password'].disable();
         
        }
      });
     }
}

keyDown(event) {
       const allowedRegex = /[0-9a-zA-Z._@]/g;

        if (!event.key.match(allowedRegex)) {
            event.preventDefault();
        }
    }

  ngOnInit() {
  }


}


