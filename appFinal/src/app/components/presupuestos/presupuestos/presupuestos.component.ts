//IMPORTS
import { Component, OnInit } from '@angular/core';
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

  //METHODS
  //CONSTRUCT
  public constructor( private presupuestosService:PresupuestosService ){
    //GET PRESUPUESTOS
    this.getPresupuestos();
  }//END OF CONSTRUCT

  //INIT METHOD
  public ngOnInit(){

  }//END OF INIT METHOD

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
