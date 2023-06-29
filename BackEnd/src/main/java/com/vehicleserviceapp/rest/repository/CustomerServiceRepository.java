package com.vehicleserviceapp.rest.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;

import com.vehicleserviceapp.rest.entity.Customer;
import com.vehicleserviceapp.rest.entity.User;

@Component
@Repository("customerRepository")
public interface CustomerServiceRepository extends JpaRepository<Customer, Integer> {

	Customer findByEmailId(@PathVariable String emailId);
	
	Customer findByuser(User user);

	  


	
}









