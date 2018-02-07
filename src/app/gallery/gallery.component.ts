import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from "angular5-social-login";
import { FerrariService } from "../ferrari.service";


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
data:any;
found:boolean=true;
member:any='[]';
loading = true;
inl:number;
  constructor(private httpClient:HttpClient,private authService: AuthService, private ferrariService: FerrariService) {

       this.ferrariService.displayGallery()
    .subscribe(
      (data: any[]) => {
          this.data=data;
          this.loading=false;
          if(data.length!=0){
          this.member=data;
          this.found=true;
          }
      }
    )
   }

  ngOnInit() {
  }
  slide(inl){
  console.log(inl);
    this.ferrariService.slideGallery(inl)
  .subscribe(
      (data:any[]) => {
         
          console.log(data);
          if(data.length!=0){
          this.member=data;
         
          }
       
      },
      
    )
 }
}


