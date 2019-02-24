//IMPORTS
import { Component, OnInit } from '@angular/core';
import { FacturasService } from '../../../services/facturas.service';

//FACTURAS COMPONENT
@Component({
  selector: "app-facturas", //NAME OF COMPONENT
  templateUrl: "./facturas.component.html",	//NAME OF TEMPLATE OF COMPONENT
  styleUrls: [ "./facturas.component.css" ] //NAMES OF STYLESHEETS OF COMPONENT
})
export class FacturasComponent implements OnInit{
	//ATTRIBUTES
	public facturas:any[] = [];

	//METHODS
	//CONSTRUCT
	public constructor(
		private facturasService:FacturasService
	){
		//GET FACTURAS
		this.getFacturas();
	}//END OF CONSTRUCT

	//INIT METHOD
	public ngOnInit():void{

	}//END OF INIT METHOD

	//GET FACTURAS
	private getFacturas():void{
	  //GET FACTURAS
	  this.facturasService.getFacturas()
			.subscribe( ( response:any ) => {
	    		//SHOW IN CONSOLE
	    		console.log( "COMPONENT" );
	    		console.log( response );

	    		//BROWSE RESPONSE
	    		for( var id in response ){
	    		  //GET PRESUPUESTO
	    		  var factura = response[ id ];

	    		  //SET ID OF FACTURA
	    		  factura.id = id;

	    		  //SAVE FACTURA IN ARRAY
	    		  this.facturas.push( factura );
	    		}
      		}
      	);
  	}//END OF GET PRESUPUESTOS

  	//DELETE FACTURA METHOD
	public deleteFactura( id:string ):void{
		//DELETE FACTURA
		this.facturasService.deleteFactura( id )
			.subscribe( ( response:any ) => {
				//SHOW IN CONSOLE
				console.log( "COMPONENT" );
				console.log( response );

				//RESET ARRAY OF FACTURAS
				this.facturas = [];

				//GET FACTURAS
				this.getFacturas();
			}
		);
	}//END OF DELETE FACTURA METHOD
}//END OF FACTURAS COMPONENT
