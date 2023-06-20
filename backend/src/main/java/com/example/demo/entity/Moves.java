package com.example.demo.entity;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
@Entity
@Table(name = "moves")
public class Moves {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @JsonIgnore
    @OneToOne
    @JoinColumn(name = "pokemon_id")
    private Pokemon pokemon;
    private String move1;
    private String move2;
    private String move3;
    private String move4;
    
    
    public Moves( String move1, String move2, String move3, String move4) {
        this.move1 = move1;
        this.move2 = move2;
        this.move3 = move3;
        this.move4 = move4;
    }
    public Moves() {
      
        this.move1 = "";
        this.move2 = "";
        this.move3 = "";
        this.move4 = "";
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public Pokemon getPokemon() {
        return pokemon;
    }
    public void setPokemon(Pokemon pokemon) {
        this.pokemon = pokemon;
    }
    public String getMove1() {
        return move1;
    }
    public void setMove1(String move1) {
        this.move1 = move1;
    }
    public String getMove2() {
        return move2;
    }
    public void setMove2(String move2) {
        this.move2 = move2;
    }
    public String getMove3() {
        return move3;
    }
    public void setMove3(String move3) {
        this.move3 = move3;
    }
    public String getMove4() {
        return move4;
    }
    public void setMove4(String move4) {
        this.move4 = move4;
    }
    
}

