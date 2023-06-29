package com.vehicleserviceapp.rest.service;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;

import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.vehicleserviceapp.rest.entity.Customer;
import com.vehicleserviceapp.rest.entity.CustomerAndRequest;
import com.vehicleserviceapp.rest.entity.Mechanic;
import com.vehicleserviceapp.rest.entity.Request;
import com.vehicleserviceapp.rest.repository.CustomerServiceRepository;
import com.vehicleserviceapp.rest.repository.MechanicServiceRepository;
import com.vehicleserviceapp.rest.repository.RequestServiceRepository;






@Service
@Transactional
public class RequestService {
	@Autowired
	private RequestServiceRepository requestRepo;
	
	@Autowired
	@Qualifier("customerService")
	private CustomerService custService;
	

	@Autowired
	@Qualifier("customerRepository")
		private CustomerServiceRepository customerRepo;
	
	
	@Autowired
	@Qualifier("mechanicService")
	private MechanicService mechService;
	
	
	

  
	
	public List<Request> getAllRequests(){
		List<Request> getAllRequests = requestRepo.findAll();
		return getAllRequests;
	}
	
	public Request getOneRequest(Integer requestId) {
		Optional<Request> requestOpt = requestRepo.findById(requestId);
		Request foundRequest = requestOpt.get();
		return foundRequest;
	}
	
	
	public  List<Request> getAllRequestBycustomer(Integer customerID) {
		Customer customer=custService.getOneCustomer(customerID);
		return requestRepo.findByCustomer(customer);

	}
	
	
	
	public  List<Request> getAllRequestBymechanic(Integer mechId) {
		Mechanic mechanic=mechService.getOneMechanic(mechId);
		return requestRepo.findByMechanic(mechanic);

	}
	
	public  List<Request> getAllPendingRequestBycustomer(Integer customerID) {
		Customer customer=custService.getOneCustomer(customerID);
		return requestRepo.findByCustomerAndStatus(customer,"Pending");

	}
	
	public  List<Request> getAllPendingRequests() {
		
			return requestRepo.findByStatus("Pending");

		}
	
	
	
	
	public  List<Request> getAllApprovedRequestByCustomer(Customer customer) {
	
		return requestRepo.findByCustomerAndStatus(customer,"approved");

	}
	
	
	
	public  List<Request> getAllReleasedRequestBycustomer(Customer customer) {
	
		return requestRepo.findByCustomerAndStatus(customer,"released");

	}

	
	public Request createRequest(Request request) {
		Request createdRequest = requestRepo.save(request);
		return createdRequest;
	}
	
	public void deleteOneRequest(Integer requestId) {
		requestRepo.deleteById(requestId);
		
	}
	
	public void deleteOneRequestByCustomer(Customer customer) {
		requestRepo.deleteByCustomer(customer);
		
	}
	
	public List<Request> getRequestByVehicleNo(String vehicleNo)
	{
		return requestRepo.findByVehicleNo(vehicleNo);
	}
	
	 @PersistenceContext
	  private EntityManager entityManager;
	
	public ResponseEntity<Request> updateOneRequest(Integer requestId,Request requestDetails)
	{
		Integer id = requestDetails.getCustomer().getCustomerID();
		Customer customerEntity = entityManager.find(Customer.class, id);
		requestDetails.setCustomer(customerEntity);
		
		
		id = requestDetails.getMechanic().getMechanicID(); 
		Mechanic mechanicEntity = entityManager.find(Mechanic.class, id);
		requestDetails.setMechanic(mechanicEntity);
		
		System.out.println(requestDetails);
		Optional<Request>requestOpt= requestRepo.findById(requestId);
		Request foundRequest= requestOpt.get();
		
		foundRequest.setRequestId(requestDetails.getRequestId());
		foundRequest.setEnquiryDate(requestDetails.getEnquiryDate());
		foundRequest.setReleaseDate(requestDetails.getReleaseDate());
		foundRequest.setProblemDescription(requestDetails.getProblemDescription());
		foundRequest.setStatus(requestDetails.getStatus());
	
		foundRequest.setBill(requestDetails.getBill());
		foundRequest.setFeedback(requestDetails.getFeedback());
		
    	foundRequest.setMechanic(requestDetails.getMechanic());
		foundRequest.setCustomer(requestDetails.getCustomer());

		Request updateOneRequest=requestRepo.save(foundRequest);
		return ResponseEntity.ok(updateOneRequest);
	
	
	}
	
	
	
	public ResponseEntity<Request> updateFeedbackInRequest(Integer requestId,Request requestDetails)
	{
		Integer id = requestDetails.getCustomer().getCustomerID(); // obtain the primary key of the detached entity
		Customer customerEntity = entityManager.find(Customer.class, id);
		requestDetails.setCustomer(customerEntity);
		
		
		id = requestDetails.getMechanic().getMechanicID(); // obtain the primary key of the detached entity
		Mechanic mechanicEntity = entityManager.find(Mechanic.class, id);
		requestDetails.setMechanic(mechanicEntity);
		
		System.out.println(requestDetails);
		Optional<Request>requestOpt= requestRepo.findById(requestId);
		Request foundRequest= requestOpt.get();
		
		foundRequest.setRequestId(requestDetails.getRequestId());
		foundRequest.setEnquiryDate(requestDetails.getEnquiryDate());
		foundRequest.setReleaseDate(requestDetails.getReleaseDate());
		foundRequest.setProblemDescription(requestDetails.getProblemDescription());
		foundRequest.setStatus(requestDetails.getStatus());
	
		foundRequest.setBill(requestDetails.getBill());
		foundRequest.setFeedback(null);
		
    	foundRequest.setMechanic(requestDetails.getMechanic());
		foundRequest.setCustomer(requestDetails.getCustomer());

		Request updateOneRequest=requestRepo.save(foundRequest);
		return ResponseEntity.ok(updateOneRequest);
	
	
	}
	
	

	
	
	
	  @Autowired
	   private JdbcTemplate jdbcTemplate;

	   public List<Request> findByQuery(Integer custid,String status) {
		   String sql = "select * from Requests where customer_customerid = ? AND status != ?";
	       List<Request> entities = jdbcTemplate.query(sql,new Object[]{custid, status}, new BeanPropertyRowMapper<>(Request.class));
	       return entities;
	   }
	   
	   

	   
	   
	   public List<CustomerAndRequest> findByCustomerAndRequest() {
		   List<Request> list=getAllRequests();
		   System.out.println(list);
		   List<CustomerAndRequest> listCustomerAndRequest=new ArrayList<CustomerAndRequest>();
		   for(int i=0;i<list.size();i++)
			  
		   {
			   Request request= list.get(i);
			   Customer customer= custService.getOneCustomer(request.getCustomer().getCustomerID());
			   CustomerAndRequest customerAndRequest= new CustomerAndRequest(request.getRequestId(),request.getEnquiryDate(),request.getReleaseDate(),request.getProblemDescription(),request.getStatus(),request.getVehicleNo(),request.getVehicleName(),request.getVehicleBrand(),request.getVehicleModel(),request.getVehicleCategory(),request.getMechanic(),request.getCustomer(),request.getBill(),request.getFeedback());
			   listCustomerAndRequest.add(customerAndRequest);  
		   }
		   
	       return listCustomerAndRequest;
	   }
	
	

	
}
