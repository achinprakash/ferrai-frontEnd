import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FerrariService } from "../../ferrari.service";
@Component({
    selector: 'app-shopping-content',
    templateUrl: './shopping-content.component.html',
    styleUrls: ['./shopping-content.component.css'],
    inputs: ['data']
})

export class ShoppingContentComponent implements OnInit {

    constructor(private http: HttpClient, private ferrariService: FerrariService) {
        

     }
    toggleSidebar() {
        console.log('hello');
        document.getElementById('sidebar').classList.toggle('active');
    }
    //data: any[];
    data = [{ "product_id": 1, "product_name": "men leather bomber Jacket", "product_description": "Soft Ovis Aries leather jacket.The slim-fit cut and unique round perforated detail on the sleeves give it a contemporary look. Perfect for living leisure time in style.The fabrics and details make the difference in this bomber jacket. Excellent comfort guaranteed by the extendible darts that aid arm movements, inspired by the inserts in the historic Formula 1 racing suits. The customised zip-puller evokes today racing world, inspired by the single-seater rear brake light with its 12 red dots. Ideal for a weekend away.", "color": "black", "price": 715.0, "product_image": "http://static.store.ferrari.com/media/catalog/product/cache/0/image/524x524/0dc2d03fe217f8c83829496872af24a0/4/0/40806_100_blk_23.jpg", "type": { "type_id": 1, "type_name": 'jackets and vests', "c": { "category_id": 1, "category_name": "clothing" } }, "gender": { "gender_id": 1, "gender_name": "men" }, "category": { "category_id": 1, "category_name": "clothing" } }, { "product_id": 2, "product_name": "men quilted caban jacket", "product_description": "The jacket made of waterproof nylon boasts an ergonomic quilting that guarantees perfect fit and ideal warmth during the cold season. The internal waist drawstring allows the wearer to adjust the fit as desired. The high collar, in addition to providing protection from the cold, adds a touch of modernity to the look, while two practical and large pockets open on the front.", "color": "dark blue", "price": 313.5, "product_image": "http://static.store.ferrari.com/media/catalog/product/cache/0/image/524x524/0dc2d03fe217f8c83829496872af24a0/4/2/42230_1_nvy_11.jpg", "type": { "type_id": 1, "type_name": "jackets and vests", "c": { "category_id": 1, "category_name": "clothing" } }, "gender": { "gender_id": 1, "gender_name": "men" }, "category": { "category_id": 1, "category_name": "clothing" } }, { "product_id": 3, "product_name": "mens quilted pile jacket", "product_description": "A technical jacket with a bold sporting attitude, made of warm fleece with high neck and full zip at the front: practical and comfy way of facing even the coldest days with Ferrari grit and determination.", "color": "black", "price": 175.0, "product_image": "http://static.store.ferrari.com/media/catalog/product/cache/0/image/524x524/0dc2d03fe217f8c83829496872af24a0/4/2/42065_1_blk_5.jpg", "type": { "type_id": 1, "type_name": "jackets and vests", "c": { "category_id": 1, "category_name": "clothing" } }, "gender": { "gender_id": 1, "gender_name": "men" }, "category": { "category_id": 1, "category_name": "clothing" } }];

    ngOnInit() {
    }
    // tslint:disable-next-line:member-ordering
    name: String = '';
    getData(event: any) {
        this.name = event.target.value;
        console.log(this.name);
        this.ferrariService.getMenProduct(this.name).subscribe((result: any[]) => { console.log(result); this.data = result; console.log(this.data); console.log(this.data[0]); });

    }

    getData1(event: any) {
        this.name = event.target.value;
        console.log(this.name);
        this.ferrariService.getWomenProduct(this.name).subscribe((result: any[]) => { console.log(result); this.data = result; console.log(this.data); console.log(this.data[0]) });
    }

}



