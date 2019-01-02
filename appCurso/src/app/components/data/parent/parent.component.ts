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
  public advices:string[] = [
    "Aviso 1",
    "Aviso 2",
    "Aviso 3"
  ];

  public text:string;

  //METHODS
  //CONSTRUCT
  public constructor(){

  }

  //INIT
  public ngOnInit(){

  }

  //SHOW MESSAGE
  public showMessage( event ){
    this.text = event + " espacio marcado como leído!";
  }
}//END OF PARENT COMPONENT
