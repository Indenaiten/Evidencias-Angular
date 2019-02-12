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
  public msg:string;

  //METHODS
  //CONSTRUCTOR
  constructor(
    private proveedoresService:ProveedoresService
  ){

  }

  //INIT
  ngOnInit(){
    //SET MESSAGE
    this.msg = this.proveedoresService.getProveedores();
  }
}//END OF PROVEEDORES COMPONENT
