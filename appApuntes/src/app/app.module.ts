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
import { EjDirectivaNgStyleComponent } from './components/ej-directiva-ng-style/ej-directiva-ng-style.component';
import { EjDirectivaNgClassComponent } from './components/ej-directiva-ng-class/ej-directiva-ng-class.component';
import { EjDirectivaNgForComponent } from './components/ej-directiva-ng-for/ej-directiva-ng-for.component';
import { EjDirectivaNgSwitchComponent } from './components/ej-directiva-ng-switch/ej-directiva-ng-switch.component';
import { EjMiDirectiva1Component } from './components/ej-mi-directiva1/ej-mi-directiva1.component';
import { ParentComponent } from './components/data/parent/parent.component';
import { ChildComponent } from './components/data/child/child.component';
import { DateComponent } from './components/pipes/date/date.component';
import { UpperLowerComponent } from './components/pipes/upper-lower/upper-lower.component';
import { DecimalComponent } from './components/pipes/decimal/decimal.component';
import { CurrencyComponent } from './components/pipes/currency/currency.component';
import { I18nSelectComponent } from './components/pipes/i18n-select/i18n-select.component';
import { CustomPipeComponent } from './components/pipes/custom-pipe/custom-pipe.component';
import { JsonComponent } from './components/pipes/json/json.component';

//DIRECTIVES
import { MenuItemDirective } from './directives/menu-item.directive';

//PIPES
import { EuroPipe } from './pipes/euro.pipe';

//APP MODULE CLASS
@NgModule({
  declarations: [
    //COMPONENTS
    AppComponent,
    FechaActualComponent,
    CopyrightComponent,
    ViewAlumnoComponent,
    MetodoInterpolacionComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoBindingComponent,
    EjDirectivaNgIfComponent,
    EjDirectivaNgStyleComponent,
    EjDirectivaNgClassComponent,
    EjDirectivaNgForComponent,
    EjDirectivaNgSwitchComponent,
    EjMiDirectiva1Component,
    ParentComponent,
    ChildComponent,
    DateComponent,
    UpperLowerComponent,
    DecimalComponent,
    CurrencyComponent,
    I18nSelectComponent,
    CustomPipeComponent,
    JsonComponent,

    //DIRECTIVES
    MenuItemDirective,

    //PIPES
    EuroPipe
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
