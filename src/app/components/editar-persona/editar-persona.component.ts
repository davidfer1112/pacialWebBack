import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from 'src/app/services/persona/persona.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent implements OnInit {
  personaForm: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    edad: ['', Validators.required],
    direccion: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]
  });

  constructor(
    private fb: FormBuilder,
    private personaService: PersonaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const nombrePersona = params['nombre']; 
      this.cargarDatosPersona(nombrePersona);
    });
  }
  
  cargarDatosPersona(nombrePersona: string) {
    // Obtener el ID de la persona por su nombre
    this.personaService.obtenerIdPersonaPorNombre(nombrePersona).subscribe(
      (data) => {
        const idPersona = data.id_persona;
        if (idPersona) {
          this.personaService.obtenerPersonaPorId(idPersona).subscribe(
            (persona) => {
            },
            (error) => {
              console.error('Error al obtener datos de persona: ', error);
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
  }
  
  onSubmit() {
    // Obtener el ID de la persona desde el formulario
    const nombrePersona = this.personaForm.value.nombre;
    this.personaService.obtenerIdPersonaPorNombre(nombrePersona).subscribe(
      (data) => {
        const idPersona = data.id_persona;
        if (idPersona) {
          // Actualizar la persona solo si hay cambios en el formulario
          const personaActualizada = { ...this.personaForm.value, id_persona: idPersona };
          this.personaService.crearEditarPersona(personaActualizada).subscribe(
            (persona) => {
              console.log('Persona actualizada correctamente: ', persona);
              this.router.navigate(['home']);
            },
            (error) => {
              console.error('Error al actualizar persona: ', error);
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
  }
  
}
