package com.example.demo.entity;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
@Entity
@Table(name = "spreads")
public class Spreads {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @JsonIgnore
    @OneToOne
    @JoinColumn(name = "pokemon_id")
    private Pokemon pokemon;
    private String hp;
    private String attack;
    private String defense;
    private String spAttack;
    private String spDefense;
    private String speed;
    private String nature;
    
    public Spreads( String hp, String attack, String defense, String spAttack, String spDefense,
            String speed, String nature) {
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.spAttack = spAttack;
        this.spDefense = spDefense;
        this.speed = speed;
        this.nature = nature;
    }
    public Spreads() {
        this.hp = "";
        this.attack = "";
        this.defense = "";
        this.spAttack = "";
        this.spDefense = "";
        this.speed = "";
        this.nature = "";
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
    public String getHp() {
        return hp;
    }
    public void setHp(String hp) {
        this.hp = hp;
    }
    public String getAttack() {
        return attack;
    }
    public void setAttack(String attack) {
        this.attack = attack;
    }
    public String getDefense() {
        return defense;
    }
    public void setDefense(String defense) {
        this.defense = defense;
    }
    public String getSpAttack() {
        return spAttack;
    }
    public void setSpAttack(String spAttack) {
        this.spAttack = spAttack;
    }
    public String getSpDefense() {
        return spDefense;
    }
    public void setSpDefense(String spDefense) {
        this.spDefense = spDefense;
    }
    public String getSpeed() {
        return speed;
    }
    public void setSpeed(String speed) {
        this.speed = speed;
    }
    public String getNature() {
        return nature;
    }
    public void setNature(String nature) {
        this.nature = nature;
    }
    
}
