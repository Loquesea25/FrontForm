import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../empleado.service';
import { Empleado } from '../empleado';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actualizar-empleado',
  templateUrl: './actualizar-empleado.component.html',
  styleUrls: ['./actualizar-empleado.component.css']
})
export class ActualizarEmpleadoComponent implements OnInit{


  id: number;
  empleado:Empleado = new Empleado();
  constructor(private empleadoService:EmpleadoService, private router:Router, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empleadoService.buscarEmpleadoPorId(this.id).subscribe(dato =>{
      this.empleado = dato;
    }, error => console.log(error));
  }


  irAListaEmpleados(){
    this.router.navigate(['/empleados']);
    swal('Empleado actualizado', 'El empleado' + this.empleado.nombre + 'ha sido actualizado')
  }

  onSubmit(){
    this.empleadoService.actualizarEmpleado(this.id, this.empleado).subscribe(dato =>{
      this.irAListaEmpleados();
    }, error => console.log(error))
  }






}
function swal(arg0: string, arg1: string) {
  throw new Error('Function not implemented.');
}

