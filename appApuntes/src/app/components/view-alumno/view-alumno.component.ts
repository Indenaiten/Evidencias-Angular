//IMPORTS
import { Component, OnInit } from '@angular/core';

//MODELS
import { Alumno } from "../../models/alumno.model";

//VIEW ALUMNO COMPONENT
@Component({
  selector: "app-view-alumno", //NAME OF SELECTOR OF COMPONENT
  templateUrl: "./view-alumno.component.html", //NAME OF HTML FILE OF COMPONENT
  styleUrls: [ "./view-alumno.component.css" ] //NAMES OF STYLESHEETS OF COMPONENT
})
export class ViewAlumnoComponent implements OnInit{
  //ATTRIBUTES
  public student1:Alumno = new Alumno( 1, "Ángel", "Herce Soto", "Ponferrada" );

  //METHODS
  //CONSTRUCTOR
  public constructor(){

  }

  //INIT
  public ngOnInit(){

  }
}//END OF VIEW ALUMNO COMPONENT
