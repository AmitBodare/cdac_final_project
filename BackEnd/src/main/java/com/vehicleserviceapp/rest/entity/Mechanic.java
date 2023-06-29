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
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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
@Table(name = "Mechanic")
public class Mechanic implements Serializable{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private int mechanicID;
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
	@NotBlank(message="Skills is required.")
	@Column
	private String skills;
	

	@Column
	private int salary;
	

	
	@OneToOne(cascade = CascadeType.MERGE)
	@JoinColumn
	private User user;
	
	
	public Mechanic()
	{
		
	}


	public Mechanic(int mechanicID, String firstName, String lastName, String emailId, String password, String mobileNo,
			String address, String skills, int salary, User user) {
		super();
		this.mechanicID = mechanicID;
		this.firstName = firstName;
		this.lastName = lastName;
		this.emailId = emailId;
		this.password = password;
		this.mobileNo = mobileNo;
		this.address = address;
		this.skills = skills;
		this.salary = salary;
		this.user = user;
	}


	public int getMechanicID() {
		return mechanicID;
	}


	public void setMechanicID(int mechanicID) {
		this.mechanicID = mechanicID;
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


	public String getSkills() {
		return skills;
	}


	public void setSkills(String skills) {
		this.skills = skills;
	}


	public int getSalary() {
		return salary;
	}


	public void setSalary(int salary) {
		this.salary = salary;
	}


	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
	}


	@Override
	public String toString() {
		return "Mechanic [mechanicID=" + mechanicID + ", firstName=" + firstName + ", lastName=" + lastName
				+ ", emailId=" + emailId + ", password=" + password + ", mobileNo=" + mobileNo + ", address=" + address
				+ ", skills=" + skills + ", salary=" + salary + ", user=" + user + "]";
	}

	
	
}
