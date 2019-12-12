import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { SucursalComponent } from './sucursal/sucursal.component';

const routes: Routes = [
  { path: '', component: PanelComponent, pathMatch: 'full'},
  { path: 'cliente', component: ClienteComponent},
  { path: 'empleado', component: EmpleadoComponent},
  { path: 'habitaciones', component: HabitacionesComponent},
  { path: 'sucursal', component: SucursalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
