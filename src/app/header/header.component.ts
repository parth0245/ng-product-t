import { Slider } from 'ngx-slider';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchActive:boolean = false;
  constructor() { }

  openNav() {
    document.getElementById("mySidenav").style.width = "280px";
    //console.log(document.getElementsByTagName("body")[0].style.);
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    document.getElementById("childRoutes").style.opacity = "0.2";

    
  }
  closeNav(event) {
    event.preventDefault();
    document.getElementById("mySidenav").style.width = "0";
    document.getElementsByTagName("body")[0].style.overflow = "initial";
    document.getElementById("childRoutes").style.opacity = "1";
  }
  showHeader(){
    document.getElementById("mySidenav").style.width = "0";
    document.getElementsByTagName("body")[0].style.overflow = "initial";
    document.getElementById("childRoutes").style.opacity = "1";
    this.searchActive = !this.searchActive;
  }



  ngOnInit() {
    
  
  
  }

}
