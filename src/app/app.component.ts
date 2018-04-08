import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
    title = 'app';
    constructor(){
    }
    ngOnInit(){

      var config = {
        apiKey: "AIzaSyD8IY-sdOpLqiXISs7W48V2v3tUs9qS4pc",
        authDomain: "the-bio.firebaseapp.com",
        databaseURL: "https://the-bio.firebaseio.com",
        projectId: "the-bio",
        storageBucket: "the-bio.appspot.com",
        messagingSenderId: "906146111184"
      };
      firebase.initializeApp(config);

    }
    
}
