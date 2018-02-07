import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {FerrariService } from "../../ferrari.service";
import {Router} from '@angular/router';
import { MatDatepickerInputEvent } from "@angular/material/datepicker";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
  
})
export class AddressComponent implements OnInit {
 
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

    internetBanking = [ 'state bank of india','Punjab national bank','DIGI bank'];
    cardBanking = [ 'state bank of india - Credit card','state bank of india - Debit card','Punjab national bank','DIGI bank','UCO bank','Dena bank'];
    wallets = [ 'PAYTM','FREECHARGE','JIO-MONEY','AIRTEL-MONEY','OXYGEN-WALLET'];

      payments = [
    'Cash on Delivery',
    'Debit card',
    'Net Banking',
    'E-Wallet',
  ];

  selectedpayment:string;
  

  
  booleanemail;
  country = 'India';
  //gender= 'Male';
  message;
  messageClass;
  processing = false;
  register;
  validEmail;
  form: FormGroup;
  display = false;
  total;
  internetBankingDef = 'state bank of india';
  cardDef = 'Punjab national bank' ;
  walletDef = 'PAYTM';

  
address = {
    "firstName": "",
    "lastName": "",
    "state":"",
    "address":"",
    "city": "",
    "country": "",
    "email": "",
    "pincode":""
  }


  constructor(
    private formBuilder: FormBuilder,
    private ferrariService: FerrariService,
    private router:Router,
    public snackBar: MatSnackBar,
  
    
  ) {
    this.createForm();
    //  this.getdata();
     console.log("Constructor"); 
     this.total = Number(localStorage.getItem('total'));
     console.log(this.total);
     

    
    
  }

  //  create registration form
  createForm() {
    this.form = this.formBuilder.group({


      fname: ['', Validators.compose([
        Validators.required, 
        Validators.minLength(2), 
        Validators.maxLength(20), 
        this.validatefname 
      ])],

      // fname Input
      lname: ['', Validators.compose([
        Validators.required, 
        Validators.minLength(2), 
        Validators.maxLength(20), 
        this.validatelname 
      ])],


      city: ['', Validators.compose([
        Validators.required, 
        Validators.minLength(3), 
        Validators.maxLength(25), 
        this.validateCity 
      ])],

         address: ['', Validators.compose([
        Validators.required, 
        Validators.minLength(3), 
        Validators.maxLength(50), 
        this.validateAddress 
      ])],

        state: ['', Validators.compose([
        Validators.required, 
        Validators.minLength(3), 
        Validators.maxLength(25), 
        this.validateState 
      ])],

      postalCode:['', Validators.compose([
        Validators.required, 
        Validators.minLength(6), 
        this.validatePincode 
      ])],

      country: ['', Validators.required
      ],


    }); 
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

    validateCity(controls) {
    const regExp = new RegExp(/^([a-zA-Z])([a-zA-Z ]+)$/);
    if (regExp.test(controls.value)) {
      return null; 
    } else {
      return { 'validateCity': true } 
    }
  }

   validateAddress(controls) {
    const regExp = new RegExp(/^([0-9a-zA-Z])([0-9a-zA-Z /,-]+)$/);
    if (regExp.test(controls.value)) {
      return null; 
    } else {
      return { 'validateAddress': true }
    }
  }

   validateState(controls) {
    const regExp = new RegExp(/^([a-zA-Z])([a-zA-Z0-9 ]+)$/);
    if (regExp.test(controls.value)) {
      return null; 
    } else {
      return { 'validateState': true } 
    }
  }


  validatePincode(controls) {
    const regExp = new RegExp(/^([1-9])([0-9]+)$/);
    if (regExp.test(controls.value)) {
      return null; 
    } else {
      return { 'validatePincode': true } 
    }
  }




   onSubmit() {
 
    this.address.firstName = this.form.get('fname').value;
    this.address.lastName = this.form.get('lname').value;
     this.address.city = this.form.get('city').value;
    this.address.email = localStorage.getItem('email');
    this.address.country = this.form.get('country').value;
     this.address.address = this.form.get('address').value;
      this.address.state = this.form.get('state').value;
       this.address.pincode = this.form.get('postalCode').value;
        console.log(this.form.value);

             this.ferrariService.addAddress(this.address)
     .subscribe((data)=>{
           if (data) {
             this.processing = true;
             this.disableForm();
          this.display = true;
          {
    this.snackBar.open(" Delivery Address added","", {
      duration: 4000,
      extraClasses: ['blue-snackbar']
    });
  }
    } else if(!data){
        this.processing = false;
               {
    this.snackBar.open(" server is slow","", {
      duration: 4000,
      extraClasses: ['blue-snackbar']
    });
  }
     

    }

     });
       
   }




  ngOnInit() {
  }

// email is avaiable in the database or not
 

disableForm(){
this.form.controls['fname'].disable();
this.form.controls['lname'].disable();
this.form.controls['city'].disable();
this.form.controls['state'].disable();
this.form.controls['country'].disable();
this.form.controls['state'].disable();
this.form.controls['address'].disable();
this.form.controls['postalCode'].disable();

}


order(){
          {
    this.snackBar.open(" Your Order will be delivered soon!","", {
      duration: 4000,
      extraClasses: ['blue-snackbar']
    });
  }
   this.router.navigate(['home']);

}

pay(){
  {
    this.snackBar.open(" Your Payment is Successfull","", {
      duration: 4000,
      extraClasses: ['blue-snackbar']
    });
  }
   this.router.navigate(['home']);

}


}
