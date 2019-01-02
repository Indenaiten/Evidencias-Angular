//IMPORTS
import { Component, OnInit, Input } from '@angular/core';

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

  //METHODS
  //CONSTRUCT
  public constructor(){

  }

  //INIT
  public ngOnInit(){

  }
}//END OF CHILD COMPONENT
