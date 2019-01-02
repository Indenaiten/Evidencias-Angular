//IMPORTS
import { Component, OnInit } from '@angular/core';

//PARENT COMPONENT
@Component({
  selector: "app-parent", //NAME OF SELECTOR OF COMPONENT
  templateUrl: "./parent.component.html", //NAME OF HTML FILE OF COMPONENT
  styleUrls: [ "./parent.component.css" ] //NAMES OF STYLESHEETS OF COMPONENT
})
export class ParentComponent implements OnInit{
  //ATTRIBUTES
  public parentValue:string = "Este texto se inyecta desde el Padre";
  
  //METHODS
  //CONSTRUCT
  public constructor(){

  }

  //INIT
  public ngOnInit(){

  }
}//END OF PARENT COMPONENT
