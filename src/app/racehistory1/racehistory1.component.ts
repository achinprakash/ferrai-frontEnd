import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FerrariService } from "../ferrari.service";


@Component({
  selector: 'app-racehistory1',
  templateUrl: './racehistory1.component.html',
  styleUrls: ['./racehistory1.component.css']
})
export class Racehistory1Component implements OnInit {


  constructor(private http:HttpClient,private router: Router,private myservice:FerrariService) { }

  data : any ;
  loading = true;
  catch;

  ngOnInit() {


this.catch=this.myservice.raceHistory1()
  
  this.catch
    .subscribe(
      (data: any) => {
          this.data=data;
          this.loading = false;

          
      }
         )

  }
   fulltable(event:any)
  {
 
 this.router.navigate(['table', event]);
  }

}
