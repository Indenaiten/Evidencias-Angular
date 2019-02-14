//IMPORTS
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

//ADD PRESUPUESTO COMPONENT
@Component({
  selector: "app-add-presupuesto", //NAME OF COMPONENT
  templateUrl: "./add-presupuesto.component.html", //NAME OF TEMPLATE OF COMPONENT
  styleUrls: [ "./add-presupuesto.component.css" ] //NAMES OF STYLESHEETS OF COMPONENT
})
export class AddPresupuestoComponent implements OnInit{
  //ATTRIBUTES
  public presupuestoForm:FormGroup;
  public presupuesto:any;
  public iva:any = 0;
  public total:any = 0;

  //METHODS
  //CONSTRUCT
  public constructor( private pf:FormBuilder ){

  }

  //INIT
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
  }

  //SAVE PRESUPUESTO
  public savePresupuesto():void{
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
  }
}//END OF ADD PRESUPUESTO COMPONENT
