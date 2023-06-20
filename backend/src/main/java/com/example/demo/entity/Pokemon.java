package com.example.demo.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "pokemon")
public class Pokemon {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String ability;
    private String object;
    private String tera;
    @JsonIgnore
    @OneToOne(mappedBy ="pokemon" ,cascade = CascadeType.ALL)
    private Spreads spreads;
    @JsonIgnore
    @OneToOne(mappedBy ="pokemon",cascade = CascadeType.ALL)
    private Moves moves;
    @ManyToOne()
    @JoinColumn(name = "team_id")
    private Team team;
    
    public Pokemon(String name, Team team) {
      this.name = name;
      this.moves = new Moves();
      this.spreads = new Spreads();
      this.ability = "";
      this.object = "";
      this.tera = "Normal";
      this.team = team;
    }
     public Pokemon(String name) {
      this.name = name;
      this.moves = new Moves();
      this.spreads = new Spreads();
      this.ability = "";
      this.object = "";
      this.tera = "Normal";
    }

    public Pokemon(String name, String ability, String object, String tera, Team team) {
      this.name = name;
       this.moves = new Moves();
      this.spreads = new Spreads();
      this.ability = ability;
      this.object = object;
      this.tera = tera;
      this.team = team;
    }
    public Spreads getSpreads() {
      return spreads;
    }

    public void setSpreads(Spreads spreads) {
      this.spreads = spreads;
    }

    public Moves getMoves() {
      return moves;
    }

    public void setMoves(Moves moves) {
      this.moves = moves;
    }

    public String getAbility() {
      return ability;
    }
    public Pokemon() {
    }
    public Long getId() {
      return id;
    }
    public void setId(Long id) {
      this.id = id;
    }
    public String getName() {
      return name;
    }
    public void setName(String name) {
      this.name = name;
    }
    public void setAbility(String ability) {
      this.ability = ability;
    }
    public String getObject() {
      return object;
    }
    public void setObject(String object) {
      this.object = object;
    }
   
    public Team getTeam() {
      return team;
    }
    public void setTeam(Team team) {
      this.team = team;
    }

    public String getTera() {
      return tera;
    }

    public void setTera(String tera) {
      this.tera = tera;
    }


}