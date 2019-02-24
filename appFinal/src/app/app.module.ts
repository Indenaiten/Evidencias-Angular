//IMPORTS
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//COMPONENTS
import { AppComponent } from './app.component';
import { ProveedoresComponent } from './components/proveedores/proveedores/proveedores.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HeaderComponent } from './components/header/header.component';
import { AddProveedorComponent } from './components/proveedores/add-proveedor/add-proveedor.component';
import { AddPresupuestoComponent } from './components/presupuestos/add-presupuesto/add-presupuesto.component';
import { PresupuestosComponent } from './components/presupuestos/presupuestos/presupuestos.component';
import { EditPresupuestoComponent } from './components/presupuestos/edit-presupuesto/edit-presupuesto.component';
import { RegistroComponent } from './components/auth/registro/registro.component';
import { LoginComponent } from './components/auth/login/login.component';

//SERVICES
import { ProveedoresService } from './services/proveedores.service';
import { PresupuestosService } from './services/presupuestos.service';
import { AuthService } from './services/auth.service';
import { GuardService } from './services/guard.service';

//MODULES
import { FacturasModule } from './modules/facturas/facturas.module';

//ROUTES
const routes:Routes = [
  { path: '', component: InicioComponent },
  { path: 'proveedores', component: ProveedoresComponent, canActivate: [GuardService] },
  { path: 'addprovee', component: AddProveedorComponent, canActivate: [GuardService] },
  { path: 'presupuestos', component: PresupuestosComponent, canActivate: [GuardService] },
  { path: 'addpres', component: AddPresupuestoComponent, canActivate: [GuardService] },
  { path: 'editpres/:id', component: EditPresupuestoComponent, canActivate: [GuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: '**', component: InicioComponent } //** SIGNIFICA CUALQUIER PÁGINA QUE NO EXISTA
];

//APP MODULE
@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent,
    HeaderComponent,
    AddProveedorComponent,
    AddPresupuestoComponent,
    PresupuestosComponent,
    EditPresupuestoComponent,
    RegistroComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( routes ),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FacturasModule
  ],
  providers: [
    ProveedoresService,
    PresupuestosService,
    AuthService,
    GuardService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule{

}//END OF APP MODULE
