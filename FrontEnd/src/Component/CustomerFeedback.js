import React from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import CustomerNavbar from "./Navbar/CustomerNavbar";
import Marquee from "./Marquee";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import RequestService from "./Services/RequestService";
import { useEffect } from "react";

import axios from 'axios';


export default function CustomerFeedback() {

  const [feedback, setFeedback] = useState("");
  const [upRequest, setRequest] = useState({})
  const navigate = useNavigate();
  const location = useLocation();
  const { updatedrequestId } = location.state;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {

    console.log(updatedrequestId)
    RequestService.getOneRequest(updatedrequestId).then((res) => {
      setRequest(res.data)
    })


  }, [updatedrequestId])



  const feedbackHandler = (e) => {
    setRequest({ ...upRequest, feedback: e.target.value })
    //  setRepairCost(e.target.value)
  }

  const onSubmit = (data) => {

    const ob = {
      requestId: upRequest.requestId,
      enquiryDate: upRequest.enquiryDate,
      releaseDate: upRequest.releaseDate,
      problemDescription: upRequest.problemDescription,
      status: upRequest.status,
      vehicleNo: upRequest.vehicleNo,
      vehicleName: upRequest.vehicleName,
      vehicleBrand: upRequest.vehicleBrand,
      vehicleModel: upRequest.vehicleModel,
      vehicleCategory: upRequest.vehicleCategory,
      mechanic: upRequest.mechanic,
      customer: upRequest.customer,
      bill: upRequest.bill,
      feedback: upRequest.feedback

    }


    console.log(JSON.stringify(ob))

    const newRequest = JSON.stringify(ob);


    axios.put(`http://localhost:9000/Request-api/${upRequest.requestId}`, newRequest, {
      headers: {
        'Content-Type': 'application/json'
      }


    }).then((res) => {
      alert("Feedback Sent Successfully..")

      navigate("/customer/approvedrequest")
    })



  }


  return (

    <div >
      <div className="position-sticky  container-fluid p-0 m-0 "
        style={{ width: "100%" }}>
        <CustomerNavbar />
      </div>
      <div className="row" style={{ margin: "50px 300px" }}>
        <Container className="col">
          <img
            src="../Images/Feedback.jpg"
            height={"300px"}
            width="300px"
            alt="LoginImage...."
          />
        </Container>

        <Container className="col" style={{ width: "40rem" }}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h3
              style={{ textAlign: "center", color: "green", fontFamily: "cursive" }}
            >
              Please Give Us Feedback{" "}
            </h3>
            <br></br>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label><h5 style={{ color: "skyblue" }}>FeedBack Description</h5></Form.Label>
              <Form.Control as="textarea" rows={3}
                {...register("description", {
                  required: "description is required",
                  maxLength: {
                    value: 255,
                    message: "description can contain max 255 character",
                  },
                })}
                value={feedback.description}
                onChange={feedbackHandler}
              />
              {errors.description ? (
                <>
                  {errors.description.type === "required" && (
                    <p style={{ color: "red" }}>{errors.description.message}</p>
                  )}
                  {errors.description.type === "maxLength" && (
                    <p style={{ color: "red" }}>{errors.description.message}</p>
                  )}
                </>
              ) : null}
            </Form.Group>
            <Button variant="primary" type="submit" className="m-2" width="40px">
              Submit
            </Button>
            <button className="btn btn-primary m-2"
              onClick={() => {
                navigate("/customer/approvedrequest");
              }}

            >
              Cancel
            </button>
          </Form>
        </Container>
      </div >
      <div style={{ width: "100%", position: "absolute", bottom: "0" }}> <Marquee /></div>

    </div>

  );

}
