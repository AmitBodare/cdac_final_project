package com.vehicleserviceapp.rest.controller;

import java.io.Serializable;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
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
import com.vehicleserviceapp.rest.entity.User;
import com.vehicleserviceapp.rest.repository.CustomerServiceRepository;
import com.vehicleserviceapp.rest.service.CustomerService;

import org.springframework.http.converter.json.*;

@RestController
@CrossOrigin
@Component
public class CustomerController {
	@Autowired
	@Qualifier("customerService")
	private CustomerService custService;
	
	@GetMapping("/Customer-api")
	public List<Customer> getAllCustomers(){
		List<Customer> allCustomers = custService.getAllCustomers();
		return allCustomers;
	}
	
	@GetMapping("/Customer-api/{custId}")
	public Customer getOneCustomer(@PathVariable("custId") Integer CustomerId) {
		Customer foundCustomer = custService.getOneCustomer(CustomerId);
		return foundCustomer;
		
	}
	
	@PostMapping("/Customer-api")
	public Customer createNewCustomer(@Valid @RequestBody Customer customer) {
		
		Customer createdCustomer = 	custService.createCustomer(customer);
		return createdCustomer;
	}
	
	@DeleteMapping("/Customer-api/{custId}")
	public void deleteOneCustomer(@PathVariable Integer custId){
		custService.deleteOneCustomer(custId);
	}
	
	@PutMapping("/Customer-api/{custId}")
	public ResponseEntity<Customer>updateOneCustomer (@PathVariable Integer custId,@Valid @RequestBody Customer customerDetails)
	{
		return custService.updateCustomer(custId, customerDetails);
	}

	@GetMapping("/Customer-api/email/{emailId}")
	public   Customer getCustomerByEmailId(@PathVariable String emailId) {
		Customer foundCustomer = custService.getCustomerByEmailId(emailId);
		return foundCustomer;
		
	}
	
	@PostMapping("/Customer-api/getCustomer")
	public Customer getCustomerByUser(@RequestBody User user)
	{
		return custService.getCustomerByUser(user);
	}
}





