//IMPORTS
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

//INICIO COMPONENT
@Component({
  selector: "app-inicio", //NAME OF COMPONENT
  templateUrl: "./inicio.component.html", //NAME OF TEMPLATE OF COMPONENT
  styleUrls: [ "./inicio.component.css" ] //NAMES OF STYLESHEETS OF COMPONENT
})
export class InicioComponent implements OnInit{
  //ATTRIBUTES

  //METHODS
  //CONSTRUCT
  public constructor(
    private authService:AuthService
  ){

  }//END OF CONSTRUCT

  //INIT METHOD
  public ngOnInit():void{

  }//END OF INIT METHOD

  //IS AUTH METHOD
  public isAuth():boolean{
    //RETURN RESULT
    return this.authService.iAuth();
  }//END OF IS AUTH METHOD
}//END OF INICIO COMPONENT
