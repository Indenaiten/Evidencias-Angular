//IMPORTS
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

//COMPONENTS
import { AppComponent } from './app.component';
import { ProveedoresComponent } from './components/proveedores/proveedores/proveedores.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HeaderComponent } from './components/header/header.component';
import { AddProveedorComponent } from './components/proveedores/add-proveedor/add-proveedor.component';

//SERVICES
import { ProveedoresService } from './services/proveedores.service';

//ROUTES
const routes:Routes = [
  { path: '', component: InicioComponent },
  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'addprovee', component: AddProveedorComponent },
  { path: '**', component: InicioComponent } //** SIGNIFICA CUALQUIER PÁGINA QUE NO EXISTA
];

//APP MODULE
@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent,
    HeaderComponent,
    AddProveedorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( routes ),
    FormsModule
  ],
  providers: [ ProveedoresService ],
  bootstrap: [ AppComponent ]
})
export class AppModule{

}//END OF APP MODULE
