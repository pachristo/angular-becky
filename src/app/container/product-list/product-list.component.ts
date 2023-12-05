import { Component, Input } from '@angular/core';
import { Product } from './../../Models/Product'
@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

   selectedProduct: Product;
  products= [
    {
      id: 1,
      name: "Nike React Infinity Run Flyknit",
      description: "Loren Ipsum is simply dummy text of the printing and typesetting industry. Loren Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Loren Ipsum. ",
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Blue", "Black"],
      price: 160,
      discountprice: 140,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5b0981ff-45f8-40c3-9372-32430a62aaea/dunk-high-shoes-n3vgBk.png",
      slug: "nike-react-infinity-run-flyknit"
     },


   {
    id: 2,
      name: "Nike Air Max  Shoes",
      description: "Loren Ipsum is simply dummy text of the printing and typesetting industry. Loren Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
         brand: "Vans",
         gender: "MEN",
         category: "CASUAL",
         size: [6, 7, 8, 9, 10, 11, 12],
         color: ["Grey","Blue", "White"],
         price: 62,
         is_in_inventory: false,
         items_left: 7,
         imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2ed73ce2-b0d0-4806-bb97-0981a8977369/air-max-270-mens-shoes-KkLcGR.png",
   },

   {
    id: 3,
      name: "Nike Air Max Shoes",
      description: "Loren Ipsum is simply dummy text of the printing and typesetting industry. Loren Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
         brand: "Vans",
         gender: "MEN",
         category: "CASUAL",
         size: [6, 7, 8, 9, 10, 11, 12],
         color: ["White"],
         price: 92,
         is_in_inventory: true,
         items_left: 4,
         imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ec16324f-7769-4486-9c21-8f237574ada6/air-max-90-futura-womens-shoes-kvRZ4h.png" ,
         slug: "Flipkart"
   },
    {
    id: 4,
      name: "Air Max Shoes",
      description: "Loren Ipsum is simply dummy text of the printing and typesetting industry. Loren Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
         brand: "Vans",
         gender: "MEN",
         category: "CASUAL",
         size: [6, 7, 8, 9, 10, 11, 12],
         color: ["White","Blue", "Black" , "Brown"],
         price: 92,
         discountprice: 50,
         is_in_inventory: false,
         items_left: 6,
         imageURL: "https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/c86d8265-794d-4779-9641-04f8689fbebe/nike-air-max.jpg" ,

   },
   {
    id: 5,
      name: "Nike Air Max Shoes",
      description: "Loren Ipsum is simply dummy text of the printing and typesetting industry. Loren Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
         brand: "Vans",
         gender: "MEN",
         category: "CASUAL",
         size: [6, 7, 8, 9, 10, 11, 12],
         color: ["White", "Black"],
         price: 92,
         discountprice: 50,
         is_in_inventory: true,
         items_left: 2,
         imageURL: "https://media.finishline.com/i/finishline/921826_101_P2?$default$&w=670&h=670&bg=rgb(237,237,237)" ,

   },
   {
    id: 6,
      name: " Air Max Shoes",
      description: "Loren Ipsum is simply dummy text of the printing and typesetting industry. Loren Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
         brand: "Vans",
         gender: "MEN",
         category: "CASUAL",
         size: [6, 7, 8, 9, 10, 11, 12],
         color: ["White", "Black" , "Red"],
         price: 32,
         discountprice: 25,
         is_in_inventory: true,
         items_left: 5,
         imageURL: "https://hips.hearstapps.com/hmg-prod/images/nike-air-max-day-2023-640f5ee7d2778.jpg?crop=0.500xw:1.00xh;0.500xw,0&resize=640:*",
   },

    {
      id: 7,
      name: "Nike Air Max Shoes",
      description: "Loren Ipsum is simply dummy text of the printing and typesetting industry. Loren Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
         brand: "Vans",
         gender: "MEN",
         category: "CASUAL",
         size: [6, 7, 8, 9, 10, 11, 12],
         color: ["White" , "Red"],
         price: 86,
         discountprice: 40,
         is_in_inventory: false,
         items_left: 4,
         imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f685abe-510a-4599-bb28-69859836bf88/air-max-pulse-roam-shoes-NSfkP0.png",
    },
    {
      id: 8,
      name: "Nike Air Max Shoes",
      description: "Loren Ipsum is simply dummy text of the printing and typesetting industry. Loren Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
         brand: "Vans",
         gender: "MEN",
         category: "CASUAL",
         size: [6, 7, 8, 9, 10, 11, 12],
         color: ["White" , "Black"],
         price: 86,
         discountprice: 73,
         is_in_inventory: false,
         items_left: 8,
         imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/209889d9-4910-4f06-9d07-18afa558b566/air-max-270-mens-shoes-KkLcGR.png",

    },
    {
      id: 9,
      name: "Air Max Shoes",
      description: "Loren Ipsum is simply dummy text of the printing and typesetting industry. Loren Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
         brand: "Vans",
         gender: "MEN",
         category: "CASUAL",
         size: [6, 7, 8, 9, 10, 11, 12],
         color: ["White" , "Black"],
         price: 46,
         is_in_inventory: true,
         items_left: 3,
         imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/bb8f3b69-8a65-4d52-8a60-fec0bd0c7227/alphafly-2-road-racing-shoes-cVPHCD.png",

    },
    {
      id: 10,
      name: "Nike Air Max Shoes",
      description: "Loren Ipsum is simply dummy text of the printing and typesetting industry. Loren Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
         brand: "Vans",
         gender: "MEN",
         category: "CASUAL",
         size: [6, 7, 8, 9, 10, 11, 12],
         color: ["White" , "Black"],
         price: 67,
         discountprice: 47,
         is_in_inventory: true,
         items_left: 9,
         imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/lstznmmah3ytjqo8ddgd/free-run-2018-mens-road-running-shoes-RRT9elMk.png",

    },
    {
      id: 11,
      name: "Nike Air Max Shoes",
      description: "Loren Ipsum is simply dummy text of the printing and typesetting industry. Loren Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
         brand: "Vans",
         gender: "MEN",
         category: "CASUAL",
         size: [6, 7, 8, 9, 10, 11, 12],
         color: ["Brown" , "Black"],
         price: 67,
         is_in_inventory: false,
         items_left: 3,
         imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/063e3619-cd35-46d7-9e1d-2d3de300b171/wildhorse-8-mens-trail-running-shoes-zPRz8Z.png",

    },
    {
      id: 12,
      name: "Nike Air Max Running Shoes",
      description: "Loren Ipsum is simply dummy text of the printing and typesetting industry. Loren Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
         brand: "Vans",
         gender: "MEN",
         category: "CASUAL",
         size: [6, 7, 8, 9, 10, 11, 12],
         color: ["White" , "Black"],
         price: 67,
         discountprice:30,
         is_in_inventory: true,
         items_left: 6,
         imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6dbab6de-ed89-47ed-9bc9-58fc3ec72db0/interact-run-mens-road-running-shoes-2pmmcR.png",

    },

    {
    id: 13,
      name: " Jordan Shoes",
      description: "Loren Ipsum is simply dummy text of the printing and typesetting industry. Loren Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
         brand: "Vans",
         gender: "MEN",
         category: "CASUAL",
         size: [6, 7, 8, 9, 10, 11, 12],
         color: ["White" , "Black"],
         price: 87,
         discountprice:50,
         is_in_inventory: false,
         items_left: 8,
         imageURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/5ed98ae0-e2ec-4b0c-8e24-461b69460949/air-jordan-11-gratitude-mens-shoes.png",
    }

  ];

  totalProductCount= this.products.length;
  totalProductInstock= this.products.filter( p => p.is_in_inventory === true).length;
  totalProductoutofstock= this.products.filter( p => p.is_in_inventory === false).length;

  @Input()
  searchText: string='';

  selectedFilterRadioButton: string='all';

  onFilterChanged(value: string){
     this.selectedFilterRadioButton = value;
     }
}
