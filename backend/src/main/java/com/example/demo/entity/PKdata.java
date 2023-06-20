package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class PKdata {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;

    @Column(columnDefinition = "TEXT")
    private String name;
    @ElementCollection
    private String[] moves;

    @Column
    private String[] abilities=new String[3];
    private String[] objects;
    private String[] Spreads;
    private String[] teammates;
    private String urlImagen;
    public PKdata() {
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
    public String[] getMoves() {
      return moves;
    }
    public void setMoves(String[] moves) {
      this.moves = moves;
    }
    public String[] getAbilities() {
      return abilities;
    }
    public void setAbilities(String[] abilities) {
      this.abilities = abilities;
    }
    public String[] getObjects() {
      return objects;
    }
    public void setObjects(String[] objects) {
      this.objects = objects;
    }
    public String[] getSpreads() {
      return Spreads;
    }
    public void setSpreads(String[] spreads) {
      Spreads = spreads;
    }
    public String[] getTeammates() {
      return teammates;
    }
    public void setTeammates(String[] teammates) {
      this.teammates = teammates;
    }
    public String getUrlImagen() {
      return urlImagen;
    }
    public void setUrlImagen(String urlImagen) {
      this.urlImagen = urlImagen;
    }
    public PKdata( String name, String[] moves, String[] abilities,
        String[] objects, String[] spreads, String[] teammates, String urlImagen) {
      this.name = name;
      this.moves = moves;
      this.abilities = abilities;
      this.objects = objects;
      Spreads = spreads;
      this.teammates = teammates;
      this.urlImagen = urlImagen;
    }


}
