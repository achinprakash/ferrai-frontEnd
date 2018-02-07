import { Component, OnInit } from '@angular/core';
import { FerrariService } from '../../ferrari.service';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
   processing;
constructor( private ferrariservice: FerrariService, public snackBar: MatSnackBar) {

    this.sendResult();
  }
  data;
  product_image = '';
  product_name = '';
  product_description = '';
  color = '';
  price = '';
  product_id = '';
  email= localStorage.getItem('email');
  ngOnInit() {
    this.processing = true;
  }
  addToCart(event: any) {
    this.ferrariservice.addToCart(event, this.email)
    .subscribe(
      (data: boolean) => {
        console.log(data);
        this.data = data;
        if (data) {
             {
            this.snackBar.open(' Product is added to cart', '', {
              duration: 4000,
              extraClasses: ['blue-snackbar']
            });
          }
        }
        // tslint:disable-next-line:one-line
        else {
          {
            this.snackBar.open('Product is already added to cart', '', {
              duration: 4000,
              extraClasses: ['blue-snackbar']
            });
          }
        }
      }
      );
  }

sendResult() {
  if (this.ferrariservice.sentData() == null) {
     this.product_image = '';
     this.product_name = '';
     this.product_description = '';
     this.color = '';
     this.price = '';
    }
    // tslint:disable-next-line:one-line
    else {
       this.ferrariservice.sentData().subscribe((data) => {
        this.processing = false;
        this.product_id = data[0].product_id;
        this.product_name = data[0].product_name;
        this.product_image = data[0].product_image;
        this.product_description = data[0].product_description;
        this.color = data[0].color;
        this.price = data[0].price;
        console.log(this.product_image);
      });
    }
  }


}
