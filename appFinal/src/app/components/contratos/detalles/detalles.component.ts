//IMPORTS
import { Component, OnInit, Input } from '@angular/core';
import { Archive } from '../file.modal';
import { LoadfileService } from '../../../services/loadfile.service';

//DETALLES COMPONENT
@Component({
  selector: "app-detalles", //NAME OF COMPONENT
  templateUrl: "./detalles.component.html", //NAME OF TEMPLATE OF COMPONENT
  styleUrls: [ "./detalles.component.css" ] //NAMES OF STYLESHEETS OF COMPONENT
})
export class DetallesComponent implements OnInit{
  //ATTRIBUTES
  @Input()
  public upload:Archive;

  //METHODS
  //CONSTRUCTOR
  public constructor(
    private loadfileService:LoadfileService
  ){

  }//END OF CONSTRUCTOR

  //INIT METHOD
  public ngOnInit():void{

  }//END OF INIT METHOD

  //DELETE METHOD
  public delete( upload:Archive ){
    //DELETE
    this.loadfileService.delete( this.upload );
  }//END OF DELETE METHOD
}//END OF DETALLES COMPONENT
