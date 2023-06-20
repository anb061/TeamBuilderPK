package com.example.demo.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Component;

import com.example.demo.dto.PKRanksDTO;



  @Component("PKdataService")
  public class PKdRanksService {
    public List<PKRanksDTO> retrivepokemons() {
      List<PKRanksDTO> pokemons = new ArrayList<PKRanksDTO>();
      try{
         Document webPage = Jsoup.connect("https://www.pikalytics.com/pokedex/gen9vgc2023regc").get();
            Elements names = webPage.getElementsByClass("pokemon-name");
            Elements usages = webPage.getElementsByClass("float-right margin-right-20");
           
            for (int i = 0; i < names.size(); i++) {
                pokemons.add(i, new PKRanksDTO(names.get(i).text(), usages.get(i).text()));
                System.out.println("Pokemon "+ (i+1) +" "+ pokemons.get(i).name +" "+ pokemons.get(i).usage);
            }     

            return pokemons;
      }catch (IOException e) {
      e.printStackTrace();
      }










      return null;
    }
  }
