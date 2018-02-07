import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FerrariService } from '../../ferrari.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {


  user = {
    'firstName': '',
    'lastName': '',
    'dateOfBirth': '',
    id: 0,
    'country': '',
    'gender': '',
    'password': '',
    'email': '',
  };


  first: string;
  last: string;
  gender: string;
  dateOfBirth: string;
  email: string;
  password: string;
  country: string;
  take: number;

 get = {
    'firstName': '',
    'lastName': '',
    'dateOfBirth': '',
    id: 0,
    'country': '',
    'gender': '',
    'password': '',
    'email': '',
  };




  getdatavalue: number;
  form: FormGroup;

  constructor(private http: HttpClient, private ferrariService: FerrariService, private formBuilder: FormBuilder,
    private router: Router) {
      this.createForm(); 
  }

  createForm() {
    this.form = this.formBuilder.group({

  
      first: ['', Validators.compose([
        Validators.required, 
        Validators.minLength(2), 
        Validators.maxLength(20), 
        this.validatefname 
      ])],

      // fname Input
      last: ['', Validators.compose([
        Validators.required, 
        Validators.minLength(1), 
        Validators.maxLength(20), 
        this.validatelname 
      ])],
      dateOfBirth:[],
      email:[],
      country: ['', Validators.required
      ],
      gender:[]

    });
  }

   validatefname(controls) {
    const regExp = new RegExp(/^([a-zA-Z ]+)$/);
    if (regExp.test(controls.value)) {
      return null; 
    } else {
      return { 'validatefname': true } 
    }
  }

  validatelname(controls) {
  
    const regExp = new RegExp(/^[a-zA-Z]+$/);
    
    if (regExp.test(controls.value)) {
      return null; 
    } else {
      return { 'validatelname': true } 
    }
  }

  

  



  ngOnInit() {
    this.getdata();
  }
  getdata() {
     this.get.email = localStorage.getItem('email');
    // console.log(this.get);
    

    this.ferrariService.getUserData(this.get).subscribe (
      value => {
        console.log(value);
        this.first = value[0].firstName;
        this.last = value[0].lastName;
        this.country = value[0].country;
        this.email = value[0].email;
        this.dateOfBirth = value[0].dateOfBirth;
        this.password = value[0].password;
        this.gender = value[0].gender;

        this.form.controls['dateOfBirth'].disable();
        this.form.controls['email'].disable();
        this.form.controls['country'].disable();
        //this.form.controls['password'].disable();
       // this.form.controls['confirm'].disable();
        this.form.controls['gender'].disable();

      });
  }
  register() {
     localStorage.setItem("userName" , this.first);
    this.user.dateOfBirth = this.dateOfBirth;
    this.user.country = this.country;
    this.user.email = this.email;
    this.user.firstName = this.first;
    this.user.lastName = this.last;
    this.user.gender = this.gender;
    this.user.id = this.getdatavalue;
    this.user.password = this.password;

    this.ferrariService.updateMember(this.user);
    //this.router.navigate(['home']);
     window.location.reload();
      this.router.navigate(['home']);
      this.router.navigate(['/']);

  }
}
