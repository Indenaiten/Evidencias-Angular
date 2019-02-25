//IMPORTS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

//COMPONENTS
import { AddFacturaComponent } from './components/facturas/add-factura/add-factura.component';
import { EditFacturaComponent } from './components/facturas/edit-factura/edit-factura.component';
import { FacturasComponent } from './components/facturas/facturas/facturas.component';

//SERVICES
import { FacturasService } from './services/facturas.service';
import { ProveedoresService } from '../../services/proveedores.service';
import { AuthService } from '../../services/auth.service';
import { GuardService } from '../../services/guard.service';

//ROUTES
const routes:Routes = [
  { path: 'facturas', component: FacturasComponent, canActivate: [GuardService] },
  { path: 'addfac', component: AddFacturaComponent, canActivate: [GuardService] },
  { path: 'editfac/:id', component: EditFacturaComponent, canActivate: [GuardService] }
];

//FACTURAS MODULE
@NgModule({
  declarations: [
  	AddFacturaComponent,
  	EditFacturaComponent,
  	FacturasComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot( routes )
  ],
  providers: [
    FacturasService,
    AuthService,
    GuardService,
    ProveedoresService
  ]
})
export class FacturasModule{

}//END OF FACTURAS MODULE
