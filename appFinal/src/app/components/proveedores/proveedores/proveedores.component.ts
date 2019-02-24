//IMPORTS
import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from '../../../services/proveedores.service';

//PROVEEDORES COMPONENT
@Component({
  selector: "app-proveedores", //NAME OF COMPONENT
  templateUrl: "./proveedores.component.html", //NAME OF TEMPLATE OF COMPONENT
  styleUrls: [ "./proveedores.component.css" ] //NAMES OF STYLESHEETS OF COMPONENT
})
export class ProveedoresComponent implements OnInit{
  //ATTRIBUTES
  public proveedores:any[] = [];

  //METHODS
  //CONSTRUCTOR
  public constructor(
    private proveedoresService:ProveedoresService
  ){
    //GET PROVEEDORES
    this.getProveedores();
  }//END OF CONSTRUCT

  //INIT METHOD
  public ngOnInit():void{

  }//END OF INIT METHOD

  //GET PROVEEDORES METHOD
  private getProveedores():void{
    //GET PROVEEDORES
    this.proveedoresService.getProveedores()
      .subscribe( ( response:any ) => {
        //SHOW IN CONSOLE
        console.log( "COMPONENT" );
        console.log( response );

        //BROWSE RESPONSE
        for( var id in response ){
          //GET PROVEEDOR
          var proveedor = response[ id ];

          //SET ID OF PROVEEDOR
          proveedor.id = id;

          //SAVE PROVEEDOR IN ARRAY
          this.proveedores.push( proveedor );
        }
      });
  }//END OF GET PROVEEDORES METHOD

  //DELETE PROVEEDOR METHOD
  public deleteProveedor( id:string ):void{
    //DELETE PROVEEDOR
    this.proveedoresService.deleteProveedor( id )
      .subscribe( ( response:any ) => {
        //SHOW IN CONSOLE
        console.log( "COMPONENT" );
        console.log( response );

        //RESET ARRAY OF PROVEEDORES
        this.proveedores = [];

        //GET PROVEEDORES
        this.getProveedores();
      });
  }//END OF DELETE PROVEEDOR METHOD
}//END OF PROVEEDORES COMPONENT
