import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonaModel } from 'src/app/models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private url = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  obtenerPersonas(): Observable<PersonaModel[]> {
    return this.http.get<PersonaModel[]>(this.url + 'persona/listar');
  }

  // En PersonaService
  obtenerPersonaPorId(idPersona: number): Observable<PersonaModel> {
    const url = `${this.url}persona/${idPersona}`;
    return this.http.get<PersonaModel>(url);
  }


  obtenerIdPersonaPorNombre(nombre: string): Observable<{ id_persona: number }> {
    const url = `${this.url}persona/buscarid/${nombre}`;
    return this.http.get<{ id_persona: number }>(url);
  }

  eliminarPersonaPorId(idPersona: number): Observable<any> {
    const url = `${this.url}persona/${idPersona}`;
    return this.http.delete(url);
  }

  crearEditarPersona(persona: PersonaModel): Observable<PersonaModel> {
    const url = `${this.url}persona`;
    return this.http.post<PersonaModel>(url, persona);
  }
  
  
}
