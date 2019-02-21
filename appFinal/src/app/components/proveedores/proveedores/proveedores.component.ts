//IMPORTS
import { Component, OnInit } from '@angular/core';

//SERVICES
import { ProveedoresService } from '../../../services/proveedores.service';

//PROVEEDORES COMPONENT
@Component({
  selector: "app-proveedores", //NAME OF COMPONENT
  templateUrl: "./proveedores.component.html", //NAME OF TEMPLATE OF COMPONENT
  styleUrls: [ "./proveedores.component.css" ] //NAMES OF STYLESHEETS OF COMPONENT
})
export class ProveedoresComponent implements OnInit{
  //ATTRIBUTES
  public proveedores:any[ any ];

  //METHODS
  //CONSTRUCTOR
  public constructor(
    private proveedoresService:ProveedoresService
  ){

  }//END OF CONSTRUCT

  //INIT METHOD
  public ngOnInit():void{
    //SET MESSAGE
    this.proveedores = this.proveedoresService.getProveedores();
  }//END OF INIT METHOD
}//END OF PROVEEDORES COMPONENT
