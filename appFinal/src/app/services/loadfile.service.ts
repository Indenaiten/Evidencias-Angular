//IMPORTS
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Archive } from '../components/contratos/file.modal';

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
  public pushUpload( upload:Archive ):any{
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

            //SAVE
            this.angularFireDatabase.list( `${this.basePath}/` ).push( upload );
          }
        );
      }
    );
  }//END OF PUSH UPLOAD METHOD

  //GET UPLOADS METHOD
  public getUploads():any{
    //RETURN UPLOADS
    let temp = this.angularFireDatabase.list<Archive>( this.basePath ).snapshotChanges();
    console.log("Las subidas son");
    console.log(temp);
    return temp;
  }//END OF GET UPLOADS METHOD

  //DELETE METHOD
  public delete( name:string ):void{
    //VARIABLES
    var ref:any = firebase.storage().ref();

    //DELETE
    ref.child( `${this.basePath}/${name}` ).delete();
  }//END OF DELETE METHOD
}//END OF LOADFILE SERVICE
