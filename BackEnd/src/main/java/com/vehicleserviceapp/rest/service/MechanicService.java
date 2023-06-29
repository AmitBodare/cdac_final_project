package com.vehicleserviceapp.rest.service;

import java.io.Serializable;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.vehicleserviceapp.rest.entity.Customer;
import com.vehicleserviceapp.rest.entity.Mechanic;
import com.vehicleserviceapp.rest.entity.User;
import com.vehicleserviceapp.rest.repository.MechanicServiceRepository;

@Component
@Service("mechanicService")
public class MechanicService  {

	@Autowired
	@Qualifier("mechanicRepository")
	private MechanicServiceRepository mechanicRepo;
	
	@Autowired
	private UserService userService;
	
	public List<Mechanic> getAllMechanics(){
		List<Mechanic> getAllMechanic = mechanicRepo.findAll();
		return getAllMechanic;
	}
	
	public Mechanic getOneMechanic(Integer mechanicId) {
		Optional<Mechanic> MechanicOpt = mechanicRepo.findById(mechanicId);
		Mechanic foundMechanic = MechanicOpt.get();
		return foundMechanic;
	}
	
	public Mechanic createMechanic(Mechanic mechanic) {
		User newUser=new User();
		newUser.setEmailId(mechanic.getEmailId());
		newUser.setPassword(mechanic.getPassword());
		newUser.setRole("mechanic");
		newUser=userService.createUser(newUser);
		mechanic.setUser(newUser);
		Mechanic createdMechanic = mechanicRepo.save(mechanic);
		return createdMechanic;
	}
	
	public void deleteOneMechanic(Integer mechanicId) {
		mechanicRepo.deleteById(mechanicId);
	}
	
	public ResponseEntity<Mechanic> updateMechanic ( Integer mechId, Mechanic mechanicDetails) {

		Optional<Mechanic> mechanicOpt=mechanicRepo.findById(mechId);
		Mechanic foundMechanic=mechanicOpt.get();
		
		foundMechanic.setFirstName(mechanicDetails.getFirstName());
		foundMechanic.setLastName(mechanicDetails.getLastName());
		foundMechanic.setEmailId(mechanicDetails.getEmailId());
		foundMechanic.setAddress(mechanicDetails.getAddress());
		foundMechanic.setMobileNo(mechanicDetails.getMobileNo());
		foundMechanic.setPassword(mechanicDetails.getPassword());
		foundMechanic.setSkills(mechanicDetails.getSkills());
		foundMechanic.setSalary(mechanicDetails.getSalary());
		
		Mechanic updateMechanic = mechanicRepo.save(foundMechanic);
		return ResponseEntity.ok(updateMechanic);
	}

	public Mechanic getMechanicByUser(User user)
	{
		return mechanicRepo.findByuser(user);
	}

	
}

