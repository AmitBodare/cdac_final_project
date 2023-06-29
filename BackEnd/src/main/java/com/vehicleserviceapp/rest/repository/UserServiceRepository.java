package com.vehicleserviceapp.rest.repository;



import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.vehicleserviceapp.rest.entity.Customer;
import com.vehicleserviceapp.rest.entity.User;

@Component
@Repository("userRepository")

public interface UserServiceRepository extends JpaRepository<User, Integer> {

	Optional<User> findByEmailIdAndPassword(String emailId,String password);
	
}
