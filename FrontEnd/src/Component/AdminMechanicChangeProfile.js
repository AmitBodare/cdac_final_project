import React, { Component } from "react";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "./Navbar/AdminNavbar";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import MechanicService from "./Services/MechanicService";


export default function AdminMechanicChangeProfile() {


  const location = useLocation();
  const { updatedMechanicId } = location.state;
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [emailId, setEmailId] = useState('')
  const [password, setPassword] = useState('')
  const [mobileNo, setMobileNo] = useState('')
  const [address, setAddress] = useState('')
  const [skills, setSkills] = useState('')
  const [salary, setSalary] = useState('')
  const [user, setUser] = useState({})
  const [mechanicID, setMechanicID] = useState({})


  //   const [updateUser,setUser]=useState({});
  //  const [updateCustomer,setCustomer]=useState({});

  // setUser(user)

  useEffect(() => {

    MechanicService.getOneMechanic(updatedMechanicId).then((res) => {

      setFirstName(res.data.firstName)
      setLastName(res.data.lastName)
      setEmailId(res.data.emailId)
      setPassword(res.data.password)
      setMobileNo(res.data.mobileNo)
      setAddress(res.data.address)
      setSkills(res.data.skills)
      setSalary(res.data.salary)


      setUser(res.data.user)
      setMechanicID(res.data.mechanicID)
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
      role: "mechanic"
    }

    const updateNewMechanic = {
      firstName: firstName,
      lastName: lastName,
      emailId: emailId,
      password: password,
      mobileNo: mobileNo,
      address: address,
      skills: skills,
      salary: salary,
      user: Newuser

    }



    console.log(updateNewMechanic)




    await axios
      .put(`http://localhost:9000/Mechanic-api/${mechanicID}`, updateNewMechanic)
      .then(async (res) => {
        await axios
          .put(`http://localhost:9000/user-api/${updateNewMechanic.user.id}`, updateNewMechanic.user)
          .then((res) => {
            console.log(res.data)
            localStorage.clear();
            localStorage.setItem("user", JSON.stringify(res.data))
            alert("Profile updated successfully");
            navigate("/admin/allMechanic");

          }
          ).catch((error) => alert("Profile not updated.."))
      });
  }




  return (
    <div>
      <div className="position-sticky  container-fluid p-0 m-0 "
        style={{ width: "100%" }}>
        <AdminNavbar />
      </div>
      <div className="container m-2 p-2" style={{ marginLeft: "100px" }}>
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
                    {...register("requiredFirst")}
                    defaultValue={firstName}
                    onChange={(event) => {
                      setFirstName(

                        event.target.value,
                      );
                    }}
                  />
                  {errors.requiredFirst && (
                    <p className="text-danger">First name is required</p>
                  )}
                </div>
                <div className="form-group mb-3">
                  <label> Last Name: </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    className="form-control"
                    {...register("requiredLast")}
                    value={lastName}
                    onChange={(event) => {
                      setLastName(

                        event.target.value,
                      );
                    }}
                  />
                  {errors.requiredLast && (
                    <p className="text-danger">Last name is required</p>
                  )}
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
                    value={emailId}
                    onChange={(event) => {
                      setEmailId(

                        event.target.value,
                      );

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
                    value={password}
                    onChange={(event) => {
                      setPassword(

                        event.target.value,
                      );

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
                    value={mobileNo}
                    onChange={(event) => {
                      setMobileNo(

                        event.target.value,
                      );
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
                    value={address}
                    onChange={(event) => {
                      setAddress(

                        event.target.value,
                      );
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
                <div className="form-group mb-3">
                  <label> skills: </label>
                  <input
                    type="text"
                    placeholder="skills "
                    name="skills"
                    className="form-control"
                    {...register("skills", {

                      maxLength: {
                        value: 255,
                        message: "skills can contain max 255 character",
                      },
                    })}
                    value={skills}
                    onChange={(event) => {
                      setSkills(

                        event.target.value,
                      );
                    }}
                  />

                  {errors.skills ? (
                    <>
                      {errors.skills.type === "required" && (
                        <p style={{ color: "red" }}>{errors.skills.message}</p>
                      )}
                      {errors.skills.type === "maxLength" && (
                        <p style={{ color: "red" }}>{errors.skills.message}</p>
                      )}
                    </>
                  ) : null}
                </div>

                <div className="mb-3">
                  <button
                    className="btn btn-primary"

                    type="submit"
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-primary "

                    onClick={() => {
                      navigate("/admin/allMechanic");
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

