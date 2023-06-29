import React from "react";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import AdminNavbar from "./Navbar/AdminNavbar";

function AdminMakeCustomer() {
  const customerObject = {
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
    mobileNo: "",
    address: "",

  };



  const [customer, setCustomer] = useState(customerObject);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(JSON.stringify(customer));
    const resp = axios
      .post(`http://localhost:9000/Customer-api`, customer)
      .then((res) => {


        alert("user registered succesfully");
        navigate("/admin/adminCustomer");

      })
      .catch((error) => alert("user failed to registered"));

  }
  return (
    <div>
      <div className="stick-top" >
        <AdminNavbar />
      </div>
      <div className="reqcont" >
        <div >
          <div style={{ margin: "20px 500px" }}>
            <div className="card" style={{ width: "500px" }}>
              <div className=" card-header text-center">
                {" "}
                <h5
                  className="card-title text-dark"
                  style={{ textSize: "50px" }}
                >
                  Registration Form
                </h5>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group mb-2">
                    <label> First Name: </label>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="form-control"
                      name="firstName"
                      {...register("requiredFirst", { required: true })}
                      value={customer.firstName}
                      onChange={(event) => {
                        setCustomer({
                          ...customer,
                          firstName: event.target.value,
                        });
                      }}
                    />
                    {errors.requiredFirst && (
                      <p className="text-danger">First name is required</p>
                    )}
                  </div>
                  <div className="form-group mb-2">
                    <label> Last Name: </label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      className="form-control"
                      {...register("requiredLast", { required: true })}
                      value={customer.lastName}
                      onChange={(event) => {
                        setCustomer({
                          ...customer,
                          lastName: event.target.value,
                        });
                      }}
                    />
                    {errors.requiredLast && (
                      <p className="text-danger">Last name is required</p>
                    )}
                  </div>
                  <div className="form-group mb-2">
                    <label> Email Id: </label>
                    <input
                      type="text"
                      placeholder="Email Address"
                      className="form-control"
                      name="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: "enter emailid e.g. abc@gmail.com",
                        },
                      })}
                      value={customer.email}
                      onChange={(event) => {
                        setCustomer({
                          ...customer,
                          emailId: event.target.value,
                        });
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
                  <div className="form-group mb-2">
                    <label> Password: </label>
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      className="form-control"
                      {...register("password", {
                        required: "Password is required",
                        pattern: {
                          value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
                          message:
                            "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters",
                        },
                      })}
                      value={customer.password}
                      onChange={(event) => {
                        setCustomer({
                          ...customer,
                          password: event.target.value,
                        });
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
                  <div className="form-group mb-2">
                    <label>Confirm Password: </label>
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      className="form-control"
                      {...register("confirmPassword", {
                        required: true,
                        validate: {
                          matchesPassword: (value) => {

                            return value === customer.password || "Passwords do not match";
                          }
                        }
                      })}


                    />

                    {errors.confirmPassword && <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>}
                  </div>


                  <div className="form-group mb-2">
                    <label> Mobile No: </label>
                    <input
                      type="number"
                      placeholder="mobile no"
                      name="mobile"
                      className="form-control"
                      {...register("mobileno", {
                        required: "Mobile no is required",
                        pattern: {
                          value: /^\d{10}$/,
                          message: "Enter 10 digit mobile no",
                        },
                      })}
                      value={customer.phone}
                      onChange={(event) => {
                        setCustomer({
                          ...customer,
                          mobileNo: event.target.value,
                        });
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
                  <div className="form-group mb-2">
                    <label> Address: </label>
                    <input
                      type="textarea"
                      placeholder="Address "
                      name="address"
                      className="form-control"
                      {...register("address", {
                        required: "Address is required",
                        maxLength: {
                          value: 255,
                          message: "address can contain max 255 character",
                        },
                      })}
                      value={customer.address}
                      onChange={(event) => {
                        setCustomer({
                          ...customer,
                          address: event.target.value,
                        });
                      }}
                    />

                    {errors.address ? (
                      <>
                        {errors.address.type === "required" && (
                          <p style={{ color: "red" }}>
                            {errors.address.message}
                          </p>
                        )}
                        {errors.address.type === "maxLength" && (
                          <p style={{ color: "red" }}>
                            {errors.address.message}
                          </p>
                        )}
                      </>
                    ) : null}
                  </div>

                  <div className="mb-2">
                    <button className="btn btn-primary" type="submit">
                      Register
                    </button>

                    <button
                      className="btn btn-primary "
                      onClick={() => {
                        navigate("/admin/adminCustomer");
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
    </div>
  );
}

export default AdminMakeCustomer;
