//IMPORTS
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProveedoresService } from '../../../services/proveedores.service';

//ADD PROVEEDOR COMPONENT
@Component({
  selector: "app-add-proveedor", //NAME OF COMPONENT
  templateUrl: "./add-proveedor.component.html", //NAME OF TEMPLATE OF COMPONENT
  styleUrls: [ "./add-proveedor.component.css" ] //NAMES OF STYLESHEETS OF COMPONENT
})
export class AddProveedorComponent implements OnInit{
  //ATTRIBUTES
  public proveedoresForm:FormGroup;
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
  public constructor(
    private pf:FormBuilder,
    private proveedoresService:ProveedoresService
  ){
    
  }//END OF CONSTRUCT

  //INIT METHOD
  public ngOnInit():void{
    //CREATE FORM GROUP
    this.proveedoresForm = this.pf.group({
      nombre: [ "", Validators.required ],
      cif: [ "", Validators.required  ],
      direccion: [ "", Validators.required ],
      codigoPostal: [ "", Validators.required ],
      localidad: [ "", Validators.required ],
      provincia: [ "", Validators.required ],
      telefono: [ "", Validators.required ],
      email: [ "", [ Validators.required, Validators.email ] ],
      contacto: [ "", Validators.required ]
    });console.log( this.proveedoresForm );
  }//END OF INIT METHOD

  //ON SUBMIT METHOD
  public onSubmit():void{
    //CREATE PROVEEDOR
    this.proveedor = {
      nombre: this.proveedoresForm.get( "nombre" ).value,
      cif: this.proveedoresForm.get( "cif" ).value,
      direccion: this.proveedoresForm.get( "direccion" ).value,
      codigoPostal: this.proveedoresForm.get( "codigoPostal" ).value,
      localidad: this.proveedoresForm.get( "localidad" ).value,
      provincia: this.proveedoresForm.get( "provincia" ).value,
      telefono: this.proveedoresForm.get( "telefono" ).value,
      email: this.proveedoresForm.get( "email" ).value,
      contacto: this.proveedoresForm.get( "contacto" ).value
    };

    //PERSIST
    this.proveedoresService.postProveedor( this.proveedor )
      .subscribe( ( response ) => {
        //SHOW IN CONSOLE
        console.log( "COMPONENT" );
        console.log( response );
      });

    //RESET FORM
    this.proveedoresForm.reset();
  }//END OF ON SUBMIT METHOD
}//END OF ADD PROVEEDOR COMPONENT
