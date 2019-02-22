//IMPORTS
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

//REGISTRO COMPONENT
@Component({
  selector: "app-registro", //NAME OF COMPONENT
  templateUrl: "./registro.component.html", //NAME OF TEMPLATE OF COMPONENT
  styleUrls: [ "./registro.component.css" ] //NAMES OF STYLESHEET OF COMPONENT
})
export class RegistroComponent implements OnInit{
  //ATTRIBUTES
  public registroForm:FormGroup;
  public userData:any
  //METHODS
  //CONSTRUCT
  public constructor(
    private formBuilder:FormBuilder,
    private authService:AuthService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ){

  }//END OF CONSTRUCT

  //INIT METHOD
  public ngOnInit():void{
    //CREATE FORM GROUP
    this.registroForm = this.formBuilder.group({
      'email': [ '', [ Validators.required, Validators.email ] ],
      'password': [ '', [ Validators.required, Validators.min( 6 ), Validators.pattern( "^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$" ) ] ]
    });
  }//END OF INIT METHOD

  //ON SUBMIT METHOD
  public onSubmit():void{
    //CREATE USER DATA
    this.userData = {
      email: this.registroForm.get( "email" ).value,
      password: this.registroForm.get( "password" ).value
    };

    //REGISTER USER IN FIREBASE
    this.authService.registerUser( this.userData );

    //REDIRECT TO HOME
    this.router.navigate([ "/" ]);
  }//END OF ON SUBMIT METHOD
}//END OF REGISTRO COMPONENT
