//IMPORTS
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Archive } from '../components/uploads/file.modal';

//LOADFILE SERVICE
@Injectable({
  providedIn: 'root'
})
export class LoadfileService{
  //ATTRIBUTES
  private basePath:string = "/uploads";
  public uploads:AngularFireList<Archive[]>;

  //METHODS
  //CONSTRUCT
  public constructor(
    public angularFireDatabase:AngularFireDatabase
  ){

  }//END OF CONSTRUCT

  //PUSH UPLOAD METHOD
  public pushUpload( upload:Archive ){
    //VARIABLES
    var storageRef = firebase.storage().ref();
    var uploadTask = storageRef.child( `${this.basePath}/${upload.file.name}` ).put( upload.file );

    //UPLOAD FILE
    uploadTask.on( firebase.storage.TaskEvent.STATE_CHANGED, ( snapshot ) => {
      //GET PROGRESSS
      upload.progress = ( snapshot[ "bytesTransferred" ] / snapshot[ "totalBytes" ] * 100 );
    },
      ( error ) => {
        //SHOW IN CONSOLE
        console.log( "SERVICE" );
        console.log( error );
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then(
          ( downloadURL ) => {
            //GET INFO OF FILE
            upload.url = uploadTask.snapshot.downloadURL;
            upload.name = upload.file.name;
            delete upload.progress;

            //SAVE FILE
            this.saveFileData( upload );
          }
        );
      }
    );
  }//END OF PUSH UPLOAD METHOD

  //SAVE FILE DATA METHOD
  private saveFileData( upload:Archive ){
    //SAVE
    this.angularFireDatabase.list( `${this.basePath}/` ).push( upload );
  }//END OF SAVE FILE DATA METHOD
}//END OF LOADFILE SERVICE
