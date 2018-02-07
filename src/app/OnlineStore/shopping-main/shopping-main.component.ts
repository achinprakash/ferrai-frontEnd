import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FerrariService } from '../../ferrari.service';
@Component({
  selector: 'app-shopping-main',
  templateUrl: './shopping-main.component.html',
  styleUrls: ['./shopping-main.component.css'],
  // tslint:disable-next-line:use-input-property-decorator
  inputs: ['data']
})
export class ShoppingMainComponent implements OnInit {
  data: any[];
  //searchdata:any[];
  search:'';
  name;
  constructor(private http: HttpClient, private ferrariservice: FerrariService) { }
  ngOnInit() {
   }
  getData(event: any) {
    this.name = event.target.value;
   this.ferrariservice.getByProduct(this.name).subscribe((result: any[]) => {
        console.log(result);
        this.data = result;
        console.log(this.data);
      });
  }
  description(event: any)
  // tslint:disable-next-line:one-line
  {
    console.log(event);
    this.ferrariservice.getData(event);
  }
 onSubmit(value: any)
  {
    console.log(this.search);
    this.ferrariservice.getSearchItems(this.search).subscribe((result: any[]) => { console.log(result); this.data = result; console.log(this.data); console.log(this.data[0]); });
  }


}


