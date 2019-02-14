//IMPORTS
import { Directive, HostBinding, HostListener } from '@angular/core';

//MENU ITEM DIRECTIVE
@Directive({
  selector: "[appMenuItem]" //NAME OF SELECTOR OF DIRECTIVE
})
export class MenuItemDirective {
  //ATTRIBUTES
  @HostBinding( "class.itemOrange" )
  private show:boolean = false;

  //METHODS
  //CONSTRUCT
  public constructor(){

  }

  //ON OVER
  @HostListener( "mouseover" )
  public onOver(){
    //SET SHOW IN TRUE
    this.show = true;
  }

  //ON OUT
  @HostListener( "mouseout" )
  public onOut(){
    //SET SHOW IN FALSE
    this.show = false;
  }
}//END OF MENU ITEM DIRECTIVE
