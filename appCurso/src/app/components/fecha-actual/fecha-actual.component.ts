//IMPORTS
import { Component, OnInit } from '@angular/core';

//FECHA ACTUAL COMPONENT
@Component({
  selector: "app-fecha-actual", //NAME OF SELECTOR OF COMPONENT
  templateUrl: "./fecha-actual.component.html", //NAME OF HTML FILE OF COMPONENT
  styleUrls: [ "./fecha-actual.component.css" ] //NAMES OF STYLESHEETS OF COMPONENT
})
export class FechaActualComponent implements OnInit{
  //ATTRIBUTES
  public date:Date = new Date(); //ACTUAL DATE

  //METHODS
  //CONSTRUCTOR
  constructor(){

  }

  //INIT
  ngOnInit(){

  }
}//END OF FECHA ACTUAL COMPONENT
