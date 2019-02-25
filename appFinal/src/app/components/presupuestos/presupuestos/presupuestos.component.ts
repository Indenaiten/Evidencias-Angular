//IMPORTS
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PresupuestosService } from '../../../services/presupuestos.service';

//PRESUPUESTOS COMPONENT
@Component({
  selector: "app-presupuestos", //NAME OF COMPONENT
  templateUrl: "./presupuestos.component.html", //NAME OF TEMPLATE OF COMPONENT
  styleUrls: [ "./presupuestos.component.css" ] //NAMES OF STYLESHEETS OF COMPONENT
})
export class PresupuestosComponent implements OnInit{
  //ATTRIBUTES
  public presupuestos:any[] = [];
  public searchForm:FormControl;
  public search:string;
  public results:boolean = false;
  public loading:boolean = true;

  //METHODS
  //CONSTRUCT
  public constructor( private presupuestosService:PresupuestosService ){
    //GET PRESUPUESTOS
    this.getPresupuestos();
  }//END OF CONSTRUCT

  //INIT METHOD
  public ngOnInit(){
    //SEARCH PRESUPUESTOS
    this.searchPresupuestos();
  }//END OF INIT METHOD

  //SEARCH PRESUPUESTOS METHOD
  private searchPresupuestos():void{
    //CREATE FORM GROUP
    this.searchForm = new FormControl();

    //VALUE CHANGES
    this.searchForm.valueChanges
      .subscribe( ( search ) => {
        //SAVE SARCH
        this.search = search

        //CLEAR ARRAY OF presupuestos
        this.presupuestos = [];

        //SET results IN FALSE
        this.results = false;

        //CHECK THIS search
        if( this.search.length != 0 ){ //IF THE search EXITS
          //SET loading IN TRUE
          this.loading = true

          //SEARCH
          this.presupuestosService.search( this.search )
            .subscribe( ( response ) => {
              //SHOW IN CONSOLE
              console.log( "COMPONENT" );
              console.log( response );

              //BROWSE RESPONSE
              for( var id in response ){
                //GET PRESUPUESTO
                var presupuesto = response[ id ];

                //SET ID OF PRESUPUESTO
                presupuesto.id = id;

                //SAVE PRESUPUESTO IN ARRAY
                this.presupuestos.push( presupuesto );
              }

              //SET loading IN FALSE
              this.loading = false;

              //SET RESULTS OF PRESUPUESTOS
              this.results = this.checkResultsOfPresupuestos();
            }
          );
        }
        else{ //IF THE search NO EXITS
          //GET PRESUPUESTOS
          this.getPresupuestos();
        }
      }
    );
  }//END OF SEARCH PRESUPUESTOS METHOD

  //CHECK RESULTS OF PRESUPUESTOS METHOD
  private checkResultsOfPresupuestos():boolean{
    //VARIABLES
    var result:boolean = false;

    //CHECK RESULTS
    if( this.presupuestos.length > 0 ){ //IF THERE ARE RESULTS
      //SET result IN TRUE
      result = true;
    }

    //RETURN
    return result;
  }//END OF CHECK RESULTS OF PRESUPUESTOS METHOD

  //GET PRESUPUESTOS METHOD
  private getPresupuestos():void{
    //GET PRESUPUESTOS
    this.presupuestosService.getPresupuestos()
      .subscribe( ( response:any ) => {
        //SHOW IN CONSOLE
        console.log( "COMPONENT" );
        console.log( response );

        //BROWSE RESPONSE
        for( var id in response ){
          //GET PRESUPUESTO
          var presupuesto = response[ id ];

          //SET ID OF PRESUPUESO
          presupuesto.id = id;

          //SAVE PRESUPUESTO IN ARRAY
          this.presupuestos.push( presupuesto );
        }

        //SET LOADING IN FALSE
        this.loading = false;

        //SET RESULTS OF PRESUPUESTOS
        this.results = this.checkResultsOfPresupuestos();
      });
  }//END OF GET PRESUPUESTOS METHOD

  //DELETE PRESUPUESTO METHOD
  public deletePresupuesto( id:string ):void{
    //DELETE PREUPUESTO
    this.presupuestosService.deletePresupuesto( id )
      .subscribe( ( response:any ) => {
        //SHOW IN CONSOLE
        console.log( "COMPONENT" );
        console.log( response );

        //RESET ARRAY OF PRESUPUESTOS
        this.presupuestos = [];

        //GET PRESUPUESTOS
        this.getPresupuestos();
      });
  }//END OF DELETE PRESUPUESTO METHOD
}//END OF PRESUPUESTOS COMPONENT
