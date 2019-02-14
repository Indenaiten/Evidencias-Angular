//IMPORTS
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

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

  //METHODS
  //CONSTRUCT
  public constructor( private pf:FormBuilder ){

  }

  //INIT
  public ngOnInit(){
    this.presupuestoForm = this.pf.group({
      proveedor: "",
      fecha: "",
      concepto: "",
      base: null,
      tipo: null,
      iva: null,
      total: null
    });
  }

  //ON SUBMIT
  public onSubmit(){
      //SET PRESUPUESTO
      this.presupuesto = this.savePresupuesto();
  }

  //SAVE PRESUPUESTO
  public savePresupuesto(){
    //CREATE CONSTANT WITH DATA
    const savePresupuesto:any = {
      proveedor: this.presupuestoForm.get( "proveedor" ).value,
      fecha: this.presupuestoForm.get( "fecha" ).value,
      concepto: this.presupuestoForm.get( "concepto" ).value,
      base: this.presupuestoForm.get( "base" ).value,
      tipo: this.presupuestoForm.get( "tipo" ).value,
      iva: this.presupuestoForm.get( "iva" ).value,
      total: this.presupuestoForm.get( "total" ).value
    };

    //RETURN
    return savePresupuesto;
  }
}//END OF ADD PRESUPUESTO COMPONENT
