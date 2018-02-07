import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {FerrariService } from "../../ferrari.service";
import {Router} from '@angular/router';
import { MatDatepickerInputEvent } from "@angular/material/datepicker";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

countries = [ "Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
		,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands"
		,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
		,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
		,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana"
		,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
		,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
		,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
		,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
		,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
		,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles"
		,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan"
		,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia"
		,"Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)"
		,"Yemen","Zambia","Zimbabwe" ];


  booleanemail;
  country = 'India';
  gender= 'Male';
  message;
  messageClass;
  processing = false;
  register;
  validEmail;
  form: FormGroup;
  date;
  month;
  year;
  minDate;
  maxDate; 
  


 member = {
    "firstName": "",
    "lastName": "",
    "dateOfBirth":"",
    "country": "",
    "gender": "",
    "password": "",
    "email": "",
  }


  constructor(
    private formBuilder: FormBuilder,
    private signUpService: FerrariService,
    private router:Router,
    public snackBar: MatSnackBar,
    
  ) {
    this.createForm(); 
     var cur = new Date();
     this.maxDate = new Date(cur.getFullYear() - 14, cur.getMonth(), cur.getDate());
    this.minDate = new Date(cur.getFullYear() - 130, cur.getMonth(), cur.getDate());
  }

  //  create registration form
  createForm() {
    this.form = this.formBuilder.group({

      email: ['', Validators.compose([
        Validators.required, 
        Validators.minLength(10), 
         Validators.maxLength(30), 
        this.validateEmail 
      ])],

      fname: ['', Validators.compose([
        Validators.required, 
        Validators.minLength(2), 
        Validators.maxLength(20), 
        this.validatefname 
      ])],

      // fname Input
      lname: ['', Validators.compose([
        Validators.required, 
        Validators.minLength(1), 
        Validators.maxLength(20), 
        this.validatelname 
      ])],

  
      //dateOfBirth
       dateOfBirth: ['', Validators.compose([
        Validators.required 
       
      ])],
    
      // gender Input
      gender: ['', Validators.required
      ],
      // Country Input
      country: ['', Validators.required
      ],


      // Password Input
      password: ['', Validators.compose([
        Validators.required, 
        Validators.minLength(8), 
         Validators.maxLength(20), 
        this.validatePassword 
      ])],
      // Confirm Password Input
      confirm: ['', Validators.required] 
    }, { validator: this.matchingPasswords('password', 'confirm') }); 
  }

  //  to validate e-mail is proper format
  validateEmail(controls) {
    
    const regExp = new RegExp(/^([a-zA-Z0-9])([a-zA-Z0-9._]){5}([a-zA-Z0-9._]*)@([a-zA-Z]+)(([.][a-zA-Z][a-zA-Z][a-zA-Z]))$/);
 
    if (regExp.test(controls.value)) {
      return null;
    } else {
      return { 'validateEmail': true } 
    }
  }


  validatefname(controls) {
    const regExp = new RegExp(/^([a-zA-Z])([a-zA-Z ]+)$/);
    if (regExp.test(controls.value)) {
      return null; 
    } else {
      return { 'validatefname': true } 
    }
  }

  validatelname(controls) {
  
    const regExp = new RegExp(/^([a-zA-Z]+)$/);
    
    if (regExp.test(controls.value)) {
      return null; 
    } else {
      return { 'validatelname': true } 
    }
  }

  // Function to validate password
  validatePassword(controls) {
    
    const regExp = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d]).{8,35}$/);
   
    if (regExp.test(controls.value)) {
      return null;
    } else {
      return { 'validatePassword': true } 
    }
  }

  // Funciton to ensure passwords match
  matchingPasswords(password, confirm) {
    return (group: FormGroup) => {
      
      if (group.controls[password].value === group.controls[confirm].value) {
        return null; 
      } else {
        return { 'matchingPasswords': true } 
      }
    }
  }

  emptyConfirmPassword(){

     this.member.password = this.form.get('password').value;
     if(this.member.password ==''){
       this.form.controls['confirm'].setValue('');
     }

  }




  onRegisterSubmit() {
    this.processing = true;
    this.disableForm();
    this.member.firstName = this.form.get('fname').value;
    this.member.lastName = this.form.get('lname').value;
    this.member.email = this.form.get('email').value;
    //this.member.age = this.form.get('age').value;
    this.member.dateOfBirth = (this.month+1)+'/'+this.date+'/'+this.year;
    this.member.country = this.form.get('country').value;
    this.member.password = this.form.get('password').value;
    this.member.gender = this.form.get('gender').value;
     this.signUpService.addMember(this.member)
     .subscribe((data)=>{
           if (data) {
      //this.messageClass = 'alert alert-success';

          {
    this.snackBar.open(" Registeration Successful","", {
      duration: 4000,
      extraClasses: ['blue-snackbar']
    });
  }

  this.router.navigate(['login']);
      // {this.message = "Registeration successful";
      //  setTimeout(() => {
      //      this.router.navigate(['login']);
      //   }, 2000);}
     
     // this.router.navigate(['login']);
    } else {
      // this.messageClass = 'alert alert-danger';
      // this.message = "Registeration Unsuccessful";
      this.processing = false;
               {
    this.snackBar.open(" Registeration failed","", {
      duration: 4000,
      extraClasses: ['blue-snackbar']
    });
  }
      this.enableForm();

    }

     });


    console.log(this.form.value);
  }

  ngOnInit() {
  }

// email is avaiable in the database or not
  checkEmail() {
    this.member.email = this.form.get('email').value;
     const regExp = new RegExp(/^([a-zA-Z0-9])([a-zA-Z0-9._]){5}([a-zA-Z0-9._]*)@([a-zA-Z]+)(([.][a-zA-Z][a-zA-Z][a-zA-Z]))$/);
    if(regExp.test(this.member.email)){
    this.signUpService.checkEmail(this.member)
      .subscribe((data) => {
        if (data) {
          this.validEmail = false;
          this.messageClass = 'alert alert-danger';
          this.message = "email id already exist";
         
        } else {
          this.validEmail = true;
          // this.messageClass = 'alert alert-success';
          // this.message = "email id available";
         
        }
      });
  }

}

disableForm(){
this.form.controls['fname'].disable();
this.form.controls['lname'].disable();
this.form.controls['dateOfBirth'].disable();
this.form.controls['email'].disable();
this.form.controls['country'].disable();
this.form.controls['password'].disable();
this.form.controls['confirm'].disable();
this.form.controls['gender'].disable();

}

enableForm(){
this.form.controls['fname'].enable();
this.form.controls['lname'].enable();
this.form.controls['dateOfBirth'].enable();
this.form.controls['email'].enable();
this.form.controls['country'].enable();
this.form.controls['password'].enable();
this.form.controls['confirm'].enable();
this.form.controls['gender'].enable();

}

   addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
     this.date =event.value.getDate() ;
     this.month=event.value.getMonth();
     this.year=event.value.getFullYear();
   }

}