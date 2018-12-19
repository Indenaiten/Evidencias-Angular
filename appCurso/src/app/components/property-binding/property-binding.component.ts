//IMPORTS
import { Component, OnInit } from '@angular/core';

//PROPERTY BINDING COMPONENT
@Component({
  selector: "app-property-binding", //NAME OF SELECTOR OF COMPONENT
  templateUrl: "./property-binding.component.html", //NAME OF HTML FILE OF COMPONENT
  styleUrls: [ "./property-binding.component.css" ] //NAMES OF STYLESHEETS OF COMPONENT
})
export class PropertyBindingComponent implements OnInit{
  //ATTRIBUTES
  public textPlaceholder:string = "Escribe algo...";

  //METHODS
  //CONSTRUCTOR
  public constructor(){
    //TIME OUT OF 3 SECONDS
    setTimeout( () => {
      //CHANGE "textPlaceholder"
      this.textPlaceholder = "Por favor...";
    }, 3000 );
  }

  //INIT
  public ngOnInit(){

  }
}//END OF PROPERTY BINDING COMPONENT
