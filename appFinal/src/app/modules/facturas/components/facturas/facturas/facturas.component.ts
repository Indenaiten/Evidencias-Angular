//IMPORTS
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  public searchForm:FormControl;
  public search:string;
  public results:boolean = false;
	public loading:boolean = true;

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
    //SEARCH FACTURAS
    this.searchFacturas();
	}//END OF INIT METHOD

  //SEARCH FACTURAS METHOD
  private searchFacturas():void{
    //CREATE FORM GROUP
    this.searchForm = new FormControl();

    //VALUE CHANGES
    this.searchForm.valueChanges
      .subscribe( ( search ) => {
        //SAVE SARCH
        this.search = search

        //CLEAR ARRAY OF facturas
        this.facturas = [];

        //SET results IN FALSE
        this.results = false;

        //CHECK THIS search
        if( this.search.length != 0 ){ //IF THE search EXITS
          //SET loading IN TRUE
          this.loading = true

          //SEARCH
          this.facturasService.search( this.search )
            .subscribe( ( response ) => {
              //SHOW IN CONSOLE
              console.log( "COMPONENT" );
              console.log( response );

              //BROWSE RESPONSE
              for( var id in response ){
                //GET FACTURA
                var factura = response[ id ];

                //SET ID OF FACTURA
                factura.id = id;

                //SAVE FACTURA IN ARRAY
                this.facturas.push( factura );
              }

              //SET loading IN FALSE
              this.loading = false;

              //SET RESULTS OF FACTURAS
              this.results = this.checkResultsOfFacturas();
            }
          );
        }
        else{ //IF THE search NO EXITS
          //GET FACTURAS
          this.getFacturas();
        }
      }
    );
  }//END OF SEARCH FACTURAS METHOD

  //CHECK RESULTS OF FACTURAS METHOD
  private checkResultsOfFacturas():boolean{
    //VARIABLES
    var result:boolean = false;

    //CHECK RESULTS
    if( this.facturas.length > 0 ){ //IF THERE ARE RESULTS
      //SET result IN TRUE
      result = true;
    }

    //RETURN
    return result;
  }//END OF CHECK RESULTS OF FACTURAS METHOD

	//GET FACTURAS METHOD
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

            //SET LOADING IN FALSE
        		this.loading = false;

            //SET RESULTS OF FACTURAS
            this.results = this.checkResultsOfFacturas();
      		}
      	);
  	}//END OF GET FACTURAS METHOD

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
