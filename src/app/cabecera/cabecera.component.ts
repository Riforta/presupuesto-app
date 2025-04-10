import { Component } from '@angular/core';
import { PresupuestoService } from '../presupuesto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cabecera',
  imports: [CommonModule],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css'
})
export class CabeceraComponent {

  constructor(private presupuestoServicio: PresupuestoService){}

  calcularPorcentaje():number {
    return this.presupuestoServicio.calcularTotalEgresos() / this.presupuestoServicio.calcularTotalIngresos() ;
  }

  calcularTotalIngreso():number{
    return this.presupuestoServicio.calcularTotalIngresos();
  }

  calcularTotalEgresos():number{
    return this.presupuestoServicio.calcularTotalEgresos();
  }

  calcularPresupuestoDisponible():number {
    return this.presupuestoServicio.calcularTotalIngresos() - this.presupuestoServicio.calcularTotalEgresos();
  }
 
}
