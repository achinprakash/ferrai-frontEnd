import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {EventsService} from '../../events.service';
import {MatCardModule} from '@angular/material/card';
import {MatDialog} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FerrariService } from "../../ferrari.service";

@Component({
  selector: 'app-eventbody',
  templateUrl: './eventbody.component.html',
  styleUrls: ['./eventbody.component.css']

})
export class EventbodyComponent implements OnInit {

  constructor(private http:HttpClient,private myservice:EventsService,public dialog: MatDialog,private ferrari:FerrariService) { }


data : any ;
event1;
data1:any[];
loading = true;
catch;


ngOnInit() {

 this.catch = this.ferrari.raceEvents()

    this.catch
    .subscribe(
      (data: any) => {
          this.data=data;
         this.loading=false;
      }
         )
      }
   name:String='';
   getData(event:any){
     
    
 const dialogRef = this.dialog.open(sai, {
      height: '300px',
      width: '600px'


      
    });

    
      document.getElementById("header1").innerHTML= this.data[event-1].country+" grandprix";
    document.getElementById("header2").innerHTML="<pre>" +  "Circuit name :  "+this.data[event-1].circuitname+" grandprix circuit"+"<br>"+"Racer 1:        "+this.data[event-1].racer1+"<br>"+"Racer 2:        "+this.data[event-1].racer2+"<br>"+"Total Distance: "+this.data[event-1].lapdistance+"<br>"+"Total laps:     "+this.data[event-1].totallaps+"</pre>";
    
// +"date :"+this.data[event-1].date + "<br>"

}
}
@Component({
  selector: 'sai',
  templateUrl: 'sai.html',
})
export class sai { }

