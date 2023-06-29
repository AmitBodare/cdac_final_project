package com.vehicleserviceapp.rest.entity;
import java.io.Serializable;
import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import lombok.ToString.Exclude;



@Entity
@Table(name = "Requests")
public class Request implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	@JsonProperty 
	private Integer requestId;
	
	@Column
	private Date enquiryDate;
	@Column
	private Date releaseDate;
	@NotBlank(message="Problem Description is required.")
	@Column
	private String problemDescription;
	@NotBlank(message="Status is required.")
	@Column
	private String status;
	@NotBlank(message="Vehicle Number is required.")
	@Column
	private String vehicleNo;
	@NotBlank(message="Vehicle Name is required.")
	@Column
	private String vehicleName;
	@NotBlank(message="Vehicle Brand is required.")
	@Column
	private String vehicleBrand;
	@NotBlank(message="Vehicle Model is required.")
	@Column
	private String vehicleModel;
	@NotBlank(message="Vehicle Category is required.")
	@Column
	private String vehicleCategory;
	
	
	
	@ManyToOne(cascade=CascadeType.PERSIST)
	@JoinColumn
	private Mechanic mechanic;
	
	@ManyToOne(cascade=CascadeType.PERSIST)
	@JoinColumn
	private Customer customer;
	
	@Column
	private Integer bill;
	
	@Column
	private String feedback;
	
	

	public Request() {
		super();
	}



	public Request(Integer requestId, Date enquiryDate, Date releaseDate, String problemDescription, String status,
			String vehicleNo, String vehicleName, String vehicleBrand, String vehicleModel, String vehicleCategory,
			Mechanic mechanic, Customer customer, Integer bill, String feedback) {
		super();
		this.requestId = requestId;
		this.enquiryDate = enquiryDate;
		this.releaseDate = releaseDate;
		this.problemDescription = problemDescription;
		this.status = status;
		this.vehicleNo = vehicleNo;
		this.vehicleName = vehicleName;
		this.vehicleBrand = vehicleBrand;
		this.vehicleModel = vehicleModel;
		this.vehicleCategory = vehicleCategory;
		this.mechanic = mechanic;
		this.customer = customer;
		this.bill = bill;
		this.feedback = feedback;
	}



	public Integer getRequestId() {
		return requestId;
	}



	public void setRequestId(Integer requestId) {
		this.requestId = requestId;
	}



	public Date getEnquiryDate() {
		return enquiryDate;
	}



	public void setEnquiryDate(Date enquiryDate) {
		this.enquiryDate = enquiryDate;
	}



	public Date getReleaseDate() {
		return releaseDate;
	}



	public void setReleaseDate(Date releaseDate) {
		this.releaseDate = releaseDate;
	}



	public String getProblemDescription() {
		return problemDescription;
	}



	public void setProblemDescription(String problemDescription) {
		this.problemDescription = problemDescription;
	}



	public String getStatus() {
		return status;
	}



	public void setStatus(String status) {
		this.status = status;
	}



	public String getVehicleNo() {
		return vehicleNo;
	}



	public void setVehicleNo(String vehicleNo) {
		this.vehicleNo = vehicleNo;
	}



	public String getVehicleName() {
		return vehicleName;
	}



	public void setVehicleName(String vehicleName) {
		this.vehicleName = vehicleName;
	}



	public String getVehicleBrand() {
		return vehicleBrand;
	}



	public void setVehicleBrand(String vehicleBrand) {
		this.vehicleBrand = vehicleBrand;
	}



	public String getVehicleModel() {
		return vehicleModel;
	}



	public void setVehicleModel(String vehicleModel) {
		this.vehicleModel = vehicleModel;
	}



	public String getVehicleCategory() {
		return vehicleCategory;
	}



	public void setVehicleCategory(String vehicleCategory) {
		this.vehicleCategory = vehicleCategory;
	}



	public Mechanic getMechanic() {
		return mechanic;
	}



	public void setMechanic(Mechanic mechanic) {
		this.mechanic = mechanic;
	}



	public Customer getCustomer() {
		return customer;
	}



	public void setCustomer(Customer customer) {
		this.customer = customer;
	}



	public Integer getBill() {
		return bill;
	}



	public void setBill(Integer bill) {
		this.bill = bill;
	}



	public String getFeedback() {
		return feedback;
	}



	public void setFeedback(String feedback) {
		this.feedback = feedback;
	}



	@Override
	public String toString() {
		return "Request [requestId=" + requestId + ", enquiryDate=" + enquiryDate + ", releaseDate=" + releaseDate
				+ ", problemDescription=" + problemDescription + ", status=" + status + ", vehicleNo=" + vehicleNo
				+ ", vehicleName=" + vehicleName + ", vehicleBrand=" + vehicleBrand + ", vehicleModel=" + vehicleModel
				+ ", vehicleCategory=" + vehicleCategory + ", mechanic=" + mechanic + ", customer=" + customer
				+ ", bill=" + bill + ", feedback=" + feedback + "]";
	}

	
}
