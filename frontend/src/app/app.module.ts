import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { EquiposComponent } from './components/equipos/equipos.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
import { SliderComponent } from './components/slider/slider.component';
import { BigSearchComponent } from './components/big-search/big-search.component';
import { TeamPopUpComponent } from './components/team-pop-up/team-pop-up.component';
import { PokemonTeamDataComponent } from './components/pokemon-team-data/pokemon-team-data.component';
import { FilterByTeamIdPipe } from './components/equipos/filterByTeamId.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    EquiposComponent,
    PokemonComponent,
    PokemonListComponent,
    HeaderMenuComponent,
    SearchComponent,
    SliderComponent,
    BigSearchComponent,
    TeamPopUpComponent,
    PokemonTeamDataComponent,
    FilterByTeamIdPipe,




  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
