//IMPORTS
import { Component, OnInit } from '@angular/core';
import { LoadfileService } from '../../../services/loadfile.service';
import { Archive } from '../file.modal';
//import { AngularFireList } from 'angularfire2/database';

//CONTRATOS COMPONENT
@Component({
  selector: "app-contratos", //NAME OF COMPONENT
  templateUrl: "./contratos.component.html", //NAME OF TEMPLATE OF COMPONENT
  styleUrls: [ "./contratos.component.css" ] //NAMES OF STYLESHEETS OF COMPONENT
})
export class ContratosComponent implements OnInit{
  //ATTRIBUTES
  public uploads:Array<any> = [];

  //METHODS
  //CONSTRUCTOR
  public constructor(
    private loadfileService:LoadfileService
  ){

  }//END OF CONSTRUCTOR

  //INIT METHOD
  public ngOnInit():void{
    //GET UPLOADS
    this.loadfileService.getUploads()
      .subscribe( ( response ) => {
        //CLEAR UPLOADS
        this.uploads = [];
        
        //BROWSE RESPONSE
        for( const id in response ){
          //VARIABLES
          var upload:any = response[ id ]; //GET UPLOAD
          var p:any = upload.payload.val();

          //SAVE IN ARRAY
          this.uploads.push({
              key: upload.key,
              name: p.name,
              url: p.url
          });
        }//END OF BROWSE RESPONSE
      }
    );
  }//END OF INIT METHOD
}//END OF CONTRATOS COMPONENT
