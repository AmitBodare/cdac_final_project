 package com.vehicleserviceapp.rest.controller;

import java.io.Serializable;
import java.util.List;
import org.springframework.http.converter.json.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Primary;
import org.springframework.http.ResponseEntity;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.vehicleserviceapp.rest.entity.Customer;
import com.vehicleserviceapp.rest.entity.LoginModel;
import com.vehicleserviceapp.rest.entity.User;
import com.vehicleserviceapp.rest.service.CustomerService;
import com.vehicleserviceapp.rest.service.UserService;

@RestController
@CrossOrigin
@Component
public class UserController {
@Autowired
@Qualifier("userService")

  private UserService userService;



@Autowired
@Qualifier("customerService")
private CustomerService custService;

@GetMapping("/users")
public  List<User> getAllUsers(){
	List<User> allUsers = userService.getAllUser();
	return allUsers;
}

@GetMapping("/users/{userId}]")
public  User getOneUser(@PathVariable Integer userId){
	User foundUser = userService.getOneUser(userId);
	return foundUser;
}


@PostMapping("/login")
public  ResponseEntity<User> getUserByEmailIdAndPassword(@RequestBody LoginModel loginModel) {
	System.out.println(loginModel);
	
	return userService.getOneUser(loginModel.getEmail(),loginModel.getPassword());
}




@PostMapping("/user-api")
public  User createNewUser(@RequestBody User user) {
	return userService.createUser(user);
}


@DeleteMapping("/user-api/{userId}")
public void deleteOneUser(@PathVariable Integer userId){
	userService.deleteOneUser(userId);
}

@PutMapping("/user-api/{userId}")
public  ResponseEntity<User>updateOneUser(@PathVariable Integer userId,@RequestBody User userDetails)
{
	return userService.updateOneUser(userId, userDetails);
}


}
