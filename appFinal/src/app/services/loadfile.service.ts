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
    var storageRef:any = firebase.storage().ref();
    var uploadTask:any = storageRef.child( `${this.basePath}/${upload.file.name}` ).put( upload.file );

    //UPLOAD
    uploadTask.on( firebase.storage.TaskEvent.STATE_CHANGED, ( snapshot ) => {
        upload.progress = ( snapshot[ "bytesTransferred" ] / snapshot[ "totalBytes" ] * 100 );
      }, ( error ) => {
        console.log( error );
      }, () => {
        uploadTask.snapshot.ref.getDownloadURL().then( ( downloadURL ) => {
            upload.url = downloadURL;
            upload.name = upload.file.name;
            delete upload.progress;

            //SAVE
            this.angularFireDatabase.list( `${this.basePath}/` ).push( upload );
          }
        );
      });
  }//END OF PUSH UPLOAD METHOD

  //GET UPLOADS METHOD
  public getUploads():any{
    //RETURN UPLOADS
    return this.angularFireDatabase.list<Archive>( this.basePath ).snapshotChanges();
  }//END OF GET UPLOADS METHOD

  //DELETE METHOD
  public delete( upload:Archive ):void{
    this.deleteFileData( upload.key )
        .then( () => {
          //VARIABLES
          var storageRef:any = firebase.storage().ref();

          //DELETE
          storageRef.child(`${this.basePath}/${upload.name}`).delete();
        })
        .catch( ( error ) => console.log( error ) );
  }//END OF DELETE METHOD

  //END OF DELETE FILE DATA METHOD
  private deleteFileData( key:string ):any{
    //RETURN
    return this.angularFireDatabase.list( `${this.basePath}/` ).remove( key );
  }//END OF DELETE FILE DATA METHOD
}//END OF LOADFILE SERVICE
