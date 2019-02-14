//IMPORTS
import { Component, OnInit } from '@angular/core';

//DATE COMPONENT
@Component({
  selector: "app-date", //NAME OF SELECTOR OF COMPONENT
  templateUrl: "./date.component.html", //NAME OF HTML FILE OF COMPONENT
  styleUrls: [ "./date.component.css" ] //NAMES OF STYLESHEETS OF COMPONENT
})
export class DateComponent implements OnInit{
  //ATTRIBUTES
  public date:Date = new Date();

  //METHODS
  //CONSTRUCT
  public constructor(){

  }

  //INIT
  public ngOnInit(){

  }
}//END OF DATE COMPONENT
