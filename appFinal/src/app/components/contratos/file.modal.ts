//ARCHIVE CLASS
export class Archive{
  //ATTRIBUTES
  public key:string;
  public file:File;
  public name:string;
  public url:string;
  public progress:number;
  public createdAt:Date = new Date();

  //METHODS
  //CONSTRUCT
  public constructor( file:File ){
    this.file = file;
  }//END OF CONSTRUCT
}//END OF ARCHIVE CLASS
