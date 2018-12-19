//IMPORTS
import { Component } from '@angular/core';

//APP COMPONENT
@Component({
  selector: "app-root", //NAME OF SELECTOR OF COMPONENT
  templateUrl: "./app.component.html", //NAME OF HTML FILE OF COMPONENT
  styleUrls: [ "./app.component.css" ] //NAMES OF STYLESHEETS OF COMPONENT
})
export class AppComponent{
  //ATTRIBUTES
  public title:string = "appCurso";
  public destinity:string = "Universo";

  //METHODS
  //CONSTRUCTOR
  public constructor(){

  }

  //INIT
  public ngOnInit(){

  }
}//END OF APP COMPONENT
