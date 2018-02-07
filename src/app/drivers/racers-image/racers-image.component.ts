import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {EventsService} from '../../events.service';
import {MatCardModule} from '@angular/material/card';
import {MatDialog} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from "angular5-social-login";
import { FerrariService } from "../../ferrari.service";

 

@Component({
  selector: 'app-racers-image',
  templateUrl: './racers-image.component.html',
  styleUrls: ['./racers-image.component.css']
})
export class RacersImageComponent implements OnInit {
data:any;
found:boolean=true;
member:any='[]';
loading = true;
inl:number;

 constructor(private httpClient:HttpClient,public dialog: MatDialog,private authService: AuthService, private ferrariService: FerrariService) { 

    // this.httpClient.get("http://ferrariclubserverdev.azurewebsites.net/Ferrari/racerdetails")
    this.ferrariService.entireRacerDetails()
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
//  public loading:boolean = true;
 ngOnInit() { 
  //    this.data.racerdetails().subscribe((data)=>{
  //    this.member=data;
  //    this.loading=false;
  //    console.log(this.data);
  //  }
  //    );
 }
 openDialog() {
   
}

 show(inl){
  console.log(inl);
    this.ferrariService.showRacerDetails(inl)
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
