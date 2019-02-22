//IMPORTS
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

//HEADER COMPONENT
@Component({
  selector: "app-header", //NAME OF COMPONENT
  templateUrl: "./header.component.html", //NAME OF TEMPLATE OF COMPONENT
  styleUrls: [ "./header.component.css" ] //NAMES OF STYLESHEETS OF COMPONENT
})
export class HeaderComponent implements OnInit{
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
}//END OF HEADER COMPONENT
