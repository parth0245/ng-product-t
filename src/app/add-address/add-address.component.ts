import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {

  address= {
      city:"",
      locality:"",
      flatBuilding:"",
      pin:"",
      state:"",
      lndmrk:"",
      contact:"",
      contact2:""
    }

  constructor() { }

  ngOnInit() {
  }

}
