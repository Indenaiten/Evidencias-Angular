//IMPORTS
import { Component, OnInit } from '@angular/core';

//CURRENCY COMPONENT
@Component({
  selector: "app-currency", //NAME OF SELECTOR OF COMPONENT
  templateUrl: "./currency.component.html", //NAME OF HTML FILE OF COMPONENT
  styleUrls: [ "./currency.component.css" ] //NAMES OF STYLESHEETS OF COMPONENT
})
export class CurrencyComponent implements OnInit{
  //ATTRIBUTES
  public dolaEuro:number = 0.88;

  //METHODS
  //CONSTRUCT
  public constructor(){

  }

  //INIT
  public ngOnInit(){

  }
}//END OF CURRENCY COMPONENT
