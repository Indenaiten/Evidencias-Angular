//IMPORTS
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

//APP COMPONENT
@Component({
  selector: "app-root", //NAME OF COMPONENT
  templateUrl: "./app.component.html", //NAME OF TEMPLATE OF COMPONENT
  styleUrls: [ "./app.component.css" ] //NAMES OF STYLESHEETS OF COMPONENT
})
export class AppComponent implements OnInit{
  //ATTRIBUTES

  //METHODS
  //INIT METHOD
  public ngOnInit():void{
    //INITIALIZE FIREBASE APP
    firebase.initializeApp({
        apiKey: "AIzaSyDgHvUfinzGB3raStV3MG9SBvADizzbs78",
        authDomain: "comprasapp-e1b05.firebaseapp.com",
        databaseURL: "https://comprasapp-e1b05.firebaseio.com",
        projectId: "comprasapp-e1b05",
        storageBucket: "comprasapp-e1b05.appspot.com",
        messagingSenderId: "425390816584"
    });
  }//END OF INIT METHOD
}//END OF APP COMPONENT
