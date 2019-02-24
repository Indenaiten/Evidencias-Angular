//IMPORTS
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, } from '@angular/common/http';
import { map } from 'rxjs/operators';

//FACTURAS SERVICE
@Injectable({
  providedIn: 'root'
})
export class FacturasService{
	//ATTRIBUTES
  	public url:string = "https://comprasapp-e1b05.firebaseio.com/facturas.json";
  	public urlId:string = "https://comprasapp-e1b05.firebaseio.com/facturas";

	//METHODS
	//CONSTRUCT
  	public constructor(
  		private http:HttpClient
  	){

  	}//END OF CONSTRUCT

  	//POST FACTURA METHOD
	public postFactura( factura:any ):any{
	  //VARIABLES
	  var newFac:string = JSON.stringify( factura ); //CONVERT FACTURA TO STRING
	  var headers:any = new HttpHeaders({ //CREATE HEADERS
	    'ContentType': 'application/json'
	  });

	  //RETURN
	  return this.http.post( this.url, newFac, { headers } )
	    .pipe( map( ( response:any ) => {
	      //SHOW IN CONSOLE
	      console.log( "SERVICE" );
	      console.log( response );

	      //RETURN
	      return response;
	    }));
	}//END OF POST FACTURA METHOD

	//GET FACTURAS METHOD
	public getFacturas():any{
	  //RETURN
	  return this.http.get( this.url )
	    .pipe( map( ( response:any ) => {
	      //SHOW IN CONSOLE
	      console.log( "SERVICE" );
	      console.log( response );

	      //RETURN
	      return response;
	    }));
	}//END OF GET FACTURAS METHOD

	//GET FACTURA METHOD
	public getFactura( id:string ):any{
	  //VARIABLES
	  var url = `${this.urlId}/${id}.json`;

	  //RETURN
	  return this.http.get( url )
	    .pipe( map( ( response:any ) => {
	      //SHOW IN CONSOLE
	      console.log( "SERVICE" );
	      console.log( response );

	      //RETURN
	      return response;
	    }));
	}//END OF GET FACTURA METHOD

	//PUT FACTURA METHOD
	public putFactura( factura:any, id:string ):any{
	  //VARIABLES
	  var newFac:string = JSON.stringify( factura ); //CONVERT FACTURA TO STRING
	  var headers:any = new HttpHeaders({ //CREATE HEADERS
	    'ContentType': 'application/json'
	  });
	  var url = `${this.urlId}/${id}.json`;

	  //RETURN
	  return this.http.put( url, newFac, { headers } )
	    .pipe( map( ( response:any ) => {
	      //SHOW IN CONSOLE
	      console.log( "SERVICE" );
	      console.log( response );

	      //RETURN
	      return response;
	    }));
	}//END OF PUT FACTURA METHOD

	//DELETE FACTURA METHOD
	public deleteFactura( id:string ):any{
	  //VARIABLES
	  var url = `${this.urlId}/${id}.json`;

	  //RETURN
	  return this.http.delete( url )
	    .pipe( map( ( response:any ) => {
	      //SHOW IN CONSOLE
	      console.log( "SERVICE" );
	      console.log( response );

	      //RETURN
	      return response;
	    }));
	}//END OF DELETE FACTURA METHOD
}//END OF FACTURAS SERVICE