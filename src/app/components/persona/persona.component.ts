import { Component, Input } from '@angular/core';
import { PersonaModel } from 'src/app/models/persona.model';
import { PersonaService } from 'src/app/services/persona/persona.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
  @Input() persona: PersonaModel;

  constructor(private personaService: PersonaService, private router: Router) {
    this.persona = {} as PersonaModel;
  }

  irAEditarPersona() {
    this.router.navigate(['editarPersona', this.persona.nombre]);
  }

  eliminarPersona() {
    if (this.persona.nombre) {
      this.personaService.obtenerIdPersonaPorNombre(this.persona.nombre).subscribe(
        (data) => {
          const idPersona = data.id_persona;
          if (idPersona) {
            this.personaService.eliminarPersonaPorId(idPersona).subscribe(
              () => {
                console.log('Persona eliminada correctamente.');
                // Recargar la página después de eliminar la persona
                location.reload();
              },
              (error) => {
                console.error('Error al eliminar persona: ', error);
              }
            );
          } else {
            console.error('No se pudo obtener un ID válido para la persona.');
          }
        },
        (error) => {
          console.error('Error al obtener ID de persona: ', error);
        }
      );
    } else {
      console.error('La persona no tiene un nombre válido.');
    }
  }
}
