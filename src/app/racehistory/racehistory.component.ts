import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FerrariService } from "../ferrari.service";



@Component({
  selector: 'app-racehistory',
  templateUrl: './racehistory.component.html',
  styleUrls: ['./racehistory.component.css']
})
export class RacehistoryComponent implements OnInit {

  
data : any [];
 Race_Data: History[] 
event1=0;
data1:any[];
imported;
catch;
loading = true;
displayedRaces = ['circuit','year','winner3','team1'];

// dataSource = new MatTableDataSource<History>(this.Race_Data);
  constructor(private http:HttpClient,private aroute:ActivatedRoute,private ferrari:FerrariService) {
    this.imported = aroute.snapshot.paramMap.get("data");
   }

  ngOnInit() {

    this.catch=this.ferrari.raceHistory(this.imported)
      this.catch
     .subscribe(
      (data: any[]) => {
          this.data1=data;
          this.loading = false;
          this.event1=this.data1[0].grandprix.grandprixname;
         
      }
    
    )
  

  }

}
