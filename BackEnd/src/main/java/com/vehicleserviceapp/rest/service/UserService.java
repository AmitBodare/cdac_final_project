package com.vehicleserviceapp.rest.service;

import java.io.Serializable;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Primary;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.vehicleserviceapp.rest.entity.Customer;
import com.vehicleserviceapp.rest.entity.User;
import com.vehicleserviceapp.rest.repository.UserServiceRepository;
@Component
@Service
@Primary
@Transactional
public class UserService   {
	@Autowired
	@Qualifier("userRepository")
private UserServiceRepository userRepo;

  @Autowired
  @Qualifier("customerService")
  private CustomerService custService;
	
	
public List<User> getAllUser() {

	List<User> getAllUsers= userRepo.findAll();
	return getAllUsers;
}

public ResponseEntity<User> getOneUser(String  emailId,String password) {

	Optional<User>userOpt= userRepo.findByEmailIdAndPassword(emailId,password);
	User foundUser= userOpt.get();
	return ResponseEntity.ok(foundUser);
}

public User createUser(User user) {

	 userRepo.save(user);
	return user;
}

public void deleteOneUser(Integer userId) {
	userRepo.deleteById(userId);
}

public ResponseEntity<User>updateOneUser(Integer userId,User userDetails)
{
	Optional<User>userOpt= userRepo.findById(userId);
	User foundUser= userOpt.get();
	
	foundUser.setEmailId(userDetails.getEmailId());
	foundUser.setPassword(userDetails.getPassword());
	foundUser.setRole(userDetails.getRole());
	
	User updateOneUser=userRepo.save(foundUser);
	return ResponseEntity.ok(updateOneUser);
}


public User getOneUser(Integer userId) {
	Optional<User> userOpt = userRepo.findById(userId);
	User foundUser = userOpt.get();
	return foundUser;
}	
	
}
