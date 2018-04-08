import { AuthUser } from './../services/AuthUser.service';
import { Component, OnInit } from '@angular/core';

import firebase from 'firebase';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email:string;
  password:string;
  contact:string;
  recaptchaVerifier:any;
  disableRegister:boolean = true;
  constructor(private authUser : AuthUser) { }

  ngOnInit() {
/*
    window['phoneRecaptchaVerifier'] = new firebase.auth.RecaptchaVerifier('phone-sign-in-recaptcha', {
      'size': 'invisible',
      'callback': function(response) {
        // reCAPTCHA solved - will proceed with submit function
      },
      'expired-callback': function() {
        // Reset reCAPTCHA?
      }
    });

*/
   
 
  }
  verifyMobileNumber(){

    window['phoneRecaptchaVerifier'] = new firebase.auth.RecaptchaVerifier('phone-sign-in-recaptcha', {
      'size': 'invisible',
      'callback': function(response) {
        // reCAPTCHA solved - will proceed with submit function
      },
      'expired-callback': function() {
        // Reset reCAPTCHA?
      }
    });

    //console.log("this.contact",this.contact);
    var num = "+91"+this.contact;
    console.log("this.contact",num);
    firebase.auth().signInWithPhoneNumber( num , window['phoneRecaptchaVerifier']).then(function(confirmationResult){
      var code = prompt('We have send a code to ' + this.contact + ', please enter it here', "");
      if (code) {
        confirmationResult.confirm(code).then(function (result) {
          this.disableRegister=false
          console.log(result);
        }).catch(function (error) {
          console.log(error);
        });
      }
    }).catch(function(error){
      console.log(error.message);
    });
  }
  registerUser(){
    console.log(this.email,this.password);
      this.authUser.createUser(this.email,this.password);
  }


  

}
