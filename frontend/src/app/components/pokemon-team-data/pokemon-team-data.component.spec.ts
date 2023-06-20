import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonTeamDataComponent } from './pokemon-team-data.component';

describe('PokemonTeamDataComponent', () => {
  let component: PokemonTeamDataComponent;
  let fixture: ComponentFixture<PokemonTeamDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonTeamDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonTeamDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
