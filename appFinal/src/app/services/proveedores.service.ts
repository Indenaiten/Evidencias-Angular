//IMPORTS
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, } from '@angular/common/http';
import { map } from 'rxjs/operators';

//PROVEEDORES SERVICE
@Injectable({
  providedIn: 'root'
})
export class ProveedoresService{
  //ATTRIBUTES
  public url:string = "https://comprasapp-e1b05.firebaseio.com/proveedores.json";
  public urlId:string = "https://comprasapp-e1b05.firebaseio.com/proveedores";

  //METHODS
  //CONSTRUCTOR
  public constructor(
    private http:HttpClient
  ){

  }//END OF CONSTRUCTOR

  //POST PROVEEDOR METHOD
  public postProveedor( proveedor:any ):any{
    //VARIABLES
    var newPro:string = JSON.stringify( proveedor ); //CONVERT PROVEEDOR TO STRING
    var headers:any = new HttpHeaders({ //CREATE HEADERS
      'ContentType': 'application/json'
    });

    //RETURN
    return this.http.post( this.url, newPro, { headers } )
      .pipe( map( ( response:any ) => {
        //SHOW IN CONSOLE
        console.log( "SERVICE" );
        console.log( response );

        //RETURN
        return response;
      }));
  }//END OF POST PROVEEDOR METHOD

  //GET PROVEEDORES METHOD
  public getProveedores():any{
    //RETURN
    return this.http.get( this.url )
      .pipe( map( ( response:any ) => {
        //SHOW IN CONSOLE
        console.log( "SERVICE" );
        console.log( response );

        //RETURN
        return response;
      }));
  }//END OF GET PROVEEDORES METHOD

  //GET PROVEEDOR METHOD
  public getProveedor( id:string ):any{
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
  }//END OF GET PROVEEDOR METHOD

  //PUT PROOVEDOR METHOD
  public putProveedor( proveedor:any, id:string ):any{
    //VARIABLES
    var newPro:string = JSON.stringify( proveedor ); //CONVERT PROOVEDOR TO STRING
    var headers:any = new HttpHeaders({ //CREATE HEADERS
      'ContentType': 'application/json'
    });
    var url = `${this.urlId}/${id}.json`;

    //RETURN
    return this.http.put( url, newPro, { headers } )
      .pipe( map( ( response:any ) => {
        //SHOW IN CONSOLE
        console.log( "SERVICE" );
        console.log( response );

        //RETURN
        return response;
      }));
  }//END OF PUT PROOVEDOR METHOD

  //DELETE PROVEEDOR METHOD
  public deleteProveedor( id:string ):any{
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
  }//END OF DELETE PROVEEDOR METHOD
}//END OF PROVEEDORES SERVICE
