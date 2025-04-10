import { Component } from '@angular/core';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FormularioComponent } from './formulario/formulario.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { EgresosComponent } from './egresos/egresos.component';

@Component({
  selector: 'app-root',
  imports: [CabeceraComponent, FormularioComponent, IngresosComponent, EgresosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-presupuesto';
}
