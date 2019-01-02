//IMPORTS
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//COMPONENTS
import { AppComponent } from './app.component';
import { FechaActualComponent } from './components/fecha-actual/fecha-actual.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { ViewAlumnoComponent } from './components/view-alumno/view-alumno.component';
import { MetodoInterpolacionComponent } from './components/metodo-interpolacion/metodo-interpolacion.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { TwoBindingComponent } from './components/two-binding/two-binding.component';
import { EjDirectivaNgIfComponent } from './components/ej-directiva-ng-if/ej-directiva-ng-if.component';

//APP MODULE CLASS
@NgModule({
  declarations: [
    AppComponent,
    FechaActualComponent,
    CopyrightComponent,
    ViewAlumnoComponent,
    MetodoInterpolacionComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoBindingComponent,
    EjDirectivaNgIfComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{

}//END OF APP MODULE CLASS
