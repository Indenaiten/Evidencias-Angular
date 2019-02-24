//IMPORTS
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

//LOGIN COMPONENT
@Component({
  selector: "app-login", //NAME OF COMPONENT
  templateUrl: "./login.component.html", //NAME OF TEMPLATE OF COMPONENT
  styleUrls: [ "./login.component.css" ] //NAMES OF STYLESHEETS OF COMPONENT
})
export class LoginComponent implements OnInit{
  //ATTRIBUTES
  public loginForm:FormGroup;
  public userData:any
  public authenticating:boolean = false;
  public errorCredentials:boolean = false;
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
      'required': "Contraseña obligatoria"
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
    this.loginForm = this.formBuilder.group({
      'email': [ '', [ Validators.required, Validators.email ] ],
      'password': [ '', [ Validators.required ] ]
    });

    //SET MESSAGES OF ERROR WHEN VALUES CHANGED
    this.loginForm.valueChanges.subscribe( ( data ) => this.onValueChanged( data ) );
    this.onValueChanged(); //CLEAR MESSAGES
  }//END OF INIT METHOD

  //ON SUBMIT METHOD
  public onSubmit():void{
    //SET authenticating IN TRUE
    this.authenticating = true;

    //CREATE USER DATA
    this.userData = {
      email: this.loginForm.get( "email" ).value,
      password: this.loginForm.get( "password" ).value
    };

    //AUTHENTICATE USER FROM FIREBASE
    this.authService.login( this.userData );

    //SET TIMEOUT
    setTimeout( () => {
      //CHECK AUTHENTICATION
      if( !this.authService.iAuth() ){ //IF IT'S NOT AUTHENTICATED
        //SET errorCredentials IN TRUE
        this.errorCredentials = true;

        //SET authenticating IN FALSE
        this.authenticating = false;
      }
      else{ //IF IT'S AUTHENTICATED
        //REDIRECT TO HOME
        this.router.navigate([ "/" ]);
      }
    }, 2000 );
  }//END OF ON SUBMIT METHOD

  //ON VALUE CHANGED
  public onValueChanged( data?:any ):void{
    //CHECK IF EXISTS A FORM
    if( !this.loginForm ){ return; }

    //GET FORM
    var form = this.loginForm;

    //BROWSE erroresForm
    for( var field in this.erroresForm ){
      //CLEAR FIELD
      this.erroresForm[ field ] = '';

      //GET FIELD OF FORM
      var control = form.get( field );

      //CHECK IF EXISTS AND IT'S CORRECT
      if( control && control.dirty && !control.valid ){
        //GET MESSAGE OF VALIDATION
        var msgs = this.msgValidation[ field ];

        //BROWSE ERROR OF FIELD
        for( var key in control.errors ){
          //SET MESSAGES OF VALIDATION IN erroresForm
          this.erroresForm[ field ] += msgs[ key ] + " ";
        }
      }
    }
  }//END OF ON VALUE CHANGED
}//END OF LOGIN COMPONENT
