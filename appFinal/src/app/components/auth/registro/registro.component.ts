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
  public erroresForm:any = {
    'email': '',
    'password': ''
  }

  public msgValidation:any = {
    'email': {
      'required': "Email Obligatorio",
      'email': "Introuzca un email correcto"
    },

    'password': {
      'required': "Contraseña obligatoria",
      'pattern': "La contraseña debe tener al menos un número y una letra",
      'minlength': "y más de 6 caracteres"
    }
  }

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
      'password': [ '', [ Validators.required, Validators.pattern( "^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$" ), Validators.minLength( 6 ) ] ]
    });

    //SET MESSAGES OF ERROR WHEN VALUES CHANGED
    this.registroForm.valueChanges.subscribe( ( data ) => this.onValueChanged( data ) );
    this.onValueChanged(); //CLEAR MESSAGES
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

  //ON VALUE CHANGED
  public onValueChanged( data?:any ){
    if( !this.registroForm ){ return; }

    var form = this.registroForm;

    for( var field in this.erroresForm ){
      this.erroresForm[ field ] = '';

      var control = form.get( field );

      if( control && control.dirty && !control.valid ){
        var msgs = this.msgValidation[ field ];

        for( var key in control.errors ){
          this.erroresForm[ field ] += msgs[ key ] + " ";
        }
      }
    }
  }//END OF ON VALUE CHANGED
}//END OF REGISTRO COMPONENT
