package com.vehicleserviceapp.rest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.vehicleserviceapp.rest.entity.Customer;
import com.vehicleserviceapp.rest.entity.Mechanic;
import com.vehicleserviceapp.rest.entity.User;
@Component
@Repository("mechanicRepository")
public interface MechanicServiceRepository extends JpaRepository<Mechanic, Integer> {

	Mechanic findByuser(User user);
}
