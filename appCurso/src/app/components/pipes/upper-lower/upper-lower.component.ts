//IMPORTS
import { Component, OnInit } from '@angular/core';

//UPPER-LOWER COMPONENTS
@Component({
  selector: "app-upper-lower", //NAME OF SELECTOR OF COMPONENT
  templateUrl: "./upper-lower.component.html", //NAME OF HTML FILE OF COMPONENT
  styleUrls: [ "./upper-lower.component.css" ] //NAMES OF STYLESHEETS OF COMPONENT
})
export class UpperLowerComponent implements OnInit{
  //ATTRIBUTES
  public city:string = "Madrid";

  //METHODS
  //CONSTRUCT
  public constructor(){

  }

  //INIT
  public ngOnInit(){

  }
}//END OF UPPER-LOWER COMPONENTS
