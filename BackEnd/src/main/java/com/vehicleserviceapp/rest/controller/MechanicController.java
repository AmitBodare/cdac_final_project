package com.vehicleserviceapp.rest.controller;

import java.io.Serializable;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.vehicleserviceapp.rest.entity.Customer;
import com.vehicleserviceapp.rest.entity.Mechanic;
import com.vehicleserviceapp.rest.entity.User;
import com.vehicleserviceapp.rest.service.MechanicService;

import org.springframework.http.converter.json.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@Component
public class MechanicController {

	@Autowired
	@Qualifier("mechanicService")
	private MechanicService mechService;
	
	@GetMapping("/Mechanic-api/list")
	public List<Mechanic> getAllMechanics(){
		List<Mechanic> allMechanics = mechService.getAllMechanics();
		return allMechanics;
	}
	

	@PostMapping("/Mechanic-api")
	public Mechanic createNewMechanic(@Valid @RequestBody Mechanic mechanic) {
		
		Mechanic createdMechanic = 	mechService.createMechanic(mechanic);
		return createdMechanic;
	}
	
	@DeleteMapping("/Mechanic-api/{mechId}")
	public void deleteOneMechanic(@PathVariable Integer mechId){
		mechService.deleteOneMechanic(mechId);
	}
	
	@PutMapping("/Mechanic-api/{mechId}")
	public void updateOneMechanic(@PathVariable Integer mechId,@Valid @RequestBody Mechanic mechanic) {
		mechService.updateMechanic(mechId, mechanic);
	}

	
	@GetMapping("/Mechanic-api/{mechId}")
	public Mechanic getOneMechanic(@PathVariable Integer mechId) {
		Mechanic foundMechanic = mechService.getOneMechanic(mechId);
		return foundMechanic;
		
	}
	
	@PostMapping("/Mechanic-api/getMechanic")
	public Mechanic getMechanicByUser(@RequestBody User user)
	{
		return mechService.getMechanicByUser(user);
	}
}
