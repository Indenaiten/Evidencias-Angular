//IMPORTS
import { Component, OnInit } from '@angular/core';

//TWO BINDING COMPONENT
@Component({
  selector: "app-two-binding", //NAME OF SELECTOR OF COMPONENT
  templateUrl: "./two-binding.component.html", //NAME OF HTML FILE OF COMPONENT
  styleUrls: [ "./two-binding.component.css" ] //NAMES OF STYLESHEETS OF COMPONENT
})
export class TwoBindingComponent implements OnInit{
  //ATTRIBUTES
  public text:string = "Texto original (Al cargar)";
  
  //METHODS
  //CONSTRUCTOR
  public constructor(){

  }

  //INIT
  public ngOnInit(){

  }
}//END OF TWO BINDING COMPONENT
