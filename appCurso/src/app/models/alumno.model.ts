//ALUMNO MODEL
export class Alumno{
  //ATTRIBUTES
  public id:number;
  public name:string;
  public lastnames:string;
  public city:string;

  //METHODS
  //CONSTRUCTOR
  public constructor( id:number, name:string, lastnames:string, city:string ){
    this.id = id;
    this.name = name;
    this.lastnames = lastnames;
    this.city = city;
  }
}//END OF ALUMNO MODEL
