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

  //IS AUTH METHOD
  public iAuth():boolean{
    //VARIABLES
    var result:boolean = false;
    var user:any = firebase.auth().currentUser; //GET AUTHENTICATED USER

    //CHECK USER
    if( user ){ //IF EXISTS THE USER
      //SET result IN TRUE
      result = true;
    }

    //RETURN RESULT
    return result;
  }//END OF IS AUTH METHOD

  //LOGOUT METHOD
  public logout():void{
    //LOGOUT
    firebase.auth().signOut();
  }//END OF LOGOUT METHOD
}//END OF AUTH SERVICE
