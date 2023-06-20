package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.Moves;
import com.example.demo.entity.Pokemon;
import com.example.demo.entity.Spreads;
import com.example.demo.entity.Team;
import com.example.demo.repository.PokemonRepository;
import com.example.demo.repository.TeamRepository;
import com.example.demo.repository.MovesRepository;
import com.example.demo.repository.SpreadsRepository;
import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/teambuilder")
public class PokemonController {

    private final TeamRepository teamRepository;
    private final PokemonRepository pokemonRepository;
    private final MovesRepository movesRepository;
    private final SpreadsRepository spreadsRepository;

    @Autowired
    public PokemonController(TeamRepository teamRepository, PokemonRepository pokemonRepository, MovesRepository movesRepository, SpreadsRepository spreadsRepository) {
        this.teamRepository = teamRepository;
        this.pokemonRepository = pokemonRepository;
        this.movesRepository = movesRepository;
        this.spreadsRepository = spreadsRepository;
    }
     @GetMapping("/teams")
    public ResponseEntity<List<Team>> getAllTeams() {
        List<Team> teams = teamRepository.findAll();
        if (teams.isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok().body(teams);
        }
    }

 @GetMapping("/teams/{id}")
public ResponseEntity<Team> getTeam(@PathVariable Long id) {
    Optional<Team> teamOptional = teamRepository.findById(id);
    if (teamOptional.isPresent()) {
        Team team = teamOptional.get();
        team.getPkList(); // Obtener la lista de Pokémon del equipo
        return ResponseEntity.ok().body(team);
    } else {
        return ResponseEntity.notFound().build();
    }
}
 @GetMapping("/teams/{id}/pokemon")
public ResponseEntity<List<Pokemon>> getMembers(@PathVariable Long id) {
    Optional<Team> teamOptional = teamRepository.findById(id);
    if (teamOptional.isPresent()) {
        Team team = teamOptional.get();
        team.getPkList(); // Obtener la lista de Pokémon del equipo
        return ResponseEntity.ok().body(team.getPkList());
    } else {
        return ResponseEntity.notFound().build();
    }
}
@GetMapping("/teams/{teamId}/pokemon/{pokemonId}")
public ResponseEntity<Pokemon> getPokemonFromTeam(@PathVariable Long teamId, @PathVariable Long pokemonId) {
    Optional<Team> teamOptional = teamRepository.findById(teamId);
    if (teamOptional.isPresent()) {
        Team team = teamOptional.get();
        Optional<Pokemon> pokemonOptional = team.getPkList().stream()
                .filter(pokemon -> pokemon.getId().equals(pokemonId))
                .findFirst();
        if (pokemonOptional.isPresent()) {
            Pokemon pokemon = pokemonOptional.get();
            return ResponseEntity.ok().body(pokemon);
        } else {
            return ResponseEntity.notFound().build();
        }
    } else {
        return ResponseEntity.notFound().build();
    }
}

   

     @PostMapping()
    public ResponseEntity<Team> createTeam(@RequestBody Team Team) {
        Team newTeam = teamRepository.save(Team);
        return ResponseEntity.status(HttpStatus.CREATED).body(newTeam);
    }
    @PostMapping("/teams/{teamId}/pokemon")
    public ResponseEntity<Pokemon> addPokemonToTeam(
            @PathVariable Long teamId,
            @RequestBody Pokemon pokemon
    ) {
        Team team = teamRepository.findById(teamId)
                .orElseThrow(() -> new RuntimeException("Team not found"));

        pokemon.setTeam(team);
        Pokemon savedPokemon = pokemonRepository.save(pokemon);
        team.getPkList().add(savedPokemon);
        teamRepository.save(team);

        return ResponseEntity.status(HttpStatus.CREATED).body(savedPokemon);
    }
    
