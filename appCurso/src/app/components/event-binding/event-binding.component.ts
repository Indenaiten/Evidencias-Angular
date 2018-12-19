//IMPORTS
import { Component, OnInit } from '@angular/core';

//EVENT BINDING COMPONENT
@Component({
  selector: "app-event-binding", //NAME OF SELECTOR OF COMPONENT
  templateUrl: "./event-binding.component.html", //NAME OF HTML FILE OF COMPONENT
  styleUrls: [ "./event-binding.component.css" ]  //NAMES OF STYLESHEETS OF COMPONENT
})
export class EventBindingComponent implements OnInit{
  //ATTRIBUTES
  public text:string = "Originalmente el texto se carga así";

  //METHODS
  //CONSTRUCTOR
  public constructor(){

  }

  //INIT
  public ngOnInit(){

  }

  //MODTEXT METHOD
  public modText(){
    //CHANGE TEXT
    this.text = "Al pulsar el botón el texto se muestra así";
  }
}//END OF EVENT BINDING COMPONENT
