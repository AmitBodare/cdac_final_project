package com.vehicleserviceapp.rest.repository;





import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.vehicleserviceapp.rest.entity.Customer;
import com.vehicleserviceapp.rest.entity.Mechanic;
import com.vehicleserviceapp.rest.entity.Request;
import com.vehicleserviceapp.rest.entity.User;

@Component
@Repository("requestRepository")
public interface RequestServiceRepository extends JpaRepository<Request, Integer> {

	List<Request> findByCustomer(Customer customer);
	
	List<Request> findByCustomerAndStatus(Customer customer,String status);
	List<Request> findByMechanic(Mechanic mechanic);
	
	
	List<Request> findByStatus(String status);
	List<Request> findByVehicleNo(String vehicleNo);
	
	void deleteByCustomer(Customer customer);
	

}

