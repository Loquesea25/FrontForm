import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private API_URL_GET_ALL= "http://localhost:8080/api/v1/empleado/mostrarEmpleados";
  private API_URL_POST= "http://localhost:8080/api/v1/empleado/crearEmpleado";
  private API_URL_PUT= "http://localhost:8080/api/v1/empleado/modificarEmpleado/";
  private API_URL_DELETE = "http://localhost:8080/api/v1/empleado/eliminarEmpleadoPorId/"
  private API_URL_GET_BY_ID= "http://localhost:8080/api/v1/empleado/buscarEmpleadoPorId/";



  constructor(private httpClient : HttpClient) { }

  mostrarEmpleados():Observable<Empleado[]>{
    return this.httpClient.get<Empleado[]>(this.API_URL_GET_ALL);
  }

  crearEmpleado(empleado:Empleado):Observable<Object>{
    return this.httpClient.post(this.API_URL_POST, empleado);
  }

  actualizarEmpleado(id:number, empleado:Empleado) : Observable<Object>{
    return this.httpClient.put(this.API_URL_PUT +id, empleado);
  }

  eliminarEmpleado(id:number) : Observable<Object>{
    return this.httpClient.delete(this.API_URL_DELETE + id);
  }

  buscarEmpleadoPorId(id:number):Observable<Empleado>{
    return this.httpClient.get<Empleado>(this.API_URL_GET_BY_ID + id);
  }

}
