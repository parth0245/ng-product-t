import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GetProductsService } from '../services/getProducts.service';


@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.css']
})
export class PageContentComponent implements OnInit {
  dataArray:any;
  constructor(private getProductService : GetProductsService , private router : Router) { }

  ngOnInit() {
    this.getProductService.getProducts().subscribe(
      (response) => {
        this.dataArray = response;
      }
    );
  }

  getProdDetails(prodData){
    this.router.navigate(['/home/product-description',  prodData ]);
  }



}
