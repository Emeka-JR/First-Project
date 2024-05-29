import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './Container.component.html',
  styleUrls: ['./Container.component.css']
})
export class ContainerComponent {
  // // name: string='iPhone';
  // // price: number=999;
  // // color:string='Red';

  // // name="Emeka JR"
  // addToCart:number=0;
  // product={
    
  //   name:'iPhone',
  //   price:789,
  //   color:'Black',
  //   discount:8.5,
  //   inStock:10,
  //   pImage:'/assets/images/img1.jpg'
  // }

  // getDiscountedPrice()
  // {
  //   return this.product.price-(this.product.price*this.product.discount/100)
  // }
  // // onNameChange()
  // // {
  // //   this.name="Noah";
  // // }
  // onNameChange(event:any)
  // {
  //   // this.name="Paul";
  //   // console.log(event.target.value);
  //   // this.name=event.target.value;
  // }
  // decrementCartValue()
  // {
  //   if(this.addToCart>0){
  //   this.addToCart--;
  //   }
  // }
  // incrementCartValue()
  // {
  //   if(this.addToCart<this.product.inStock){
  //   this.addToCart++;
  // }
  // }
  listOfString: string[]=['Mark','Steve','Mary','John','Sarah'];

  searchText: string='';

  setSearchText(value:string){
    this.searchText=value;
  }
}
