import React, { Component } from "react";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "./Navbar/AdminNavbar";
import CustomerService from "./Services/CustomerService";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export default function AdminCustomerChangeProfile() {


  const location = useLocation();
  const { updatedCustomerId } = location.state;
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [emailId, setEmailId] = useState('')
  const [password, setPassword] = useState('')
  const [mobileNo, setMobileNo] = useState('')
  const [address, setAddress] = useState('')
  const [user, setUser] = useState({})
  const [customerID, setCustomerID] = useState({})

  //   const [updateUser,setUser]=useState({});
  //  const [updateCustomer,setCustomer]=useState({});

  // setUser(user)

  useEffect(() => {

    CustomerService.getOneCustomer(updatedCustomerId).then((res) => {

      setFirstName(res.data.firstName)
      setLastName(res.data.lastName)
      setEmailId(res.data.emailId)
      setPassword(res.data.password)
      setMobileNo(res.data.mobileNo)
      setAddress(res.data.address)
      setUser(res.data.user)
      setCustomerID(res.data.customerID)
    })
    return () => {

    }
  }, [])


  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = async (e) => {

    const Newuser = {
      id: user.id,
      emailId: emailId,
      password: password,
      role: "customer"
    }

    const updateNewCustomer = {
      firstName: firstName,
      lastName: lastName,
      emailId: emailId,
      password: password,
      mobileNo: mobileNo,
      address: address,
      user: Newuser

    }



    console.log(updateNewCustomer)

    // // var updateNewUser={
    // //   id:updateCustomer.user.id,
    // //   emailId: updateNewCustomer.emailId,
    // //   password: updateNewCustomer.password,
    // //   role: "customer",

    // //     }


    //   //console.log(updateNewUser)




    await axios
      .put(`http://localhost:9000/Customer-api/${customerID}`, updateNewCustomer)
      .then(async (res) => {
        await axios
          .put(`http://localhost:9000/user-api/${updateNewCustomer.user.id}`, updateNewCustomer.user)
          .then((res) => {
            console.log(res.data)
            localStorage.clear();
            localStorage.setItem("user", JSON.stringify(res.data))
            alert("Profile updated successfully");
            navigate("/admin/allCustomers");




            //     //console.log(res.data) 
            //     const updateUser=res.data;
            //     localStorage.clear();
            //     localStorage.setItem("user", JSON.stringify(updateUser))
            //     alert("Profile updated successfully");
            //     navigate("/CustomerProfile");

            //   })

          }
          ).catch((error) => alert("Profile not updated.."))
      });
  }




  return (
    <div>
      <div className="position-sticky  container-fluid  "
        style={{ width: "100%" }}>
        <AdminNavbar />
      </div>
      <div className="container p-2 m-2" style={{ margin: "50px 500px" }}>
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <div className=" card-header text-center">
              {" "}
              <h5
                className="card-title text-dark"
                style={{
                  textAlign: "center",
                  color: "Black",
                  fontFamily: "cursive",
                }}
              >
                Edit Your Profile
              </h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mb-3">
                  <label> First Name: </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                    name="firstName"

                    defaultValue={firstName}
                    onChange={(event) => {
                      setFirstName(event.target.value);
                    }}

                  />

                </div>
                <div className="form-group mb-3">
                  <label> Last Name: </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    className="form-control"

                    defaultValue={lastName}
                    onChange={(event) => {
                      setLastName(event.target.value);
                    }}

                  />

                </div>
                <div className="form-group mb-3">
                  <label> Email Id: </label>
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="form-control"
                    name="email"
                    {...register("email", {

                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "enter emailid e.g. abc@gmail.com",
                      },
                    })}
                    defaultValue={emailId}
                    onChange={(event) => {
                      setEmailId(event.target.value);
                    }}


                  />
                  {errors.email ? (
                    <>
                      {errors.email.type === "required" && (
                        <p style={{ color: "red" }}>{errors.email.message}</p>
                      )}
                      {errors.email.type === "pattern" && (
                        <p style={{ color: "red" }}>{errors.email.message}</p>
                      )}
                    </>
                  ) : null}


                </div>
                <div className="form-group mb-3">
                  <label> Password: </label>
                  <input
                    type="text"
                    placeholder="Password"
                    name="password"

                    className="form-control"
                    {...register("password", {

                      pattern: {
                        value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
                        message:
                          "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters",
                      },
                    })}
                    defaultValue={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}

                  />
                  {errors.password ? (
                    <>
                      {errors.password.type === "required" && (
                        <p style={{ color: "red" }}>
                          {errors.password.message}
                        </p>
                      )}
                      {errors.password.type === "pattern" && (
                        <p style={{ color: "red" }}>
                          {errors.password.message}
                        </p>
                      )}
                    </>
                  ) : null}

                </div>
                <div className="form-group mb-3">
                  <label> Mobile No: </label>
                  <input
                    type="mobile"
                    placeholder="mobile no"
                    name="mobile"
                    className="form-control"
                    {...register("mobileno", {

                      pattern: {
                        value: /^\d{10}$/,
                        message: "Enter 10 digit mobile no",
                      },
                    })}
                    defaultValue={mobileNo}
                    onChange={(event) => {
                      setMobileNo(event.target.value);
                    }}
                  />
                  {errors.mobileno ? (
                    <>
                      {errors.mobileno.type === "required" && (
                        <p style={{ color: "red" }}>
                          {errors.mobileno.message}
                        </p>
                      )}
                      {errors.mobileno.type === "pattern" && (
                        <p style={{ color: "red" }}>
                          {errors.mobileno.message}
                        </p>
                      )}
                    </>
                  ) : null}

                </div>
                <div className="form-group mb-3">
                  <label> Address: </label>
                  <input
                    type="textarea"
                    placeholder="Address "
                    name="address"
                    className="form-control"
                    {...register("address", {

                      maxLength: {
                        value: 255,
                        message: "address can contain max 255 character",
                      },
                    })}
                    defaultValue={address}
                    onChange={(event) => {
                      setAddress(event.target.value);
                    }}
                  />
                  {errors.address ? (
                    <>
                      {errors.address.type === "required" && (
                        <p style={{ color: "red" }}>{errors.address.message}</p>
                      )}
                      {errors.address.type === "maxLength" && (
                        <p style={{ color: "red" }}>{errors.address.message}</p>
                      )}
                    </>
                  ) : null}

                </div>

                <div className="mb-3">
                  <button className="btn btn-primary" type="submit">
                    Update
                  </button>
                  <button
                    className="btn btn-primary "
                    onClick={() => {
                      navigate("/admin/allCustomers");
                    }}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

