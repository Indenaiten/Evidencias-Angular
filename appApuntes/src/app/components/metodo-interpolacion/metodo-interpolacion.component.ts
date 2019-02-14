//IMPORTS
import { Component, OnInit } from '@angular/core';

//METODO INTERPOLACION COMPONENT
@Component({
  selector: "app-metodo-interpolacion", //NAME OF SELECTOR OF COMPONENT
  templateUrl: "./metodo-interpolacion.component.html", //NAME OF HTML FILE OF COMPONENT
  styleUrls: [ "./metodo-interpolacion.component.css" ] //NAMES OF STYLESHEETS OF COMPONENT
})
export class MetodoInterpolacionComponent implements OnInit{
  //ATTRIBUTES
  public punctuation:number = 9;

  //METHODS
  //CONSTRUCTOR
  public constructor(){

  }

  //INIT
  public ngOnInit(){

  }

  //GET PUNCTUATION
  public getPunctuation(){
    //RETURN PUNCTUATION
    return this.punctuation;
  }
}//END OF METODO INTERPOLACION COMPONENT
