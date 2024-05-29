import { Component, Input } from '@angular/core';
import { ProductListComponent } from '../product-list.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input()
  product:{
    id: number,
    name: string,
    description: string,
    brand: string,
    gender: string,
    category: string,
    size: number[],
    color: string[],
    is_in_inventory: boolean,
    items_left: number,
    imageURL: string,
    price:number,
    discountPrice?: number,
    slug: string
          
  }
}
