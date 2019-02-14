//IMPORTS
import { Component, OnInit } from '@angular/core';

//DECIMAL COMPONENT
@Component({
  selector: "app-decimal", //NAME OF SELECTOR OF COMPONENT
  templateUrl: "./decimal.component.html", //NAME OF HTML FILE FO COMPONENT
  styleUrls: [ "./decimal.component.css" ] //NAMES OF STYLESHEETS OF COMPONENT
})
export class DecimalComponent implements OnInit{
  //ATTRIBUTES
  public n1:number = 1.148;

  //METHODS
  //CONSTRUCT
  public constructor(){

  }

  //INIT
  public ngOnInit(){

  }
}//END OF DECIMAL COMPONENT
