import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScrappingServiceService } from '../../services/scrapping-service.service';
import { ThisReceiver } from '@angular/compiler';
import { last, tap } from 'rxjs';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent{

pokeName: string ="";
pokeImage: any = '';
types: string[] = [];
teraType: string = '';
movePool: string[] = [];
abilities: string[] = [];
natures = ["Hardy", "Lonely", "Brave", "Adamant", "Naughty", "Bold", "Docile", "Relaxed", "Impish", "Lax", "Timid", "Hasty", "Serious", "Jolly", "Naive", "Modest", "Mild", "Quiet", "Bashful", "Rash", "Calm", "Gentle", "Sassy", "Careful", "Quirky"];
nature: string = '';
items: string[] =  ["Power Weight", "Power Bracer", "Power Belt", "Power Lens", "Power Band", "Power Anklet", "Miracle Seed", "Charcoal", "Mystic Water", "Silk Scarf", "Sharp Beak", "Silver Powder", "Muscle Band", "Wise Glasses", "Punching Glove", "Expert Belt", "Focus Band", "Focus Sash", "Choice Band", "Choice Specs", "Choice Scarf", "Life Orb", "Ability Shield", "Clear Amulet", "Rocky Helmet", "Eviolite", "Assault Vest", "Quick Claw", "Razor Claw", "Grip Claw", "King’s Rock", "Weakness Policy", "Blunder Policy", "Throat Spray", "Destiny Knot", "Soft Sand", "Black Glasses", "Black Belt", "Never-Melt Ice", "Twisted Spoon", "Metal Coat", "Loaded Dice", "Shell Bell", "Metronome", "Scope Lens", "Wide Lens", "Zoom Lens", "Safety Goggles", "Protective Pads", "Heavy-Duty Boots", "Covert Cloak", "Red Card", "Eject Button", "Eject Pack", "Adrenaline Orb", "Room Service", "Iron Ball", "Toxic Orb", "Flame Orb", "Lagging Tail", "Black Sludge", "Sticky Barb", "Ring Target", "Binding Band", "Magnet", "Hard Stone", "Poison Barb", "Spell Tag", "Dragon Fang", "Normal Gem", "Leftovers", "Big Root", "Bright Powder", "Light Clay", "Utility Umbrella", "Terrain Extender", "Air Balloon", "Shed Shell", "White Herb", "Mental Herb", "Power Herb", "Mirror Herb", "Absorb Bulb", "Cell Battery", "Luminous Moss", "Snowball", "Heat Rock", "Damp Rock", "Smooth Rock", "Icy Rock", "Electric Seed", "Psychic Seed", "Misty Seed", "Grassy Seed", "Amulet Coin", "Adamant Crystal", "Draco Plate", "Dread Plate", "Earth Plate", "Fish Plate", "Flame Plate", "Griseous Core", "Icicle Plate", "Insect Plate", "Iron Plate", "Lustrous Globe", "Meadow Plate", "Mind Plate", "Pixie Plate", "Sky Plate", "Splash Plate", "Spooky Plate", "Stone Plate", "Toxic Plate", "Zap Plate", "Booster Energy"];
itemChosen: string = '';
abilityChossen  : string = '';
unUsedEVs: number = 0;
hpEVs: number = 0;
attackEVs: number = 0;
defenseEVs: number = 0;
specialAttackEVs: number = 0;
specialDefenseEVs: number = 0;
speedEVs: number = 0;
usedEVs: number = 0;
move1: string = '';
move2: string = '';
move3: string = '';
move4: string = '';
teamId:number = 0;
teamsName: any = [];
teamsId: any = [];
pokemonsIDs: any = [];

popUp: boolean = false;
safeSave: boolean = false;
constructor(private route: ActivatedRoute,public data: ScrappingServiceService) { }

ngAfterViewInit(): void {
  this.teamsName = [];
  this.teamsId = [];
  this.route.params.subscribe(params => {
    this.pokeName = params['pokeName'];
    return this.getPokemonImage();
  });
  this.getTeams();

}
getPokemonImage() {
  this.types = [];
  this.abilities = [];
  this.movePool = [];
  this.pokeImage = '';
  this.data.getPokemonData(this.pokeName.toLowerCase().replace(/\s+/g, '-')).subscribe((data: any) => {
    this.pokeImage = data.sprites.front_default;
    for (let i = 0; i < data.types.length; i++) {
      this.types.push(data.types[i].type.name);
    }
    for (let i = 0; i < data.abilities.length; i++) {
      const abilityName = data.abilities[i].ability.name;
      if (!this.abilities.includes(abilityName)) {
        this.abilities.push(abilityName);
      }
    }
    for (let i = 0; i < data.moves.length; i++) {
      this.movePool.push(data.moves[i].move.name);
    }
    console.log(this.types);
  });

}

setM1(valor: any) {
  this.move1 = valor;
  console.log(this.move1);
}

setM2(valor: any) {
  this.move2 = valor;
  console.log(this.move2);
}

setM3(valor: any) {
  this.move3 = valor;
  console.log(this.move3);
}

setM4(valor: any) {
  this.move4 = valor;
  console.log(this.move4);
}
setAbility(valor: any) {
  this.abilityChossen = valor;
  console.log(this.abilityChossen);
}
setItem(valor: any) {
  this.itemChosen = valor;
  console.log(this.itemChosen);
}
setNature(valor: any) {
  this.nature = valor;
  console.log(this.nature);
}
setHP(valor: any) {
  this.hpEVs = valor;
  this.getTotalEVs();
  console.log(this.hpEVs);
}
setAttack(valor: any) {
  this.attackEVs = valor;
  this.getTotalEVs();
  console.log(this.attackEVs);
}
setDefense(valor: any) {
  this.defenseEVs = valor;
  this.getTotalEVs();
  console.log(this.defenseEVs);
}
setSpecialAttack(valor: any) {
  this.specialAttackEVs = valor;
  this.getTotalEVs();
  console.log(this.specialAttackEVs);
}
setSpecialDefense(valor: any) {
  this.specialDefenseEVs = valor;
  this.getTotalEVs();
  console.log(this.specialDefenseEVs);
}
setSpeed(valor: any) {
  this.speedEVs = valor;
  this.getTotalEVs();
  console.log(this.speedEVs);
}

getTotalEVs(){
  this.unUsedEVs = this.hpEVs+this.attackEVs+this.defenseEVs+this.specialAttackEVs+this.specialDefenseEVs+this.speedEVs;
}

savePokemon(){
  const pokemon = {
    name: this.pokeName,
    object: this.itemChosen,
    ability: this.abilityChossen,
    tera: this.teraType
  };
  this.data.createPokemonOfTeam(this.teamId, pokemon).subscribe(
    async (response) => {
      console.log('pokemon introducido en equipo:', response);
      await this.getPokemonIDs().toPromise();
      this.saveMoveSet();
      this.saveSpreads();
    },
    (error) => {
      console.error('Error al introducir pokemon en equipo:', error);
    }
  );
}
getTeams(){
this.data.getTeamsData().subscribe((data: any) => {
  for (let i = 0; i < data.length; i++) {
    this.teamsName.push(data[i].teamName);
    this.teamsId.push(data[i].id);
  }
  console.log(this.teamsName);
  console.log(this.teamsId);
}
);

}
chooseTeam(valor: any) {
  for (let i = 0; i < this.teamsName.length; i++) {
    if (this.teamsName[i] == valor) {
      this.teamId = this.teamsId[i];
    }
  }
  if (this.teamId != 0) {
    this.safeSave=true;
  }
  console.log(this.teamId);
}
openPopup(){
 this.popUp = true;
}
closePopup(){
  this.popUp = false;
}
getPokemonIDs() {
  return this.data.getPokemonMemebersOfTeamData(this.teamId).pipe(
    tap((data: any) => {
      this.pokemonsIDs = [];
      for (let i = 0; i < data.length; i++) {
        this.pokemonsIDs.push(data[i].id);
      }
    })
  );
}
saveMoveSet(){
  const moves = {
    move1:this.move1,
    move2:this.move2,
    move3:this.move3,
    move4:this.move4
  };

 this.data.setMovesOfPokemonOfTeam(this.teamId,this.pokemonsIDs[this.pokemonsIDs.length - 1],moves).subscribe(response => {
  console.log('movimientos introducidos en pokemon :', response);

});
}
saveSpreads(){
  const spreads = {
    hp:this.hpEVs,
    attack:this.attackEVs,
    defense:this.defenseEVs,
    spAttack:this.specialAttackEVs,
    spDefense:this.specialDefenseEVs,
    speed:this.speedEVs,
    nature:this.nature
  };

 this.data.setSpreadsOfPokemonOfTeam(this.teamId,this.pokemonsIDs[this.pokemonsIDs.length - 1],spreads).subscribe(response => {
  console.log('spreads introducidos en pokemon :', response);

});
}
}
