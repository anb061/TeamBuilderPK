import { Component, OnInit } from '@angular/core';
import { ScrappingServiceService } from '../../services/scrapping-service.service';

interface TeamMember {
  id: number;
  teamId: number;
  name: string;
  image: string;
  ability: string;
  object: string;
  tera: string;
  move1: string;
  move2: string;
  move3: string;
  move4: string;
  nature: string;
  hp : string;
  attack: string;
  defense: string;
  specialAttack: string;
  specialDefense: string;
  speed: string;
}

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.scss']
})
export class EquiposComponent implements OnInit {
  teamName: string = '';
  teams: any[] = [];
  teamID: number = 0;
  pokemonID: number = 0;
  teamMembers: TeamMember[] = [];

  constructor(public data: ScrappingServiceService) {}

  ngOnInit(): void {
    this.getTeams();
  }

  createTeam() {
    const team = {
      teamName: this.teamName
    };
    this.data.createTeam(team).subscribe(
      response => {
        console.log('Team added:', response);
        this.getTeams();
      },
      error => {
        console.error('error team added:', error);
      }
    );
  }

  getTeams() {
    this.teams = [];
    this.data.getTeamsData().subscribe((data: any) => {
      this.teams = data;
      console.log(data);
      this.loadTeamMembers();
    });
  }

  loadTeamMembers() {
    this.teamMembers = [];
    this.teams.forEach(team => {
      this.getMembersOfTeam(team.id);
    });
  }

  getMembersOfTeam(teamId: number): void {
    this.data.getPokemonMemebersOfTeamData(teamId).subscribe((data: any) => {
      const members: TeamMember[] = data.map((pokemon: any) => {
        return {
          id: pokemon.id,
          teamId: teamId,
          name: pokemon.name,
          image: '',
          ability: '',
          object: '',
          tera: ''
        };
      });
      this.teamMembers = this.teamMembers.concat(members);
      console.log(data);
      this.getImage(members);
    });
  }

  getImage(members: TeamMember[]) {
    members.forEach((member, index) => {
      this.data.getPokemonData(member.name.toLowerCase().replace(/\s+/g, '-')).subscribe((data: any) => {
        member.image = data.sprites.front_default;
        console.log(this.teamMembers);
        this.getPokemonDetails(member);
      });
    });
  }

  getPokemonDetails(member: TeamMember) {
    this.data.getPokemonOfTeamData(member.teamId, member.id).subscribe((data: any) => {
      member.ability = data.ability;
      member.object = data.object;
      member.tera = data.tera;
      this.getSpreadsOfPokemon(member);
      this.getMovesOfPokemon(member);
    });
  }

  deleteTeam(teamId: number) {
    this.data.deleteTeam(teamId).subscribe(
      response => {
        console.log('Team deleted:', response);
        this.getTeams();
      },
      error => {
        console.error('Error deleting team:', error);
      }
    );

  }

  deletePokemon(teamId: number, pokemonId: number) {
    this.data.deletePokemonOfTeam(teamId, pokemonId).subscribe(
      response => {
        console.log('Pokemon deleted:', response);
        this.loadTeamMembers();
      },
      error => {
        console.error('Error deleting pokemon:', error);
      }
    );

  }
  getSpreadsOfPokemon(member: TeamMember) {
    this.data.getSpreadsOfPokemonOfTeam(member.teamId, member.id).subscribe((data: any) => {
      member.hp = data.hp? data.hp : '0';
      member.attack = data.attack? data.attack : '0';
      member.defense = data.defense? data.defense : '0';
      member.specialAttack = data.spAttack? data.spAttack : '0';
      member.specialDefense = data.spDefense? data.spDefense : '0';
      member.speed = data.speed? data.speed : '0' ;
      member.nature = data.nature;
    });
  }

  getMovesOfPokemon(member: TeamMember) {
    this.data.getMovesOfPokemonOfTeam(member.teamId, member.id).subscribe((data: any) => {
      member.move1 = data.move1;
      member.move2 = data.move2;
      member.move3 = data.move3;
      member.move4 = data.move4;
    });
  }
}
