//IMPORTS
import { Injectable } from '@angular/core';

//PROVEEDORES SERVICE
@Injectable({
  providedIn: 'root'
})
export class ProveedoresService{
  //ATTRIBUTES

  //METHODS
  //CONSTRUCTOR
  public constructor(){

  }

  //GET PROVEEDORES
  public getProveedores(){
    //RETURN
    return "Mensaje desde el Servicio";
  }
}//END OF PROVEEDORES SERVICE
