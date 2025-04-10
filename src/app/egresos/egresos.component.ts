import { Component } from '@angular/core';
import { Egreso } from '../modelos/Egreso';
import { PresupuestoService } from '../presupuesto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-egresos',
  imports: [CommonModule],
  templateUrl: './egresos.component.html',
  styleUrl: './egresos.component.css'
})
export class EgresosComponent {

  egresos: Egreso[] = [];
  porcentajeEgreso!: number;

  constructor(private presupuestoService: PresupuestoService){}

  calcularPorcentajeEgreso(egreso: Egreso):number {
    return this.presupuestoService.calcularPorcentajeEgreso(egreso);
  }

  eliminarEgreso(egreso: Egreso) {
    this.presupuestoService.eliminarEgreso(egreso);
    this.egresos = this.presupuestoService.egresos;
  }

  ngOnInit(){
    this.egresos = this.presupuestoService.egresos;
  }

}
