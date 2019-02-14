//IMPORTS
import { Component, OnInit } from '@angular/core';

//JSON COMPONENT
@Component({
  selector: "app-json", //NAME OF COMPONENT
  templateUrl: "./json.component.html", //NAME OF TEMPLATE OF COMPONENT
  styleUrls: [ "./json.component.css" ] //NAMES OF STYLESHEETS OF COMPONENT
})
export class JsonComponent implements OnInit{
  //ATTRIBUTES
  public obj:Object = {
    name: "Juan",
    lastnames: "Dominguez Flores",
    year: 25
  };

  //METHODS
  //CONSTRUCT
  constructor(){

  }

  //INIT
  ngOnInit(){

  }
}//END OF JSON COMPONENT
