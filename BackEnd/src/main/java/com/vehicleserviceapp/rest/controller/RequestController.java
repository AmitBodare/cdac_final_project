package com.vehicleserviceapp.rest.controller;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.PersistenceContext;
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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.vehicleserviceapp.rest.entity.Customer;
import com.vehicleserviceapp.rest.entity.CustomerAndRequest;
import com.vehicleserviceapp.rest.entity.Mechanic;
import com.vehicleserviceapp.rest.entity.Request;
import com.vehicleserviceapp.rest.service.RequestService;

@RestController
@CrossOrigin
@Component
public class RequestController {
@Autowired
@Qualifier("requestService")
private RequestService requestService;
@GetMapping("/Request-api")
public  List<Request> getAllRequests(){
	List<Request> allRequests = requestService.getAllRequests();
	return allRequests;
}


@GetMapping("/Requests/allCustomers/{customerID}")
public  List<Request> getAllRequestsByCustomer(@PathVariable Integer customerID){
	return  requestService.getAllRequestBycustomer(customerID);

}






@GetMapping("/Request-api/Mechanic/{mechId}")
public  List<Request> getAllRequestsByMechanic(@PathVariable Integer mechId){
	return  requestService.getAllRequestBymechanic(mechId);

}

@GetMapping("/Request-api/{reqId}")
public  Request getOneRequest(@PathVariable("reqId") Integer requestId) {
	Request foundRequest = requestService.getOneRequest(requestId);
	return foundRequest;
	
}


@GetMapping("/Request-api/pendingrequests/{customerID}")
public  List<Request> getAllPendingRequest(@PathVariable Integer customerID) {
   List<Request> foundRequest = requestService.getAllPendingRequestBycustomer(customerID);
	return foundRequest;
	
}


@GetMapping("/Request-api/approvedrequests/customer")
public  List<Request> getAllApprovedRequest(@RequestBody Customer customer) {
   List<Request> foundRequest = requestService.getAllApprovedRequestByCustomer(customer);
	return foundRequest;
	
}


@GetMapping("/Request-api/releasedrequests/customer")
public  List<Request> getAllReleasedRequest(@RequestBody Customer customer) {
   List<Request> foundRequest = requestService.getAllReleasedRequestBycustomer(customer);
	return foundRequest;
	
}



@PersistenceContext
EntityManager entityManager;

@PostMapping("/Request-api")
public  Request createNewRequest(@Valid @RequestBody Request requests) {
	Integer id = requests.getCustomer().getCustomerID(); // obtain the primary key of the detached entity
	
	Customer customerEntity = entityManager.find(Customer.class, id);
	requests.setCustomer(customerEntity);
	Request createdRequest = 	requestService.createRequest(requests);
	return createdRequest;
}

@DeleteMapping("/Request-api/deleterequests/{reqId}")
public void deleteOneRequest(@PathVariable Integer reqId){
	requestService.deleteOneRequest(reqId);
}

@PutMapping("/Request-api/{reqId}")
public  ResponseEntity<Request> updateOneRequest(@PathVariable("reqId") Integer requestId,@Valid @RequestBody Request requestDetails)
{
	return requestService.updateOneRequest(requestId, requestDetails);
}


@PutMapping("/Request-api/updateFeedback/{reqId}")
public  ResponseEntity<Request> updateFeedbackInRequest(@PathVariable("reqId") Integer requestId,@RequestBody Request requestDetails)
{
	return requestService.updateFeedbackInRequest(requestId, requestDetails);
}



@GetMapping("/Request-api/ApprovedAndWIPRequests/{custId}")
public  List<Request> getAllApprovedAndWIPRequests(@PathVariable("custId") Integer custId) {
   List<Request> foundRequest = requestService.findByQuery(custId,"Pending");
	return foundRequest;
	
}

@GetMapping("/Request-api/pendingrequests")
public  List<Request> getAllPendingRequests() {
   List<Request> foundRequest = requestService.getAllPendingRequests();
	return foundRequest;
	
}

@GetMapping("/Request-api/customerAndRequests")
public  List<CustomerAndRequest> getAllcustomerAndRequests() {
   List<CustomerAndRequest> foundRequest = requestService.findByCustomerAndRequest();
	return foundRequest;
	
}

@GetMapping("/Request-api/requestsExceptPending")
public  List<CustomerAndRequest> findByRequestStatus() {
   List<CustomerAndRequest> foundRequest = requestService.findByCustomerAndRequest();
	return foundRequest;
	
}


@GetMapping("/Request-api/requestByVehicleNo/{vehicleNo}")
public List<Request> getRequestByVehicleNo(@PathVariable String vehicleNo)
{
	return requestService.getRequestByVehicleNo(vehicleNo);
}






}
