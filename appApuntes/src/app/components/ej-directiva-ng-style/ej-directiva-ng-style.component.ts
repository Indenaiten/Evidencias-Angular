//IMPORTS
import { Component, OnInit } from '@angular/core';

//EJ-DIRECTIVA-NG-STYLE COMPONENT
@Component({
  selector: "app-ej-directiva-ng-style", //NAME OF SELECTOR OF COMPONENT
  templateUrl: "./ej-directiva-ng-style.component.html", //NAME OF HTML FILE OF COMPONENT
  styleUrls: [ "./ej-directiva-ng-style.component.css" ] //NAMES OF STYLESHEETS OF COMPONENT
})
export class EjDirectivaNgStyleComponent implements OnInit{
  //ATTRIBUTES
  public puntuaction:number;

  //METHODS
  //CONSTRUCT
  public constructor(){

  }

  //INIT
  public ngOnInit(){

  }

  //SET COLOR
  public setColor(){
    //RETURN
    return this.puntuaction >= 5 ? "#00FF00" : "#FF0000";
  }
}//END OF EJ-DIRECTIVA-NG-STYLE COMPONENT
