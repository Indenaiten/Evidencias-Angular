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
  constructor( private presupuestosService:PresupuestosService ){
    //GET PRESUPUESTOS
    this.presupuestosService.getPresupuestos()
      .subscribe( ( response:any ) => {
        //SHOW IN CONSOLE
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
  }//END OF CONSTRUCT

  //INIT METHOD
  ngOnInit(){

  }//END OF INIT METHOD
}//END OF PRESUPUESTOS COMPONENT
