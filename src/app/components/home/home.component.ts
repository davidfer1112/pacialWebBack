import { Component, OnInit } from '@angular/core';
import { LibrosService } from 'src/app/services/libros/libros.service';  // Importa el servicio de libros
import { LibroModel } from 'src/app/models/libros.model';  // Importa el modelo de libros
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  libros: LibroModel[] = [];  // Cambia el nombre de la variable a "libros"

  constructor(private librosService: LibrosService, private router: Router) {}

  ngOnInit() {
    this.obtenerLibros();  
  }

  obtenerLibros() {
    this.librosService.getLibros().subscribe(  // Cambia el método a getLibros
      (data) => {
        this.libros = data;
      },
      (error) => {
        console.error('Error obteniendo libros: ', error);
      }
    );
  }


}
