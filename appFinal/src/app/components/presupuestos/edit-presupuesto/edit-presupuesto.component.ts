//IMPORTS
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PresupuestosService } from '../../../services/presupuestos.service';
import { Router, ActivatedRoute } from '@angular/router';

//EDIT PRESUPUESTO COMPONENTº
@Component({
  selector: "app-edit-presupuesto", //NAME OF COMPONENT
  templateUrl: "./edit-presupuesto.component.html", //NAME OF TEMPLATE OF COMPONENT
  styleUrls: [ "./edit-presupuesto.component.css" ] //NAMES OF STYLESHEETS OF COMPONENT
})
export class EditPresupuestoComponent implements OnInit{
  //ATTRIBUTES
  public presupuestoForm:FormGroup;
  public presupuesto:any;
  public iva:any = 0;
  public total:any = 0;
  public id:string;

  //METHODS
  //CONSTRUCT
  public constructor(
    private pf:FormBuilder,
    private presupuestosService:PresupuestosService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ){
    //GET ACTIVATED ROUTE
    this.activatedRoute.params
      .subscribe( ( parameters:any ) => {
        //SAVE ID
        this.id = parameters[ 'id' ];

        //GET PRESUPUESTO
        this.presupuestosService.getPresupuesto( this.id )
          .subscribe( ( response:any ) => {
            //SHOW IN CONSOLE
            console.log( "SERVICIO" );
            console.log( response );

            //SAVE PRESUPUESTO
            this.presupuesto = response;
          });
      });
  }//END OF CONSTRUCT

  //INIT METHOD
  public ngOnInit():void{
    //CREATE FORM GROUP
    this.presupuestoForm = this.pf.group({
      proveedor: [ "", Validators.required ],
      fecha: [ "", Validators.required  ],
      concepto: [ "", [ Validators.required, Validators.minLength( 10 ) ] ],
      base: [ "", Validators.required ],
      tipo: [ "", Validators.required ],
      iva: this.iva,
      total: this.total
    });

    //ON CHANGES IN VALUES
    this.presupuestoForm.valueChanges.subscribe( value => {
      var base:number = value.base;
      var tipo:number = value.tipo;
      this.presupuestoForm.value.iva = base * tipo;
      this.presupuestoForm.value.total = base + ( base * tipo );
    });
  }//END OF INIT METHOD

  //ON SUBMIT METHOD
  public onSubmit():void{
    //CREATE PRESUPUESTO
    this.presupuesto = {
      proveedor: this.presupuestoForm.get( "proveedor" ).value,
      fecha: this.presupuestoForm.get( "fecha" ).value,
      concepto: this.presupuestoForm.get( "concepto" ).value,
      base: this.presupuestoForm.get( "base" ).value,
      tipo: this.presupuestoForm.get( "tipo" ).value,
      iva: this.presupuestoForm.get( "iva" ).value,
      total: this.presupuestoForm.get( "total" ).value
    };

    //PERSIST
    this.presupuestosService.putPresupuesto( this.presupuesto, this.id )
      .subscribe( ( response ) => {
        //SHOW IN CONSOLE
        console.log( "COMPONENT" );
        console.log( response );

        //REDIRECT
        this.router.navigate([ "/presupuestos" ]);
      });

    //RESET FORM
    this.presupuestoForm.reset();
  }//END OF ON SUBMIT
}//END OF EDIT PRESUPUESTO COMPONENTº
