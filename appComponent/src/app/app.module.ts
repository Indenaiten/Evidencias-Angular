//IMPORTS
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//COMPONENTS
import { AppComponent } from './app.component';

//SERVICES
import { ProveedoresService } from './services/proveedores.service';
import { ProveedoresComponent } from './components/proveedores/proveedores/proveedores.component';

@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ ProveedoresService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