    @DeleteMapping("/teams/{teamId}/pokemon/{pokemonId}")
public ResponseEntity<String> removePokemonFromTeam(@PathVariable Long teamId, @PathVariable Long pokemonId) {
    Optional<Team> optionalTeam = teamRepository.findById(teamId);
    Optional<Pokemon> optionalPokemon = pokemonRepository.findById(pokemonId);

    if (optionalTeam.isPresent() && optionalPokemon.isPresent()) {
        Team team = optionalTeam.get();
        Pokemon pokemon = optionalPokemon.get();

        if (team.getPkList().contains(pokemon)) {
            team.getPkList().remove(pokemon);
            pokemon.setTeam(null);
            teamRepository.save(team);
            pokemonRepository.save(pokemon);
            return ResponseEntity.ok("Pokemon removed from the team successfully.");
        } else {
            return ResponseEntity.badRequest().body("The given Pokemon is not part of the team.");
        }
    } else {
        return ResponseEntity.notFound().build();
    }
}
@DeleteMapping("/teams/{teamId}")
public ResponseEntity<String> deleteTeam(@PathVariable Long teamId) {
    Optional<Team> optionalTeam = teamRepository.findById(teamId);

    if (optionalTeam.isPresent()) {
        Team team = optionalTeam.get();
        teamRepository.delete(team);
        return ResponseEntity.ok("Team and its Pokemons deleted successfully.");
    } else {
        return ResponseEntity.notFound().build();
    }
}

@PostMapping("/teams/{teamId}/pokemon/{pokemonId}/moves")
public ResponseEntity<Moves> addMovesToPokemon(
        @PathVariable Long teamId,
        @PathVariable Long pokemonId,
        @RequestBody Moves moves
) {
    Optional<Team> teamOptional = teamRepository.findById(teamId);
    if (teamOptional.isPresent()) {
        Team team = teamOptional.get();
        Optional<Pokemon> pokemonOptional = team.getPkList().stream()
                .filter(pokemon -> pokemon.getId().equals(pokemonId))
                .findFirst();
        if (pokemonOptional.isPresent()) {
            Pokemon pokemon = pokemonOptional.get();
            moves.setPokemon(pokemon);
            Moves savedMoves = movesRepository.save(moves);
            pokemon.setMoves(savedMoves);
            pokemonRepository.save(pokemon);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedMoves);
        } else {
            return ResponseEntity.notFound().build();
        }
    } else {
        return ResponseEntity.notFound().build();
    }
}

@PostMapping("/teams/{teamId}/pokemon/{pokemonId}/spreads")
public ResponseEntity<Spreads> addSpreadsToPokemon(
        @PathVariable Long teamId,
        @PathVariable Long pokemonId,
        @RequestBody Spreads spreads
) {
    Optional<Team> teamOptional = teamRepository.findById(teamId);
    if (teamOptional.isPresent()) {
        Team team = teamOptional.get();
        Optional<Pokemon> pokemonOptional = team.getPkList().stream()
                .filter(pokemon -> pokemon.getId().equals(pokemonId))
                .findFirst();
        if (pokemonOptional.isPresent()) {
            Pokemon pokemon = pokemonOptional.get();
            spreads.setPokemon(pokemon);
            Spreads savedSpreads = spreadsRepository.save(spreads);
            pokemon.setSpreads(savedSpreads);
            pokemonRepository.save(pokemon);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedSpreads);
        } else {
            return ResponseEntity.notFound().build();
        }
    } else {
        return ResponseEntity.notFound().build();
    }
}
@GetMapping("/teams/{teamId}/pokemon/{pokemonId}/moves")
public ResponseEntity<Moves> getMovesFromPokemon(@PathVariable Long teamId, @PathVariable Long pokemonId) {
    Optional<Team> teamOptional = teamRepository.findById(teamId);
    if (teamOptional.isPresent()) {
        Team team = teamOptional.get();
        Optional<Pokemon> pokemonOptional = team.getPkList().stream()
                .filter(pokemon -> pokemon.getId().equals(pokemonId))
                .findFirst();
        if (pokemonOptional.isPresent()) {
            Pokemon pokemon = pokemonOptional.get();
            Moves moves = pokemon.getMoves();
            return ResponseEntity.ok().body(moves);
        } else {
            return ResponseEntity.notFound().build();
        }
    } else {
        return ResponseEntity.notFound().build();
    }
}

@GetMapping("/teams/{teamId}/pokemon/{pokemonId}/spreads")
public ResponseEntity<Spreads> getSpreadsFromPokemon(@PathVariable Long teamId, @PathVariable Long pokemonId) {
    Optional<Team> teamOptional = teamRepository.findById(teamId);
    if (teamOptional.isPresent()) {
        Team team = teamOptional.get();
        Optional<Pokemon> pokemonOptional = team.getPkList().stream()
                .filter(pokemon -> pokemon.getId().equals(pokemonId))
                .findFirst();
        if (pokemonOptional.isPresent()) {
            Pokemon pokemon = pokemonOptional.get();
            Spreads spreads = pokemon.getSpreads();
            return ResponseEntity.ok().body(spreads);
        } else {
            return ResponseEntity.notFound().build();
        }
    } else {
        return ResponseEntity.notFound().build();
    }
}
}
