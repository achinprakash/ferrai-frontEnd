import { Component, OnInit } from '@angular/core';
import  {  HttpClient  }  from  '@angular/common/http';

@Component({
  selector: 'app-shopping-navigation',
  templateUrl: './shopping-navigation.component.html',
  styleUrls: ['./shopping-navigation.component.css'],

})
export class ShoppingNavigationComponent implements OnInit {
  search = '';
  constructor(private http: HttpClient) { }
  data: any[];
  ngOnInit() {
  }

  onSubmit(value: any)
  {

    this.http.get('http://ferrariclubserverdev.azurewebsites.net/Ferrari/type/' + this.search).subscribe((result: any[]) => { console.log(result); this.data = result; console.log(this.data); console.log(this.data[0]); });

  }
}