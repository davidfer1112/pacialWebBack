import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from 'src/app/services/persona/persona.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css']
})
export class CrearPersonaComponent {
  formularioPersona: FormGroup;

  constructor(private fb: FormBuilder, private personaService: PersonaService, private router: Router) {
    this.formularioPersona = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required],
      direccion: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.formularioPersona.valid) {
      const nuevaPersona = this.formularioPersona.value;
      this.personaService.crearEditarPersona(nuevaPersona).subscribe(
        (personaCreada) => {
          console.log('Persona creada:');

          this.router.navigate(['/home']); 
        },
        (error) => {
          console.error('Error al crear persona:', error);

        }
      );
    }
  }
  
}
