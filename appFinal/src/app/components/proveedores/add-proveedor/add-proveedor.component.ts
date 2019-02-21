//IMPORTS
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

//ADD PROVEEDOR COMPONENT
@Component({
  selector: "app-add-proveedor", //NAME OF COMPONENT
  templateUrl: "./add-proveedor.component.html", //NAME OF TEMPLATE OF COMPONENT
  styleUrls: [ "./add-proveedor.component.css" ] //NAMES OF STYLESHEETS OF COMPONENT
})
export class AddProveedorComponent implements OnInit{
  //ATTRIBUTES
  @ViewChild( "formAddPro" )
  public formpro:NgForm;
  public proveedor:any;
  public provincias:string[] = [ 'Álava','Albacete','Alicante','Almería','Asturias','Ávila','Badajoz',
     'Barcelona','Burgos', 'Cáceres', 'Cádiz','Cantabria','Castellón','Ciudad Real','Córdoba',
     'La Coruña','Cuenca','Gerona','Granada','Guadalajara', 'Guipúzcoa','Huelva','Huesca',
     'IslasBaleares','Jaén','León','Lérida','Lugo','Madrid', 'Málaga','Murcia','Navarra','Orense',
     'Palencia','Las Palmas','Pontevedra','La Rioja','Salamanca','Segovia','Sevilla','Soria',
     'Tarragona','Santa Cruz de Tenerife','Teruel','Toledo','Valencia','Valladolid','Vizcaya',
     'Zamora','Zaragoza' ];

  //METHODS
  //CONSTRUCT
  public constructor(){
    this.proveedor = {
      nombre: "",
      cif: "",
      direccion: "",
      cp: "",
      localidad: "",
      provincia: "",
      telefono: null,
      email: "",
      contacto: ""
    };
  }//END OF CONSTRUCT

  //INIT METHOD
  public ngOnInit():void{

  }//END OF INIT METHOD

  //ON SUBMIT METHOD
  public onSubmit():void{
    //MAP DATA WITH OBJECT
    this.proveedor.nombre = this.formpro.value.nombre;
    this.proveedor.cif = this.formpro.value.cif;
    this.proveedor.direccion = this.formpro.value.direccion;
    this.proveedor.cp = this.formpro.value.cp;
    this.proveedor.localidad = this.formpro.value.localidad;
    this.proveedor.provincia = this.formpro.value.provincia;
    this.proveedor.telefono = this.formpro.value.telefono;
    this.proveedor.email = this.formpro.value.nombre;
    this.proveedor.contacto = this.formpro.value.contacto;

    //RESET FORM
    this.formpro.reset();
  }//END OF ON SUBMIT METHOD
}//END OF ADD PROVEEDOR COMPONENT
