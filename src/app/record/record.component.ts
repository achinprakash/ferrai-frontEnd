import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from "angular5-social-login";
import { FerrariService } from "../ferrari.service";



@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {
data:any;
found:boolean=true;
member:any='';
loading = true;
inl:number;
  constructor(private httpClient:HttpClient,private authService: AuthService, private ferrariService: FerrariService) {

       this.ferrariService.displayRecord()
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

}



