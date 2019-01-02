//IMPORTS
import { Component, OnInit } from '@angular/core';

//EJ-DIRECTIVA-NG-SWITCH COMPONENT
@Component({
  selector: "app-ej-directiva-ng-switch", //NAME OF SELECTOR OF COMPONENT
  templateUrl: "./ej-directiva-ng-switch.component.html", //NAME OF HTML FILE OF COMPONENT
  styleUrls: [ "./ej-directiva-ng-switch.component.css" ] //NAMES OF STYLESHEETS OF COMPONENT
})
export class EjDirectivaNgSwitchComponent implements OnInit{
  //ATTRIBUTES
  public players:any[] = [
    { name: "Earving Magic Johnson", team: "L.A. Lakers" },
    { name: "Michael Jordan", team: "Chicago Bulls" },
    { name: "Larry Bird", team: "Boston Celtics" }
  ];

  //METHODS
  //CONSTRUCT
  public constructor(){

  }

  //INIT
  public ngOnInit(){

  }
}//END OF EJ-DIRECTIVA-NG-SWITCH COMPONENT
