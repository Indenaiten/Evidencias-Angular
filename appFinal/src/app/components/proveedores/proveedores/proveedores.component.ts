//IMPORTS
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProveedoresService } from '../../../services/proveedores.service';

//PROVEEDORES COMPONENT
@Component({
  selector: "app-proveedores", //NAME OF COMPONENT
  templateUrl: "./proveedores.component.html", //NAME OF TEMPLATE OF COMPONENT
  styleUrls: [ "./proveedores.component.css" ] //NAMES OF STYLESHEETS OF COMPONENT
})
export class ProveedoresComponent implements OnInit{
  //ATTRIBUTES
  public searchForm:FormControl;
  public search:string;
  public results:boolean = false;
  public proveedores:any[] = [];
  public loading:boolean = true;

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
    //SEARCH PROVEEDORES
    this.searchProveedores();
  }//END OF INIT METHOD

  //SEARCH PROVEEDORES METHOD
  private searchProveedores():void{
    //CREATE FORM GROUP
    this.searchForm = new FormControl();

    //VALUE CHANGES
    this.searchForm.valueChanges
      .subscribe( ( search ) => {
        //SAVE SARCH
        this.search = search

        //CLEAR ARRAY OF proveedores
        this.proveedores = [];

        //SET results IN FALSE
        this.results = false;

        //CHECK THIS search
        if( this.search.length != 0 ){ //IF THE search EXITS
          //SET loading IN TRUE
          this.loading = true

          //SEARCH
          this.proveedoresService.search( this.search )
            .subscribe( ( response ) => {
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

              //SET loading IN FALSE
              this.loading = false;

              //SET RESULTS OF PROVEEDORES
              this.results = this.checkResultsOfProveedores();
            }
          );
        }
        else{ //IF THE search NO EXITS
          //GET PROVEEDORES
          this.getProveedores();
        }
      }
    );
  }//END OF SEARCH PROVEEDORES METHOD

  //CHECK RESULTS OF PROVEEDORES METHOD
  private checkResultsOfProveedores():boolean{
    //VARIABLES
    var result:boolean = false;

    //CHECK RESULTS
    if( this.proveedores.length > 0 ){ //IF THERE ARE RESULTS
      //SET result IN TRUE
      result = true;
    }

    //RETURN
    return result;
  }//END OF CHECK RESULTS OF PROVEEDORES METHOD

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

        //SET LOADING IN FALSE
        this.loading = false;

        //SET RESULTS OF PROVEEDORES
        this.results = this.checkResultsOfProveedores();
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
