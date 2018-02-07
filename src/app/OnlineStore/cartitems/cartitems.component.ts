import { Component, OnInit} from '@angular/core';
import { FerrariService } from '../../ferrari.service';
@Component({
  selector: 'app-cartitems',
  templateUrl: './cartitems.component.html',
  styleUrls: ['./cartitems.component.css'],
})
export class CartitemsComponent implements OnInit {
email= localStorage.getItem('email');
  constructor(private ferrariservice: FerrariService) {
      this.retriveCartItems();
     
  }
 data: any[];
 total: any;
 proceed= true;

  ngOnInit() {
  }
  retriveCartItems() {
    this.ferrariservice.getCartItems()
    .subscribe(
        (data: any[]) => {
            this.data = data; 
            console.log(this.data);
            if(data.length == 0)
            this.proceed = false;
            else
            this.proceed == true;

        });

    }


 updateQuantity(event: any, product_id: number) {
       this.ferrariservice.updateQuantity(event.value, product_id, this.email)
       .subscribe(
           (total: any) => {this.total = total; console.log(this.total); localStorage.setItem('total',this.total);});
           console.log(this.total);
    }
    delete(product_id: any) {
       this.ferrariservice.delete(product_id).subscribe();
        window.location.reload();
    }

}
