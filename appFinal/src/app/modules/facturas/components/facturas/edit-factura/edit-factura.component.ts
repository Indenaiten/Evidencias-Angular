//IMPORTS
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FacturasService } from '../../../services/facturas.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProveedoresService } from '../../../../../services/proveedores.service';

//EDIT FACTURA COMPONENT
@Component({
  selector: "app-edit-factura", //NAME OF COMPONENT
  templateUrl: "./edit-factura.component.html", //NAME OF TEMPLATE OF COMPONENT
  styleUrls: [ "./edit-factura.component.css" ] //NAMES OF STYLESHEETS OF COMPONENT
})
export class EditFacturaComponent implements OnInit{
	//ATTRIBUTES
	public facturaForm:FormGroup;
	public factura:any;
  public proveedores:any[] = [];
	public iva:any = 0;
	public total:any = 0;
	public id:string;

	//METHODS
	//CONSTRUCT
	public constructor(
		private ff:FormBuilder,
		private facturasService:FacturasService,
		private router:Router,
		private activatedRoute:ActivatedRoute,
    private proveedoresService:ProveedoresService
	){
		//GET ACTIVATED ROUTE
		this.activatedRoute.params
		  	.subscribe( ( parameters:any ) => {
		    //SAVE ID
		    this.id = parameters[ 'id' ];

		    //GET FACTURA
		    this.facturasService.getFactura( this.id )
		     	.subscribe( ( response:any ) => {
		     		//SHOW IN CONSOLE
		     		console.log( "SERVICIO" );
		     		console.log( response );

		     		//SAVE FACTURA
		     		this.factura = response;
		    	}
		    );
			}
		);

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
		this.facturasService.putFactura( this.factura, this.id )
			.subscribe( ( response ) => {
	    		//SHOW IN CONSOLE
	    		console.log( "COMPONENT" );
	    		console.log( response );

	    		//REDIRECT
        		this.router.navigate([ "/facturas" ]);
	    	}
	    );

		//RESET FORM
		this.facturaForm.reset();
	}//END OF ON SUBMIT
}//END OF EDIT FACTURA COMPONENT
