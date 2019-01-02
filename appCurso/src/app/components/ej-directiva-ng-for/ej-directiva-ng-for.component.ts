//IMPORTS
import { Component, OnInit } from '@angular/core';

//MODELS
import { Alumno } from '../../models/alumno.model';

//EJ-DIRECTIVA-NG-FOR COMPONENT
@Component({
  selector: "app-ej-directiva-ng-for", //NAME OF SELECTOR OF COMPONENT
  templateUrl: "./ej-directiva-ng-for.component.html", //NAME OF HTML FILE OF COMPONENT
  styleUrls: [ "./ej-directiva-ng-for.component.css" ] //NAMES OF STYLESHEETS OF COMPONENT
})
export class EjDirectivaNgForComponent implements OnInit{
  //ATTRIBUTES
  public cursos:string[];
  public alumnos:Array<Alumno> = [
    { id: 1, name: "Ángel", lastnames: "Herce Soto", city: "Coruña" },
    { id: 2, name: "Maria", lastnames: "Centeno Garrido", city: "Ponferrada" },
    { id: 3, name: "Sara", lastnames: "Bello Fernandez", city: "Madrid" },
  ];

  //METHODS
  //CONSTRUCT
  public constructor(){
    this.cursos = [ "Angular", "HTML", "CSS" ];
  }

  //INIT
  public ngOnInit(){

  }
}//END OF EJ-DIRECTIVA-NG-FOR COMPONENT
