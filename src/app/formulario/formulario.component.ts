import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PresupuestoService } from '../presupuesto.service';
import { Ingreso } from '../modelos/Ingreso';
import { Egreso } from '../modelos/Egreso';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  descripcion!: string;
  precio!: number;
  tipo: string = 'ingreso';

  constructor(private presupuestoService: PresupuestoService) { }

  agregar() {
    if (this.tipo === 'ingreso') {
      const nuevoIngreso = new Ingreso(this.descripcion, this.precio);
      this.presupuestoService.agregarIngreso(nuevoIngreso);
    } else {
      if(this.precio > 0) {
      const nuevoEgreso = new Egreso(this.descripcion, (this.precio * -1));
      this.presupuestoService.agregarEgreso(nuevoEgreso);
      } else {
        console.log('Error. Ingrese un valor positivo.')
      }
    }

  }
}
