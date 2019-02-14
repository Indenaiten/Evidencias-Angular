//IMPORTS
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

//CHILD COMPONENT
@Component({
  selector: "app-child", //NAME OF SELECTOR OF COMPONENT
  templateUrl: "./child.component.html", //NAME OF HTML FILE OF COMPONENT
  styleUrls: [ "./child.component.css" ] //NAMES OF STYLESHEETS OF COMPONENT
})
export class ChildComponent implements OnInit{
  //ATTRIBUTES
  @Input()
  public advice:string;

  @Output()
  public markedMessage:any = new EventEmitter();

  public read:boolean = false;
  public message:string;

  //METHODS
  //CONSTRUCT
  public constructor(){

  }

  //INIT
  public ngOnInit(){

  }

  //MARK
  public mark(){
    //INVERT READ
    this.read = !this.read;
  }

  //DETECTER
  public detecter( event ){
    this.message = this.advice;
    this.markedMessage.emit( this.message );
  }
}//END OF CHILD COMPONENT
