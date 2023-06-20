import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ScrappingServiceService {
  private apiBaseUrl = 'https://pokeapi.co/api/v2';
  private urlBase = 'http://localhost:8081/api';
  constructor(private http:HttpClient) { }
  getScrappingData(){
    const url = `${this.urlBase}/CompetitivePokemonVGCRegulationC/Data`;
    return this.http.get(url);
  }
  getPokemonData(pokemonName:string){
    const url = `${this.apiBaseUrl}/pokemon/${pokemonName}`;
    return this.http.get(url);
  }
  getAllPokemon(){
    const url = `${this.apiBaseUrl}/pokemon?limit=2000`;
    return this.http.get(url);
  }

  getTeamsData(){
    const url = `${this.urlBase}/teambuilder/teams`;
    return this.http.get(url);
  }
  getTeamData(teamId:number){
    const url = `${this.urlBase}/teambuilder/teams/${teamId}`;
    return this.http.get(url);
  }
  getPokemonOfTeamData(teamId:number,pokemonId:number){
    const url = `${this.urlBase}/teambuilder/teams/${teamId}/pokemon/${pokemonId}`;
    return this.http.get(url);
  }
  getPokemonMemebersOfTeamData(teamId:number){
    const url = `${this.urlBase}/teambuilder/teams/${teamId}/pokemon`;
    return this.http.get(url);
  }
  createTeam(team:any){
    const url = `${this.urlBase}/teambuilder`;
    return this.http.post(url,team);
  }
  createPokemonOfTeam(teamId:number,pokemon:any){
    const url = `${this.urlBase}/teambuilder/teams/${teamId}/pokemon`;
    return this.http.post(url,pokemon);
  }
  setMovesOfPokemonOfTeam(teamId:number,pokemonId:number,moves:any){
  const url = `${this.urlBase}/teambuilder/teams/${teamId}/pokemon/${pokemonId}/moves`;
  return this.http.post(url,moves);
  }
  setSpreadsOfPokemonOfTeam(teamId:number,pokemonId:number,spreads:any){
  const url = `${this.urlBase}/teambuilder/teams/${teamId}/pokemon/${pokemonId}/spreads`;
  return this.http.post(url,spreads);
  }
  getMovesOfPokemonOfTeam(teamId:number,pokemonId:number){
    const url = `${this.urlBase}/teambuilder/teams/${teamId}/pokemon/${pokemonId}/moves`;
    return this.http.get(url);
  }
  getSpreadsOfPokemonOfTeam(teamId:number,pokemonId:number){
    const url = `${this.urlBase}/teambuilder/teams/${teamId}/pokemon/${pokemonId}/spreads`;
    return this.http.get(url);
  }
  deletePokemonOfTeam(teamId:number,pokemonId:number){
    const url = `${this.urlBase}/teambuilder/teams/${teamId}/pokemon/${pokemonId}`;
    return this.http.delete(url);
  }
  deleteTeam(teamId:number){
    const url = `${this.urlBase}/teambuilder/teams/${teamId}`;
    return this.http.delete(url);
  }
}
