//IMPORTS
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

//PRESUPUESTOS SERVICE
@Injectable({
  providedIn: 'root' //NAME OF SERVICE
})
export class PresupuestosService{
  //ATTRIBUTES
  public url:string = "https://comprasapp-e1b05.firebaseio.com/presupuestos.json";
  public urlId:string = "https://comprasapp-e1b05.firebaseio.com/presupuestos";

  //METHODS
  //CONSTRUCT
  constructor( private http:HttpClient ){

  }//END OF CONSTRUCT

  //POST PRESUPUESTO METHOD
  public postPresupuesto( presupuesto:any ){
    //VARIABLES
    var newPres:string = JSON.stringify( presupuesto ); //CONVERT PRESUPUESTO TO STRING
    var headers:any = new HttpHeaders({ //CREATE HEADERS
      'ContentType': 'application/json'
    });

    //RETURN
    return this.http.post( this.url, newPres, { headers } )
      .pipe( map( ( response:any ) => {
        //SHOW IN CONSOLE
        console.log( "SERVICE" );
        console.log( response );

        //RETURN
        return response;
      }));
  }//END OF POST PRESUPUESTO METHOD

  //GET PRESUPUESTOS METHOD
  public getPresupuestos(){
    //RETURN
    return this.http.get( this.url )
      .pipe( map( ( response:any ) => {
        //SHOW IN CONSOLE
        console.log( "SERVICE" );
        console.log( response );

        //RETURN
        return response;
      }));
  }//END OF GET PRESUPUESTOS METHOD

  //GET PRESUPUESTO METHOD
  public getPresupuesto( id:string ){
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
  }//END OF GET PRESUPUESTO METHOD

  //PUT PRESUPUESTO METHOD
  public putPresupuesto( presupuesto:any, id:string ){
    //VARIABLES
    var newPres:string = JSON.stringify( presupuesto ); //CONVERT PRESUPUESTO TO STRING
    var headers:any = new HttpHeaders({ //CREATE HEADERS
      'ContentType': 'application/json'
    });
    var url = `${this.urlId}/${id}.json`;

    //RETURN
    return this.http.put( url, newPres, { headers } )
      .pipe( map( ( response:any ) => {
        //SHOW IN CONSOLE
        console.log( "SERVICE" );
        console.log( response );

        //RETURN
        return response;
      }));
  }//END OF PUT PRESUPUESTO METHOD
}//END OF PRESUPUESTOS SERVICE
