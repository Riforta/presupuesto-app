import { Component } from '@angular/core';
import { Ingreso } from '../modelos/Ingreso';
import { PresupuestoService } from '../presupuesto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ingresos',
  imports: [CommonModule],
  templateUrl: './ingresos.component.html',
  styleUrl: './ingresos.component.css'
})
export class IngresosComponent {

  ingresos: Ingreso[] = [];

  constructor(private presupuestoService: PresupuestoService){}

  eliminarIngreso(ingreso: Ingreso){
    this.presupuestoService.eliminarIngreso(ingreso);
    this.ingresos = this.presupuestoService.ingresos;
  }

  ngOnInit(){
    this.ingresos = this.presupuestoService.ingresos;
  }

}
