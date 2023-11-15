import { Component, Input } from '@angular/core';
import { LibroModel } from 'src/app/models/libros.model';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {
  @Input() libro: LibroModel = {
    nombre: '',
    autor: '',
  };
}


