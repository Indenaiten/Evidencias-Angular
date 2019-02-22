//IMPORTS
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

//AUTH SERVICE
@Injectable({
  providedIn: "root"
})
export class AuthService{
  //ATTRIBUTES

  //METHODS
  //CONSTRUCT
  public constructor(){

  }//END OF CONSTRUCT

  //REGISTER USER METHOD
  public registerUser( userData:any ):void{
    //REGISTER
    firebase.auth().createUserWithEmailAndPassword( userData.email, userData.password )
      .catch( ( error ) => {
        //SHOW IN CONSOLE
        console.log( error );
      });
  }//END OF REGISTER USER METHOD

  //LOGIN METHOD
  public login( userData:any ){
    //AUTHENTICATE USER FROM FIREBASE
    firebase.auth().signInWithEmailAndPassword( userData.email, userData.password )
    .then( ( response ) => {
      //SHOW IN CONSOLE
      console.log( "SERVICIO" );
      console.log( response );
    })
    .catch( ( error ) => {
      //SHOW IN CONSOLE
      console.log( "SERVICIO" );
      console.log( error );
    });
  }//END OF LOGIN METHOD
}//END OF AUTH SERVICE
