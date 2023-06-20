package com.example.demo.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "team")
public class Team {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @JsonIgnore
    @OneToMany(mappedBy ="team" ,cascade = CascadeType.ALL)
    private List<Pokemon> pkList = new ArrayList<>();
    private String teamName;
    public Team() {
    }
    
    

    public Team(String teamName) {
      this.teamName = teamName;
      this.pkList = new ArrayList<>();
    }




    public String getTeamName() {
      return teamName;
    }



    public void setTeamName(String teamName) {
      this.teamName = teamName;
    }



    public Team(List<Pokemon> pkList, String teamName) {
      this.pkList = pkList;
      this.teamName = teamName;
    }



    public Long getId() {
      return id;
    }

    public void setId(Long id) {
      this.id = id;
    }



    public List<Pokemon> getPkList() {
      return this.pkList;
    }



    public void setPkList(List<Pokemon> pkList) {
      this.pkList = pkList;
    }

    
}