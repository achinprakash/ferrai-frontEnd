import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EventsService {

data1;

  constructor(private http:HttpClient) {

   }


getEventData(event: any)
{
//   this.http.get("http://localhost:8081/Ferrari/events/"+event)
//   .subscribe((result)=>{console.log("In service: ", result);this.data1=result;console.log("data1", this.data1)});
//   console.log("service data: ", this.data1);
// 
}

// eventdetails()
// {
//   return 'this is my data';

// }




}
