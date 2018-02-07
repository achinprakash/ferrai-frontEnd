import { Injectable } from '@angular/core';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angular5-social-login';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import {environment} from '../environments/environment';


@Injectable()
export class FerrariService {

  useremail;


  address;

  booleanemail: any;
  email: string;
  order;
  order1;
  value = '';
  member = {
    "firstName": "",
    "lastName": "",
    "age": "",
    "country": "",
    "gender": "",
    'password': "",
    "email": ""
  }

  userProfileData = {
      'email':'',
      'firstName':''
    };
    idToken;



  constructor(private socialAuthService: AuthService, private _http: HttpClient, private router: Router) {

 }


 //private localUrl = 'http://localhost:8080/Ferrari/';

private localUrl = environment.BASEURL;

  public socialSignIn(socialPlatform: string) {

    let socialPlatformProvider;
    if (socialPlatform == 'facebook') {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + ' sign in data : ', userData);


        if(socialPlatform == "facebook") {
          this.userProfileData.email = userData.email;
          this.userProfileData.firstName = userData.name;
          console.log(this.userProfileData);

          this._http.post(this.localUrl+'facebookmembers',this.userProfileData)
          .subscribe(data => {

            if (data == true) {
              localStorage.setItem('email', userData.email);
              localStorage.setItem('userName', userData.name);
              window.location.reload();
              this.router.navigate(['home']);
            }
            else {
              console.log(false);
            }
          });
        }

        else if(socialPlatform == "google") {
          this.idToken = {
                    'idToken': userData.idToken
                   }
          this._http.post(this.localUrl+'googlemembers',this.idToken)
          .subscribe(data => {

            if (data == true) {
              localStorage.setItem('email', userData.email);
              localStorage.setItem('userName', userData.name);
              window.location.reload();
              this.router.navigate(['home']);
            }
            else {
              console.log(false);
            }
          });
        }

      }
    );
  }
updateMember(user) {
    const req = this._http.post(this.localUrl + 'updatedata', user)
      .subscribe(
      res => {
        console.log(res);
      }
      );
  }
 addMember(user: any) {
    this.member = user;
    //return this._http.post(this.localUrl + 'members', this.member);
    return this._http.post(this.localUrl+'members', this.member);

  }
 checkEmail(member: any) {
    this.member = member;
    console.log(this.member);
    return this._http.post(this.localUrl+'checkemail', this.member);
  }
isMember(member: any) {
  this.member = member;
  console.log(this.member);
  return this._http.post(this.localUrl + 'validateuser', this.member);
}
getMenProduct(name: any) {
   return this._http.get(this.localUrl + 'men/catageory/' + name);

  }

getWomenProduct(name: any) {
    return this._http.get(this.localUrl + 'women/catageory/' + name);
   }

getByProduct(name: any) {

    return this._http.get(this.localUrl + 'product/' + name);

  }

getSearchItems(value: any) {
    console.log(value);
    return this._http.get(this.localUrl + 'type/' + value);
  }
getData(val) {
  this.value = val;
  console.log(this.value);
  window.localStorage.setItem('value', val);
}
sentData() {
    console.log('Called');
    if (this.value == '') {
      this.value = window.localStorage.getItem('value');
    }
    console.log(this.value);
    return this._http.get(this.localUrl + 'product/' + this.value);
  }
   showRacerDetails(inl: number) {
  console.log(inl);
   return this._http.get(this.localUrl + `racerdetails/${inl}`);
 }

 entireRacerDetails() {
return this._http.get(this.localUrl + `racerdetails/`);
 }
  addToCart(event: any, email: any)
   // tslint:disable-next-line:one-line
    {
       console.log(event);
       console.log(email);
       this.order = {
       order_id : '',
       email: email,
       product : {
       product_image: '',
       product_name: '',
       product_description: '',
       color: '',
       price: '',
       product_id: event,
       gender : {
       gender_id: '',
       gender_name: ''
     },
    category: {
      category_id: '',
      category_name: ''
    },
    type: {
      type_id: '',
      type_name: '',
      category: {
      category_id: '',
      category_name: ''
      }
    }

  },
    quantity: ''
};
   return this._http.post(this.localUrl + 'addtocart', this.order);


    }
  raceHistory(event)
  {

     return this._http.get(this.localUrl+'history/'+event);
  }

raceHistory1()
{
  return this._http.get(this.localUrl+'grandprix');
}

raceEvents()
{
  return this._http.get(this.localUrl+'events');
}


  getUserData(get: any) {
    // this.get.email = localStorage.getItem('email');
    // console.log(this.get);
    return  this._http.post(this.localUrl+ 'getdata', get);
  }

getCartItems() {
    this.useremail=localStorage.getItem('email');
    this.useremail=this.useremail+'/';
    return this._http.get(this.localUrl+ 'retrivecartitems/' + this.useremail);
}
updateQuantity(event: any, product_id : number, email:any){
   this.order = {
     email: email,
     product: {
       product_id: product_id
     },
     quantity: event
   };
   return this._http.post(this.localUrl + 'updatequantity', this.order);
}
delete(product_id: any) {
  console.log(product_id);
  this.useremail = localStorage.getItem('email');
  console.log(this.useremail);
  this.order1 = {
     email: this.useremail,
     product: {
       product_id: product_id
     },
     quantity: ''
   };
    return this._http.post(this.localUrl + 'deletecartitems', this.order1);
}
    addAddress(address: any) {
    this.address = address;
    //return this._http.post(this.localUrl + 'members', this.member);
    return this._http.post(this.localUrl+'address', this.address);

  }



displayGallery(){
return this._http.get(this.localUrl + `photo/`);
 }
  slideGallery(inl:number){
  console.log(inl);
   return this._http.get(this.localUrl + `photo/${inl}`);
 }
 displayRecord(){
return this._http.get(this.localUrl + `video/`);
 }
 
validateMobileNumber(){

  this._http.get("http://apilayer.net/api/validate?access_key=584594bf3116e20e7b8456c1510ea524&number=8961221419&country_code=IN&format=1")
  .subscribe((x) => {
    console.log(x);
  })

}


}

