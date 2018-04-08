import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {
  public address:any = [
    { 
      city:"Jaora",
      locality:"old Hospital Chudi Bazaar",
      flatBuilding:"15",
      pin:"457226",
      state:"Madhya Pradesh",
      dist:"Ratlam",
      lndmrk:"Jawahar Peth",
      contact:"9425105502",
      contact2:"8103818777"
    },
    { 
      city:"Indore",
      locality:"Boring Regency Geeta Bhavan",
      flatBuilding:"201",
      pin:"456227",
      state:"Madhya Pradesh",
      dist:"Indore",
      lndmrk:"Geeta bhavan",
      contact:"9425105502",
      contact2:"8103818777"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
