import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FacturasComponent } from './facturas/facturas/facturas.component';
import { AddfraComponent } from './facturas/addfra/addfra.component';
import { EditfraComponent } from './facturas/editfra/editfra.component';
import { FacturasService } from './facturas.service';

const routes: Routes = [
  { path: 'facturas', component: FacturasComponent },
  { path: 'addfra', component: AddfraComponent },
  { path: 'editfra/:id', component: EditfraComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpModule,
  ],
  declarations: [FacturasComponent, AddfraComponent, EditfraComponent],
  providers: [FacturasService]
})
export class FacturasModule { }
