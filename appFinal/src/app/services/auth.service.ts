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
}//END OF AUTH SERVICE
