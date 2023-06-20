import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-big-search',
  templateUrl: './big-search.component.html',
  styleUrls: ['./big-search.component.scss']
})
export class BigSearchComponent {

    busqueda: string = '';
    @Input() opciones: string[] = [];

    opcionesFiltradas: string[] = [];
    @Output() result =new EventEmitter<string>();
    constructor() {}

    ngOnInit(): void {

      console.log(this.opciones);

    }

    filtrarOpciones() {

      this.opcionesFiltradas = this.opciones.filter(opcion =>
        opcion.toLowerCase().startsWith(this.busqueda.toLowerCase())
      );
      console.log(this.opcionesFiltradas);
    }
    actualizarInput(opcion: string) {
      this.busqueda = opcion;
      this.result.emit(opcion);
      this.opcionesFiltradas = [];
    }

}
