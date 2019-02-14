//IMPORTS
import { Component, OnInit } from '@angular/core';

//EJ-DIRECTIVA-NG-IF COMPONENT
@Component({
  selector: "app-ej-directiva-ng-if", //NAME OF SELECTOR
  templateUrl: "./ej-directiva-ng-if.component.html", //NAME OF HTML FILE OF COMPONENT
  styleUrls: [ "./ej-directiva-ng-if.component.css" ] //NAMES OF STYLESHEETS OF COMPONENT
})
export class EjDirectivaNgIfComponent implements OnInit{
  //ATTRIBUTES
  public name:string;
  public capital:string;

  //METHODS
  //CONSTRUCT
  public constructor(){

  }

  //INIT
  public ngOnInit(){

  }

  //SET RESULT
  public setResult(){
    //RETURN
    return this.capital.toLowerCase() === "madrid" ? true : false;
  }
}//END OF EJ-DIRECTIVA-NG-IF COMPONENT
