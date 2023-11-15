import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '../components/home/home.component';
import { PersonaComponent } from '../components/persona/persona.component';
import { CrearPersonaComponent } from '../components/crear-persona/crear-persona.component';
import { EditarPersonaComponent } from '../components/editar-persona/editar-persona.component';
import { LibrosComponent} from '../components/libros/libros.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonaComponent,
    CrearPersonaComponent,
    EditarPersonaComponent,
    LibrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
