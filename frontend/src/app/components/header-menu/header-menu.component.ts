import { Component, OnInit } from '@angular/core';
import { ScrappingServiceService } from 'src/app/services/scrapping-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {
pokemon : string = '';
pkSearch : string[] = [];
  constructor(public data: ScrappingServiceService,public router :Router) { }
  ngOnInit(): void {
    this.getPokemon();
  }
  getPokemon() {
    this.data.getAllPokemon().subscribe((data: any) => {
      for (let i = 0; i < data.results.length; i++) {
        this.pkSearch.push(data.results[i].name);
      }
      console.log(this.pkSearch);
    });
  }
  setPokemon(valor: any) {
  this.pokemon = valor;
  console.log(this.pokemon);
  }
  cargarPK() {
          this.router.navigate(['/pokemon/'+ this.pokemon]); // Reemplaza '/ruta-destino' con la ruta a la que deseas redirigir
  }
}
