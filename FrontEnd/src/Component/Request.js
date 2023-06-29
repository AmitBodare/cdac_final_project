import React from "react";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

import CustomerNavbar from "./Navbar/CustomerNavbar";
import CustomerService from "./Services/CustomerService";


function Request() {

  const setDate = () => {
    const today = new Date();

    const date = today.setDate(today.getDate());
    const defaultValue = new Date(date).toISOString().split('T')[0];
    return defaultValue;
  }


  const requestObject = {

    // enquiryDate:new Date().toLocaleDateString().slice(0,19).replace('/','-'),
    enquiryDate: setDate(),
    releaseDate: "",
    problemDescription: "",
    status: "Pending",
    vehicleNo: "",
    vehicleName: "",
    vehicleBrand: "",
    vehicleModel: "",
    vehicleCategory: "",
    mechanic: null,
    customer: "",
    bill: "",
    feedback: null
  };

  const [request, setRequest] = useState(requestObject);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const localUser = JSON.parse(localStorage.getItem("user"));
    const user = {
      id: localUser.id,
      emailId: localUser.emailId,
      password: localUser.password,
      role: localUser.role
    }
    CustomerService.getCustomerByUser(user).then((res) => {


      console.log(res.data);
      const updateRequest = { ...request, customer: res.data };
      console.log(updateRequest)
      setRequest(updateRequest);


      axios
        .post(`http://localhost:9000/Request-api`, updateRequest).then(alert("Request Made succefully"), navigate('/CustomerDashboard')).catch((error) => alert("Request not made.."))

    }).catch();
  };




  //  setRequest(...request, {vehicle:vehicle},{customer:user.customer});

  //  console.log("vehicle===>" + JSON.stringify(vehicle))
  //  console.log("request===>" + JSON.stringify(request))
  //console.log("request===>" + JSON.stringify(request))
  // const resp = 
  // };

  //style={{ display: "flex", flexdirection: "row", margin:'70px' }}

  return (
    <>
      <CustomerNavbar />
      <div>
        <br></br>
        <div className="reqcont" >
          <div className="row"  >
            <div className="card col-md-5 offset-md-3 offset-md-3">
              <div className=" card-header text-center">
                {" "}
                <h5 className="card-title text-dark" style={{ textSize: "50px" }}>
                  MAKE REQUEST
                </h5>
              </div>

              <Form.Group className="mt-3">
                <Form.Label><b>Vehicle Category</b></Form.Label>
                <Form.Select onChange={(event) => setRequest({
                  ...request,
                  vehicleCategory: event.target.value
                })}>
                  <option>Please select</option>
                  <option value="Two Wheeler">Two Wheeler </option>
                  <option value="Four Wheeler">Four Wheeler</option>

                </Form.Select>

              </Form.Group>


              <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group mb-3">
                    <label> <b>Vehicle Number: </b></label>
                    <input
                      type="text"
                      placeholder="Vehicle Number"
                      className="form-control"
                      name="firstName"
                      {...register("requiredNumber", { required: true })}
                      value={request.vehicleNo}
                      onChange={(event) => {
                        setRequest({
                          ...request,
                          vehicleNo: event.target.value,
                        });
                      }}
                    />
                    {errors.requiredNumber && (
                      <p className="text-danger">Vehicle Number is required</p>
                    )}
                  </div>
                  <div className="form-group mb-3">
                    <label><b> Vehicle Name: </b></label>
                    <input
                      type="text"
                      placeholder="Vehicle Name"
                      name="vehicleName"
                      className="form-control"
                      {...register("requiredName", { required: true })}
                      value={request.vehicleName}
                      onChange={(event) => {
                        setRequest({
                          ...request,
                          vehicleName: event.target.value,
                        });
                      }}
                    />
                    {errors.requiredName && (
                      <p className="text-danger">Vehicle Name is required</p>
                    )}
                  </div>

                  <div className="form-group mb-3">
                    <label> <b>Vehicle Brand: </b></label>
                    <input
                      type="text"
                      placeholder="Vehicle Brand"
                      name="VehicleBrand"
                      className="form-control"
                      {...register("requiredBrand", { required: true })}
                      value={request.vehicleBrand}
                      onChange={(event) => {
                        setRequest({
                          ...request,
                          vehicleBrand: event.target.value,
                        });
                      }}
                    />
                    {errors.requiredBrand && (
                      <p className="text-danger">Vehicle Brand is required</p>
                    )}
                  </div>

                  <div className="form-group mb-3">
                    <label><b> Vehicle Model: </b></label>
                    <input
                      type="text"
                      placeholder="Vehicle Model"
                      name="VehicleModel"
                      className="form-control"
                      {...register("requiredModel", { required: true })}
                      value={request.vehicleModel}
                      onChange={(event) => {
                        setRequest({
                          ...request,
                          vehicleModel: event.target.value,
                        });
                      }}
                    />
                    {errors.requiredModel && (
                      <p className="text-danger">Vehicle Model is required</p>
                    )}
                  </div>
                  <div className="form-group mb-3">
                    <label><b>Problem Description:</b> </label>
                    <input
                      type="text"
                      placeholder="Problem Description "
                      name="ProblemDescription"
                      className="form-control"
                      {...register("problemDescription", {
                        required: "ProblemDescription is required",
                        maxLength: {
                          value: 255,
                          message: "ProblemDescription can contain max 255 character",
                        },
                      })}
                      value={request.problemDescription}
                      onChange={(event) => {
                        setRequest({ ...request, problemDescription: event.target.value });
                      }}
                    />

                    {errors.problemDescription ? (
                      <>
                        {errors.problemDescription.type === "required" && (
                          <p style={{ color: "red" }}>{errors.problemDescription.message}</p>
                        )}
                        {errors.problemDescription.type === "maxLength" && (
                          <p style={{ color: "red" }}>{errors.problemDescription.message}</p>
                        )}
                      </>
                    ) : null}
                  </div>

                  <div className="mb-3">
                    <button
                      className="btn btn-primary"

                      type="submit"
                    >
                      Register
                    </button>
                    <button
                      className="btn btn-primary "
                      onClick={() => {
                        navigate("/CustomerDashboard");
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

    </>
  );
}

export default Request;

