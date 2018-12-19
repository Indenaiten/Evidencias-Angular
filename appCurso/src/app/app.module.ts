//IMPORTS
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//COMPONENTS
import { AppComponent } from './app.component';
import { FechaActualComponent } from './components/fecha-actual/fecha-actual.component';

//APP MODULE CLASS
@NgModule({
  declarations: [
    AppComponent,
    FechaActualComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{

}//END OF APP MODULE CLASS
