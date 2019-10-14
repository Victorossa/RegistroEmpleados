import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  formData: Empleado;
  readonly rootURL = "http://localhost:56143/api";


  constructor(private http: HttpClient) { }

  postEmpleado(formData: Empleado) {
   return this.http.post(this.rootURL + '/Empleado', formData);
  }
}
