import { Component, OnInit } from '@angular/core';
import { ScrappingServiceService } from '../../services/scrapping-service.service';
import { forkJoin } from 'rxjs';
import { Pokemon } from 'src/app/services/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemonRanking: any[] = [];
  pokemonImages: any[] = [];
  pokemonData: Pokemon[] = [];
  pokemonSelector:any;

  constructor(public data: ScrappingServiceService) {}

  ngOnInit(): void {
    this.loadRanking();
  }

  loadRanking(): void {
    this.data.getScrappingData().subscribe((data: any) => {
      this.pokemonRanking = data;
      console.log(data);

      const requests = this.pokemonRanking.map((pokemon: any) =>
        this.data.getPokemonData(pokemon.name.toLowerCase().replace(/\s+/g, '-'))
      );

      forkJoin(requests).subscribe((responses: any[]) => {
        this.pokemonImages = responses.map(
          (response: any) => response.sprites.front_default
        );
        console.log(this.pokemonImages);

        this.pokemonData = this.pokemonRanking.map((pokemon: any, index: number) => ({
          name: pokemon.name,
          image: this.pokemonImages[index],
          usage: pokemon.usage
        }));

        console.log(this.pokemonData);
      });
    });
  }

}

