import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit{

  empleados:Empleado[];

  constructor(private empleadoServicio:EmpleadoService, private router:Router){

  }
  ngOnInit(): void {
    this.obtenerEmpleados();

  }

  actualizarEmpleado(id:number){
    this.router.navigate(['actualizar-empleado', id])
  }

  private obtenerEmpleados(){
    this.empleadoServicio.mostrarEmpleados().subscribe(dato => {
      this.empleados = dato;
    });
  }

  eliminarEmpleado(id:number){
    this.empleadoServicio.eliminarEmpleado(id).subscribe(dato => {
      this.obtenerEmpleados();
    });
  }

  verDetallesEmpleado(id:number){
    this.router.navigate(['empleado-detalles',id]);
  }

}
