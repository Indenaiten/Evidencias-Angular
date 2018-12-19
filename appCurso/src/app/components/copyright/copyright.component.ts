//IMPORTS
import { Component, OnInit } from '@angular/core';

//COPYRIGHT COMPONENT
@Component({
  selector: "app-copyright", //NAME OF SELECTOR OF COMPONENT
  templateUrl: "./copyright.component.html", //NAME OF HTML FILE OF COMPONENT
  styleUrls: [ "./copyright.component.css" ]  //NAMES OF STYLESHEETS OF COMPONENT
})
export class CopyrightComponent implements OnInit{
  //ATTRIBUTES
  public copyright:string = "© ACME S.A.";
  public date:any = new Date();

  //METHODS
  //CONSTRUCTOR
  public constructor(){

  }

  //INIT
  public ngOnInit(){

  }
}//END OF COPYRIGHT COMPONENT
