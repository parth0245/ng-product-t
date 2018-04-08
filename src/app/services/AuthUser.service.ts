import firebase from 'firebase';

export class AuthUser {



    createUser(e,p){
        firebase.auth().createUserWithEmailAndPassword(e,p).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
    }



}