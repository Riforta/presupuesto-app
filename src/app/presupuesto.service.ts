import { Injectable } from '@angular/core';
import { Ingreso} from './modelos/Ingreso';
import { Egreso } from './modelos/Egreso';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {

  ingresos: Ingreso[] = [
    new Ingreso('Salario', 4000),
    new Ingreso('Venta Coche', 500)
  ];

  egresos: Egreso[] = [
    new Egreso('Renta Depto', -900),
    new Egreso('Ropa', -200)
  ];

  agregarIngreso(ingreso: Ingreso){
    this.ingresos.push(ingreso);
  }

  agregarEgreso(egreso: Egreso){
    this.egresos.push(egreso);
  }

  eliminarIngreso(ingresoEliminar: Ingreso){
    this.ingresos = this.ingresos.filter((ingreso) => ingreso != ingresoEliminar);
  };

  eliminarEgreso(egresoEliminar: Egreso){
    this.egresos = this.egresos.filter((egreso) => egreso != egresoEliminar)
  };

  calcularPorcentajeEgreso(egreso: Egreso):number {
    return Math.abs(egreso.precio) / this.calcularTotalIngresos();
  };

  calcularTotalIngresos() {
    return this.ingresos.reduce((total, ingreso) => total + ingreso.precio, 0);
  }

  calcularTotalEgresos() {
    return Math.abs(this.egresos.reduce((total, egreso) => total + egreso.precio, 0))
  }

  
}
