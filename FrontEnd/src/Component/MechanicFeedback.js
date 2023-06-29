import React from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';
import Marquee from "./Marquee";
import MechanicNavbar from "./Navbar/MechanicNavbar";

export default function MechanicFeedback() {



  const feedbackNewObject = {
    description: "",
    customer: null,
    mechanic: "",
  };

  const [feedback, setFeedback] = useState(feedbackNewObject);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user.mechanic);

    const updatedFeedback = { ...feedback, mechanic: user.mechanic };

    setFeedback(updatedFeedback);
    console.log(updatedFeedback)

    axios
      .post(`http://localhost:9000/Feedbacks-api`, updatedFeedback).then(alert("Feedback Made successfully"), navigate('/MechanicDashboard')).catch((error) => alert("Feedback not made.."))


  };
  return (
    <div>
      <div className="position-sticky  container-fluid p-0 m-0 "
        style={{ width: "100%" }}>
        <MechanicNavbar />
      </div>
      <div className="row" style={{ margin: "50px 300px" }}>
        <Container className="col ">
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
              style={{ textAlign: "center", color: "Green", fontFamily: "cursive" }}
            >
              Please Give Us Feedback{" "}
            </h3>
            <br></br>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label><h5 style={{ textAlign: "center", color: "skyblue", fontFamily: "cursive" }}>FeedBack Description</h5></Form.Label>
              <Form.Control as="textarea" rows={3}
                {...register("description", {
                  required: "description is required",
                  maxLength: {
                    value: 255,
                    message: "description can contain max 255 character",
                  },
                })}
                value={feedback.description}
                onChange={(event) => {
                  setFeedback({ ...feedback, description: event.target.value });
                }}
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
                navigate("/MechanicDashboard");
              }}

            >
              Cancel
            </button>
          </Form>
        </Container>
      </div >
      <Marquee />
    </div>
  )
}
