package com.example.demo.controllers;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.PKdRanksService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.demo.dto.PKRanksDTO;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/CompetitivePokemonVGCRegulationC")
public class ScrappingController {
@Autowired
private PKdRanksService PKdataService;
@GetMapping("Data")
public ResponseEntity<List<PKRanksDTO>> getUsageData() {
    return new ResponseEntity<List<PKRanksDTO>>(PKdataService.retrivepokemons(),HttpStatus.OK);
}


    
}
