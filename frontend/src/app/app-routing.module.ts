import { NgModule } from '@angular/core';
import { PrincipalComponent } from './components/principal/principal.component';
import { EquiposComponent } from './components/equipos/equipos.component';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: '', redirectTo: 'principal', pathMatch: 'full' },
  { path: 'principal', component: PrincipalComponent },
  { path: 'pokemon/:pokeName', component: PokemonComponent },
  { path: 'search', component: SearchComponent },
  { path: 'equipos', component: EquiposComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
