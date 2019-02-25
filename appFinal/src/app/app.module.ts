//IMPORTS
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { enviroment } from './config/firebase.config';

//COMPONENTS
import { AppComponent } from './app.component';
import { ProveedoresComponent } from './components/proveedores/proveedores/proveedores.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HeaderComponent } from './components/header/header.component';
import { AddProveedorComponent } from './components/proveedores/add-proveedor/add-proveedor.component';
import { EditProveedorComponent } from './components/proveedores/edit-proveedor/edit-proveedor.component';
import { AddPresupuestoComponent } from './components/presupuestos/add-presupuesto/add-presupuesto.component';
import { PresupuestosComponent } from './components/presupuestos/presupuestos/presupuestos.component';
import { EditPresupuestoComponent } from './components/presupuestos/edit-presupuesto/edit-presupuesto.component';
import { RegistroComponent } from './components/auth/registro/registro.component';
import { LoginComponent } from './components/auth/login/login.component';
import { UploadComponent } from './components/uploads/upload/upload.component';

//SERVICES
import { ProveedoresService } from './services/proveedores.service';
import { PresupuestosService } from './services/presupuestos.service';
import { AuthService } from './services/auth.service';
import { GuardService } from './services/guard.service';
import { LoadfileService } from './services/loadfile.service';

//MODULES
import { FacturasModule } from './modules/facturas/facturas.module';

//ROUTES
const routes:Routes = [
  { path: '', component: InicioComponent },

  { path: 'proveedores', component: ProveedoresComponent, canActivate: [GuardService] },
  { path: 'addpro', component: AddProveedorComponent, canActivate: [GuardService] },
  { path: 'editpro/:id', component: EditProveedorComponent, canActivate: [GuardService] },

  { path: 'presupuestos', component: PresupuestosComponent, canActivate: [GuardService] },
  { path: 'addpres', component: AddPresupuestoComponent, canActivate: [GuardService] },
  { path: 'editpres/:id', component: EditPresupuestoComponent, canActivate: [GuardService] },

    { path: 'contratosuploads', component: UploadComponent, canActivate: [GuardService] },

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
    EditProveedorComponent,
    AddPresupuestoComponent,
    PresupuestosComponent,
    EditPresupuestoComponent,
    RegistroComponent,
    LoginComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( routes ),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FacturasModule,
    AngularFireModule.initializeApp( enviroment ),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    ProveedoresService,
    PresupuestosService,
    AuthService,
    GuardService,
    LoadfileService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule{

}//END OF APP MODULE
