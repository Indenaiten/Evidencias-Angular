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

//SERVICES
import { ProveedoresService } from './services/proveedores.service';
import { PresupuestosService } from './services/presupuestos.service';

//ROUTES
const routes:Routes = [
  { path: '', component: InicioComponent },
  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'addprovee', component: AddProveedorComponent },
  { path: 'presupuestos', component: PresupuestosComponent },
  { path: 'addpres', component: AddPresupuestoComponent },
  { path: 'editpres/:id', component: EditPresupuestoComponent },
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
    EditPresupuestoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( routes ),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ProveedoresService,
    PresupuestosService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule{

}//END OF APP MODULE
