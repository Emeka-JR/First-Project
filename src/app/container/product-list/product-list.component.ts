import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
   products = [
    {
        id: 1,
        name: "Nike Air Force 1",
        description: "Classic basketball shoes with iconic design.",
        brand: "Nike",
        gender: "male",
        category: "Shoes",
        size: [8, 9, 10, 11, 12],
        color: ["White", "Black"],
        is_in_inventory: false,
        items_left: 50,
        imageURL: "/assets/images/pegasus.png",
        slug: "Nike Air Force 1",
        price: 999,
        discountPrice:140
    },
    {
        id: 2,
        name: "Nike Air Max 90",
        description: "Timeless style meets modern comfort.",
        brand: "Nike",
        gender: "male",
        category: "Shoes",
        size: [7, 8, 9, 10, 11],
        color: ["Grey", "Red", "Blue"],
        is_in_inventory: false,
        items_left: 30,
        imageURL:"/assets/images/pegasus.png",
        price:877,
        slug: "Nike Air Max 90"

    },
    // Add more objects here to have a total of 16
   {
          id: 3,
          name: "Nike Dri-FIT T-Shirt",
          description: "Moisture-wicking fabric keeps you dry and comfortable.",
          brand: "Nike",
          gender: "male",
          category: "Apparel",
          size: [5,8,12,18],
          color: ["Black", "White", "Grey"],
          is_in_inventory: false,
          items_left: 100,
          imageURL: "/assets/images/pegasus.png",
          price:377,
          slug: "Nike Dri-FIT T-Shirt",
          discountPrice:140
      },
      {
          id: 4,
          name: "Nike Flex Shorts",
          description: "Flexible shorts for enhanced mobility during workouts.",
          brand: "Nike",
          gender: "male",
          category: "Apparel",
          size: [3,8,13,21],
          color: ["Blue", "Green", "Black"],
          is_in_inventory: false,
          items_left: 80,
          imageURL: "/assets/images/pegasus.png",
          price:199,
          slug: "Nike Flex Shorts"
      },
      {
          id: 5,
          name: "Nike Zoom Pegasus 38",
          description: "Responsive running shoes with Zoom Air cushioning.",
          brand: "Nike",
          gender: "female",
          category: "Shoes",
          size: [6, 7, 8, 9],
          color: ["Pink", "Purple", "White"],
          is_in_inventory: true,
          items_left: 60,
          imageURL: "/assets/images/pegasus.png",
          price:977,
          slug: "Nike Zoom Pegasus 38",
          discountPrice:140
      },
      {
          id: 6,
          name: "Nike Pro Sports Bra",
          description: "Supportive sports bra for high-impact activities.",
          brand: "Nike",
          gender: "female",
          category: "Apparel",
          size: [4,7,5,9],
          color: ["Black", "White", "Red"],
          is_in_inventory: true,
          items_left: 120,
          imageURL: "/assets/images/pegasus.png",
          price:87.99,
          slug: "Nike Pro Sports Bra",
          discountPrice:140
      },
      {
          id: 7,
          name: "Nike Therma Hoodie",
          description: "Warm and comfortable hoodie for cold weather workouts.",
          brand: "Nike",
          gender: "male",
          category: "Apparel",
          size: [5,9,8,10],
          color: ["Grey", "Black", "Blue"],
          is_in_inventory: true,
          items_left: 70,
          imageURL: "/assets/images/pegasus.png",
          price:877,
          slug: "Nike Therma Hoodie"
      },
      {
          id: 8,
          name: "Nike Air Zoom Terra Kiger 7",
          description: "Trail running shoes with excellent traction and durability.",
          brand: "Nike",
          gender: "male",
          category: "Shoes",
          size: [8, 9, 10, 11],
          color: ["Green", "Orange", "Black"],
          is_in_inventory: true,
          items_left: 40,
          imageURL: "/assets/images/pegasus.png",
          price:832,
          slug: "Nike Air Zoom Terra Kiger 7"
      },
      {
          id: 9,
          name: "Nike Air Max Bella TR 3",
          description: "Versatile training shoes for all-day comfort and support.",
          brand: "Nike",
          gender: "female",
          category: "Shoes",
          size: [6, 7, 8, 9],
          color: ["Black", "Pink", "Grey"],
          is_in_inventory: true,
          items_left: 55,
          imageURL: "/assets/images/pegasus.png",
          price:670,
          slug: "Nike Air Max Bella TR 3"
      },
      {
          id: 10,
          name: "Nike Sportswear Club Fleece Joggers",
          description: "Soft fleece joggers for everyday comfort and style.",
          brand: "Nike",
          gender: "male",
          category: "Apparel",
          size: [6,8,10,12],
          color: ["Black", "Grey", "Blue"],
          is_in_inventory: true,
          items_left: 90,
          imageURL: "/assets/images/pegasus.png",
          price:670,
          slug: "Nike Sportswear Club Fleece Joggers"
      },
      {
          id: 11,
          name: "Nike Air Zoom Structure 24",
          description: "Stable running shoes with responsive cushioning.",
          brand: "Nike",
          gender: "male",
          category: "Shoes",
          size: [8, 9, 10, 11],
          color: ["Black", "Blue", "White"],
          is_in_inventory: true,
          items_left: 65,
          imageURL: "/assets/images/pegasus.png",
          price:670,
          slug: "Nike Air Zoom Structure 24"
      },
      {
          id: 12,
          name: "Nike Victory Elite 2",
          description: "Lightweight track spikes for maximum speed.",
          brand: "Nike",
          gender: "female",
          category: "Shoes",
          size: [6, 7, 8, 9],
          color: ["White", "Pink", "Blue"],
          is_in_inventory: true,
          items_left: 25,
          imageURL: "/assets/images/pegasus.png",
          price:600,
          slug: "Nike Victory Elite 2"
      },
      {
          id: 13,
          name: "Nike Court Vision Low",
          description: "Classic basketball-inspired shoes with modern details.",
          brand: "Nike",
          gender: "male",
          category: "Shoes",
          size: [8, 9, 10, 11],
          color: ["White", "Black", "Red"],
          is_in_inventory: true,
          items_left: 75,
          imageURL: "/assets/images/pegasus.png",
          price:499,
          slug: "Nike Court Vision Low"
      },
      {
          id: 14,
          name: "Nike Tempo Running Shorts",
          description: "Lightweight and breathable shorts for running.",
          brand: "Nike",
          gender: "female",
          category: "Apparel",
          size: [8,12,5,9],
          color: ["Black", "Pink", "Blue"],
          is_in_inventory: true,
          items_left: 85,
          imageURL: "/assets/images/pegasus.png",
          price:610,
          slug: "Nike Tempo Running Shorts"
      },
      {
          id: 15,
          name: "Nike React Infinity Run Flyknit",
          description: "Stable and cushioned running shoes for long distances.",
          brand: "Nike",
          gender: "male",
          category: "Shoes",
          size: [8, 9, 10, 11],
          color: ["Black", "Grey", "Green"],
          is_in_inventory: true,
          items_left: 45,
          imageURL: "/assets/images/pegasus.png",
          price:770,
          slug: "Nike React Infinity Run Flyknit"
      },
      {
          id: 16,
          name: "Nike Indy Light-Support Sports Bra",
          description: "Comfortable and supportive sports bra for low-impact activities.",
          brand: "Nike",
          gender: "female",
          category: "Apparel",
          size: [21,9,7,6],
          color: ["White", "Blue", "Grey"],
          is_in_inventory: true,
          items_left: 110,
          imageURL: "/assets/images/pegasus.png",
          price:120,
          slug: "Nike Indy Light-Support Sports Bra"
      }
  ];
  
  totalProductCount=this.products.length;
  totalProductInStock=this.products.filter(p=> p.is_in_inventory===true).length;
  totalProductoutOfStock=this.products.filter(p=> p.is_in_inventory===false).length;

  @Input()
  searchText:string='';

  selectedFilterRadioButton: string='all';

  onFilterChanged(value: string){
    this.selectedFilterRadioButton  = value;
  }
}
