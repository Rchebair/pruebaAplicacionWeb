import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { ClienteComponent } from './cliente/cliente.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { SucursalComponent } from './sucursal/sucursal.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    EmpleadoComponent,
    ClienteComponent,
    HabitacionesComponent,
    SucursalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
