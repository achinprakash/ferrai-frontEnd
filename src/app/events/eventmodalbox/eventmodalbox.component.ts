import { Component, OnInit,Input } from '@angular/core';
import {EventsService} from '../../events.service';

@Component({
  selector: 'app-eventmodalbox',
  templateUrl: './eventmodalbox.component.html',
  styleUrls: ['./eventmodalbox.component.css'],
  inputs:['data']
})
export class EventmodalboxComponent implements OnInit {

  @Input() event1;
  constructor(private myservice:EventsService) { 
    console.log("Input:", this.event1);
    this.event1 = this.myservice.data1;
    console.log("Coming in ts: ", this.event)
  }


event:string='';
  ngOnInit() {
// console.log(data);

// this.event=this.myservice.eventdetails();

// console.log(this.event);

console.log('hi')



  }
// // data2:any[];

// // this.myservice.eventdetails();

// console.log(data1);
  // console.log('h1');
  // console.log(this.myservice.data1)


}
