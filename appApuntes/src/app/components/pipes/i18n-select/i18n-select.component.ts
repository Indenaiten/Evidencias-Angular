//IMPORTS
import { Component, OnInit } from '@angular/core';

//I18N-SELECT COMPONENT
@Component({
  selector: "app-i18n-select", //NAME OF SELECTOR OF COMPONENT
  templateUrl: "./i18n-select.component.html", //NAME OF HTML FILE OF COMPONENT
  styleUrls: [ "./i18n-select.component.css" ] //NAMES OF STYLESHEETS OF COMPONENT
})
export class I18nSelectComponent implements OnInit{
  //ATTRIBUTES
  public name:string = "Laura";
  public sex:string = "Mujer";
  public header:any = { "Hombre": "Estimado", "Mujer": "Estimada" };

  //METHODS
  //CONSTRUCT
  public constructor(){

  }

  //INIT
  public ngOnInit(){

  }
}//END OF I18N-SELECT COMPONENT
