import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LibroModel } from 'src/app/models/libros.model';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  private apiUrl = 'http://localhost:8080/libros';

  constructor(private httpClient: HttpClient) { }

  getLibros(): Observable<LibroModel[]> {
    return this.httpClient.get<LibroModel[]>(this.apiUrl + '/list');
  } 

  deleteLibro(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.delete<void>(url);
  }

  addLibro(libro: LibroModel): Observable<LibroModel> {
    return this.httpClient.post<LibroModel>(this.apiUrl + '/create' , libro);
  }
}
