//IMPORTS
import { Component, OnInit } from '@angular/core';

//FECHA ACTUAL COMPONENT
@Component({
  selector: "app-fecha-actual", //NAME OF SELECTOR OF COMPONENT
  template: `
  <p class="date">A Coruña, {{ date | date: 'd/M/y H:m' }}</p>
  
  <!-- COPYRIGHT -->
  <app-copyright></app-copyright>
  `, //HTML
  styleUrls: [ "./fecha-actual.component.css" ] //NAMES OF STYLESHEETS OF COMPONENT
})
export class FechaActualComponent implements OnInit{
  //ATTRIBUTES
  public date:Date = new Date(); //ACTUAL DATE

  //METHODS
  //CONSTRUCTOR
  constructor(){

  }

  //INIT
  ngOnInit(){

  }
}//END OF FECHA ACTUAL COMPONENT
