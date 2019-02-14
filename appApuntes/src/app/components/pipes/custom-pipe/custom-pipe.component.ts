//IMPORTS
import { Component, OnInit } from '@angular/core';

//CUSTOM PIPE COMPONENT
@Component({
  selector: "app-custom-pipe", //NAME OF SELECTOR OF COMPONENT
  templateUrl: "./custom-pipe.component.html", //NAME OF HTML FILE OF COMPONENT
  styleUrls: [ "./custom-pipe.component.css" ] //NAMES OF STYLESHEETS OF COMPONENT
})
export class CustomPipeComponent implements OnInit{
  //ATTRIBUTES
  public dolaEuro:number = 0.88;
  
  //METHODS
  //CONSTRUCT
  constructor(){

  }

  //INIT
  ngOnInit(){

  }
}//END OF CUSTOM PIPE COMPONENT
