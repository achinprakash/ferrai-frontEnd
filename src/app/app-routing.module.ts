import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginbodyComponent } from './login/loginbody/loginbody.component';
import { BodyComponent } from './homePage/body/body.component';
import { ShoppingContentComponent } from './OnlineStore/shopping-content/shopping-content.component';
import { EventbodyComponent } from './events/eventbody/eventbody.component';
import { CaroselSliderComponent } from './drivers/carosel-slider/carosel-slider.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { ShippingComponent } from './OnlineStore/shipping/shipping.component';
import { CartitemsComponent } from './OnlineStore/cartitems/cartitems.component';
import { Racehistory1Component } from './racehistory1/racehistory1.component';
import { RegisterComponent } from './registeration/register/register.component';
import { RacehistoryComponent } from './racehistory/racehistory.component';
import { ProductDescriptionComponent } from './OnlineStore/product-description/product-description.component';
import { ShoppingNavigationComponent } from "./OnlineStore/shopping-navigation/shopping-navigation.component";
import { LoginguardService } from "./loginguard.service";


import { GalleryComponent } from './gallery/gallery.component';
import { RecordComponent } from './record/record.component';
import { AddressComponent } from './OnlineStore/address/address.component';
const routes: Routes = [
 { path: '', redirectTo: 'home' , pathMatch: 'full'},
  {
      path: 'login',
      component: (() => {
      return localStorage.getItem('email') ? BodyComponent : LoginbodyComponent;
    })()
  },
   {
      path: 'home',
      component: BodyComponent
  },
  {

      path: 'shop',
      component: ShoppingContentComponent,
      canActivate: [
          LoginguardService
      ]
      
      
  },
   {
      path: 'edit-profile',
      component: EditProfileComponent,
      canActivate: [
          LoginguardService
      ]
  },
  {
      path: 'events',
      component: EventbodyComponent,
      canActivate: [
          LoginguardService
      ]
  },
  {
      path: 'photo',
      component: GalleryComponent,
      canActivate: [
          LoginguardService
      ]
  },
  {
      path: 'login/register',
      component: (() => {
      return localStorage.getItem("email") ? BodyComponent : RegisterComponent;
    })()
  },
   
  {
    path:'history',
    component: Racehistory1Component,
    canActivate: [
          LoginguardService
      ]
  },
{
     path: 'table/:data',
     component:  RacehistoryComponent,
     canActivate: [
          LoginguardService
      ] 
},
{
    path: 'drivers',
    component: CaroselSliderComponent,
    canActivate: [
        LoginguardService
    ]
    
},

{
    path: 'shop/description',
        component: ProductDescriptionComponent,
        canActivate: [
          LoginguardService
      ]
},
{
    path: 'shop/description/cartitems',
        component: CartitemsComponent,
        canActivate: [
          LoginguardService
      ]
},
{
    path: 'shop/description/cartitems/address',
        component: AddressComponent,
        canActivate: [
          LoginguardService
      ]
},
{
    path: 'shop/description/shipping',
        component: ShippingComponent,
        canActivate: [
          LoginguardService
      ]
},
{
    path: 'video',
        component: RecordComponent,
        canActivate: [
          LoginguardService
      ]

},
];
@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
