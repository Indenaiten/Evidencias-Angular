//IMPORTS
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FacturasService } from '../../../services/facturas.service';
import { ProveedoresService } from '../../../../../services/proveedores.service';

//ADD FACTURA COMPONENT
@Component({
  selector: "app-add-factura", //NAME OF COMPONENT
  templateUrl: "./add-factura.component.html", //NAME OF TEMPLATE OF COMPONENT
  styleUrls: [ "./add-factura.component.css" ] //NAMES OF STYLESHEETS OF COMPONENT
})
export class AddFacturaComponent implements OnInit{
  //ATTRBUTES
  public facturaForm:FormGroup;
  public factura:any;
  public proveedores:any[] = [];
  public iva:any = 0;
  public total:any = 0;

  //METHODS
  //CONSTRUCT
  public constructor(
    private ff:FormBuilder,
    private facturasService:FacturasService,
    private proveedoresService:ProveedoresService
  ){
    //GET PROVEEDORES
    this.proveedoresService.getProveedores()
      .subscribe( ( response ) => {
        //SHOW IN CONSOLE
        console.log( "COMPONENT" );
        console.log( response );

        //BROWSE RESPONSE
        for( var id in response ){
          //GET PROVEEDOR
          var proveedor = response[ id ];

          //SET ID OF PROVEEDOR
          proveedor.id = id;

          //SAVE PROVEEDOR IN ARRAY
          this.proveedores.push( proveedor );
        }
      });
  }//END OF CONSTRUCT

  //INIT METHOD
  public ngOnInit():void{
    //CREATE FORM GROUP
    this.facturaForm = this.ff.group({
      proveedor: [ "", Validators.required ],
      fecha: [ "", Validators.required  ],
      numFacConcepto: [ "", [ Validators.required, Validators.minLength( 10 ) ] ],
      base: [ "", Validators.required ],
      tipo: [ "", Validators.required ],
      iva: this.iva,
      total: this.total
    });

    //ON CHANGES IN VALUES
    this.facturaForm.valueChanges.subscribe( value => {
      var base:number = value.base;
      var tipo:number = value.tipo;
      this.facturaForm.value.iva = base * tipo;
      this.facturaForm.value.total = base + ( base * tipo );
    });
  }//END OF INIT METHOD

  //ON SUBMIT METHOD
  public onSubmit():void{
    //CREATE FACTURA
    this.factura = {
      proveedor: this.facturaForm.get( "proveedor" ).value,
      fecha: this.facturaForm.get( "fecha" ).value,
      numFacConcepto: this.facturaForm.get( "numFacConcepto" ).value,
      base: this.facturaForm.get( "base" ).value,
      tipo: this.facturaForm.get( "tipo" ).value,
      iva: this.facturaForm.get( "iva" ).value,
      total: this.facturaForm.get( "total" ).value
    };

    //PERSIST
    this.facturasService.postFactura( this.factura )
      .subscribe( ( response ) => {
        //SHOW IN CONSOLE
        console.log( "COMPONENT" );
        console.log( response );
      });

    //RESET FORM
    this.facturaForm.reset();
  }//END OF ON SUBMIT
}//END OF ADD FACTURA COMPONENT
