package com.vehicleserviceapp.rest.service;

import java.io.Serializable;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.vehicleserviceapp.rest.entity.Customer;
import com.vehicleserviceapp.rest.entity.User;
import com.vehicleserviceapp.rest.repository.CustomerServiceRepository;

@Component
@Service("customerService")
@Transactional
public class CustomerService{
	@Autowired
	@Qualifier("customerRepository")
	private CustomerServiceRepository customerRepo;
	
	@Autowired
	
	private RequestService requestService;
	
	@Autowired
	private UserService userService;
	
	
	public List<Customer> getAllCustomers(){
		List<Customer> getAllCustomers = customerRepo.findAll();
		return getAllCustomers;
	}
	
	public Customer getOneCustomer(Integer customerId) {
		Optional<Customer> customerOpt = customerRepo.findById(customerId);
		Customer foundCustomer = customerOpt.get();
		return foundCustomer;
	}
	
	
	
	public Customer createCustomer(Customer customer) {
		User newUser=new User();
		newUser.setEmailId(customer.getEmailId());
		newUser.setPassword(customer.getPassword());
		newUser.setRole("customer");
		newUser=userService.createUser(newUser);
		customer.setUser(newUser);
		Customer createdCustomer = customerRepo.save(customer);
		
		return createdCustomer;
	}
	
	
	
	public void deleteOneCustomer(Integer custId) {
	
		Customer customer=getOneCustomer(custId);
		requestService.deleteOneRequestByCustomer(customer);
		customerRepo.deleteById(custId);
		
	}
	
	public ResponseEntity<Customer>updateCustomer ( Integer custId, Customer customerDetails) {
		
		
		Optional<Customer> customerOpt=customerRepo.findById(custId);
		Customer foundCustomer=customerOpt.get();
		
		foundCustomer.setFirstName(customerDetails.getFirstName());
		foundCustomer.setLastName(customerDetails.getLastName());
		foundCustomer.setEmailId(customerDetails.getEmailId());
		foundCustomer.setAddress(customerDetails.getAddress());
		foundCustomer.setMobileNo(customerDetails.getMobileNo());
		foundCustomer.setPassword(customerDetails.getPassword());
		
		Customer updateCustomer = customerRepo.save(foundCustomer);
		return ResponseEntity.ok(updateCustomer);
	}


	public Customer getCustomerByEmailId(String emailId) {
		Customer customerOpt = customerRepo.findByEmailId(emailId);
		
		return customerOpt;
	}
	
	public Customer getCustomerByUser(User user)
	{
		return customerRepo.findByuser(user);
	}
	
}

	







