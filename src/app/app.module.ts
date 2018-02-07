import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from 'angular5-social-login';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
// tslint:disable-next-line:max-line-length
import { MatButtonModule, MatSnackBarModule, MatCardModule, MatInputModule, MatRadioModule, MatSelectModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatToolbarModule, MatIconModule, MatMenuModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatChipsModule, MatListModule, MatSidenavModule, MatExpansionModule, MatProgressBarModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BodyComponent } from './homePage/body/body.component';
import { FooterComponent } from './sharedFolder/footer/footer.component';
import { HeaderComponent } from './sharedFolder/header/header.component';
import { HistoryComponent } from './homePage/history/history.component';
import { PhotoComponent } from './homePage/photo/photo.component';
import { VideoComponent } from './homePage/video/video.component';
import { ShopComponent } from './homePage/shop/shop.component';
import { LoginbodyComponent } from './login/loginbody/loginbody.component';
import { AppRoutingModule } from './app-routing.module';
import { CorouselComponent } from './homePage/corousel/corousel.component';
import { NewsComponent } from './homePage/news/news.component';
import { DriversComponent } from './homePage/drivers/drivers.component';
import { ShoppingCarouselComponent } from './OnlineStore/shopping-carousel/shopping-carousel.component';
import { ShoppingContentComponent } from './OnlineStore/shopping-content/shopping-content.component';
import { ShoppingMainComponent } from './OnlineStore/shopping-main/shopping-main.component';
import { ShoppingNavigationComponent } from './OnlineStore/shopping-navigation/shopping-navigation.component';
import { ShippingComponent } from './OnlineStore/shipping/shipping.component';
import {EventsService} from './events.service';
import {MatTableModule} from '@angular/material/table';
import { EventbodyComponent, sai } from './events/eventbody/eventbody.component';
import { CaroselSliderComponent } from './drivers/carosel-slider/carosel-slider.component';
import { RacersImageComponent } from './drivers/racers-image/racers-image.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { EventmodalboxComponent } from './events/eventmodalbox/eventmodalbox.component';
import { RegisterComponent } from './registeration/register/register.component';
import { RacehistoryComponent } from './racehistory/racehistory.component';
import { Racehistory1Component } from './racehistory1/racehistory1.component';
import { FerrariService } from './ferrari.service';
import { ProductDescriptionComponent } from './OnlineStore/product-description/product-description.component';
import { LoginguardService } from "./loginguard.service";
import { CartitemsComponent } from './OnlineStore/cartitems/cartitems.component';

import { GalleryComponent } from './gallery/gallery.component';
import { RecordComponent } from './record/record.component';

import { AddressComponent } from './OnlineStore/address/address.component';

export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
    [
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider('315075402318138')
      },
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('805987514852-132gmfltvefh5cmh8a99mam4ttcp1l87.apps.googleusercontent.com')
      }
    ]
  );
  return config;
}
@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    FooterComponent,
    HeaderComponent,
    NewsComponent,
    HistoryComponent,
    PhotoComponent,
    VideoComponent,
    ShopComponent,
    LoginbodyComponent,
    CorouselComponent,
    DriversComponent,
    ShoppingCarouselComponent,
    ShoppingContentComponent,
    ShoppingMainComponent,
    ShoppingNavigationComponent,
    ShippingComponent,
    EventbodyComponent,
    CaroselSliderComponent,
    RacersImageComponent,
    EditProfileComponent,
    RegisterComponent,
    sai,
    EventmodalboxComponent,
    RegisterComponent,
    RacehistoryComponent,
    Racehistory1Component,
    ProductDescriptionComponent,
    CartitemsComponent,
    GalleryComponent,
    RecordComponent,
    AddressComponent
  ],
  imports: [
    AppRoutingModule,
    MatTableModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    SocialLoginModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CarouselModule.forRoot(),
    MatExpansionModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs,
    },
    FerrariService,
    EventsService,
    LoginguardService
  ],


  entryComponents: [EventbodyComponent, sai],
  bootstrap: [AppComponent]

})
export class AppModule { }
