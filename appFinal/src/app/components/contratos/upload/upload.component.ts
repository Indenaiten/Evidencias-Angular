//IMPORTS
import { Component, OnInit } from '@angular/core';
import { LoadfileService } from '../../../services/loadfile.service';
import { Archive } from '../file.modal';
import * as _ from 'lodash';

//UPLOADCOMPONENT
@Component({
  selector: "app-upload", //NAME OF COMPONENT
  templateUrl: "./upload.component.html", //NAME OF TEMPLATE OF COMPONENT
  styleUrls: [ "./upload.component.css" ] //NAMES OF STYLESHEETS OF COMPONENT
})
export class UploadComponent implements OnInit{
  //ATTRIBUTES
  public selectedFiles:FileList;
  public currentUpload:Archive;
  public loading:boolean = false;

  //METHODS
  //CONSTRUCT
  public constructor(
    private loadfileService:LoadfileService
  ){

  }//END OF CONSTRUCT

  //INIT
  public ngOnInit():void{

  }//END OF INIT

  //DETECT FILES METHOD
  public detectFiles( event ){
    //GET FILES
    this.selectedFiles = event.target.files;
  }//END OF DETECT FILES METHOD

  //UPLOAD SINGLE METHOD
  public uploadSingle(){
    //VARIABLES
    var file = this.selectedFiles[ 0 ];

    //SET loading IN TRUE
    this.loading = true;

    //SAVE FILE
    this.currentUpload = new Archive( file );

    //UPLOAD FILE
    this.loadfileService.pushUpload( this.currentUpload );
  }//END OF UPLOAD SINGLE METHOD
}//END OF UPLOAD COMPONENT
