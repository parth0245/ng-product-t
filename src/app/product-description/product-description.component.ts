import { Component, OnInit ,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Slider } from 'ngx-slider';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit , OnDestroy  {
  public slider = new Slider();
  private sub: any;
  prodName:string;
    constructor(private route: ActivatedRoute) {
      this.slider.config.loop = true;
      this.slider.config.showPreview = false;
      this.slider.config.previewWidth = 350;
    }

  ngOnInit() {

    this.sub = this.route.data.subscribe(params => {
      console.log('paramsCatched');
   });  


    const slideItems = [
      {src : "https://cdna.4imprint.com/prod/700/391089.jpg"},
      {src : "https://cdna.4imprint.com/prod/700/391089.jpg"},
      {src : "https://cdna.4imprint.com/prod/700/391089.jpg"}
    ];

    this.slider.items = slideItems;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
