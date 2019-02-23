//IMPORTS
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

//GUARD SERVICE
@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate{
	//ATTRIBUTES

	//METHODS
	//CONSTRUCT
	public constructor(
		private authService:AuthService
	){

	}//END OF CONSTRUCT

	//CAN ACTIVATE METHOD
	public canActivate(){
		//RETURN
		return this.authService.iAuth();
	}//END OF CAN ACTIVATE METHOD
}//END OF GUARD SERVICE
