import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { CrearPersonaComponent } from '../components/crear-persona/crear-persona.component';
import { EditarPersonaComponent } from '../components/editar-persona/editar-persona.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'crearPersona', component: CrearPersonaComponent },
  { path: 'editarPersona/:nombre', component: EditarPersonaComponent }, // Agregar ':nombre'
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
