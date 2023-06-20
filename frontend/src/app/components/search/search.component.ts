import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
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
  firstfilter(){
  if(this.busqueda== ''){
    this.opcionesFiltradas= this.opciones;
  }
  console.log(this.busqueda);
  }

}
