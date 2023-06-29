package com.vehicleserviceapp.rest.entity;
import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import lombok.ToString.Exclude;

@Entity
@Data
@Table(name = "customer")
public class Customer implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private int customerID;
	
	@NotBlank(message="First name is required.")
	@Column
	private String firstName;
	
	@NotBlank(message="Last name is required.")
	@Column
	private String lastName;
	
	@NotBlank(message="EmailId is required.")
	@Email(message="enter emailid e.g. abc@gmail.com")
	@Column
	private String emailId;
	
	@NotBlank(message="Password is required.")
	@Pattern(regexp="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,}$",message="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters") 
	@Column
	private String password;
	
	@NotBlank(message="Password is required.")
	@Pattern(regexp="^[0-9]{10}",message="Enter 10 Digit Mobile Number") 
	@Column
	private String mobileNo;
	
	@NotBlank(message="Address is required.")
	@Column
	private String address;
	
	


	@OneToOne(cascade = CascadeType.MERGE)
	@JoinColumn
	private User user;
	
	public Customer()
	{
		
	}

	public Customer(int customerID, String firstName, String lastName, String emailId, String password, String mobileNo,
			String address, User user) {
		super();
		this.customerID = customerID;
		this.firstName = firstName;
		this.lastName = lastName;
		this.emailId = emailId;
		this.password = password;
		this.mobileNo = mobileNo;
		this.address = address;
		this.user = user;
	}

	public int getCustomerID() {
		return customerID;
	}

	public void setCustomerID(int customerID) {
		this.customerID = customerID;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "Customer [customerID=" + customerID + ", firstName=" + firstName + ", lastName=" + lastName
				+ ", emailId=" + emailId + ", password=" + password + ", mobileNo=" + mobileNo + ", address=" + address
				+ ", user=" + user + "]";
	}



	
	}
	
	

	

	


