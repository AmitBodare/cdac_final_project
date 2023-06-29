import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import NavbarHome from "./NavbarHome";


import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

import Marquee from "./Marquee";
import { useEffect } from "react";
export default function Loginpage() {
  useEffect(() => {

    document.body.style.overflow = 'hidden';

    return () => {

      document.body.style.overflow = 'visible';
    };
  }, []);
  const navigate = useNavigate();

  const loginModel = {
    email: "",
    password: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (event) => {
    loginModel.email = event.email;
    loginModel.password = event.password;
    console.log("user => " + JSON.stringify(loginModel));
    axios
      .post(`http://localhost:9000/login`, loginModel)
      .then((res) => {
        const user = res;
        console.log(JSON.stringify(user.data));
        localStorage.setItem("user", JSON.stringify(user.data));

        console.log(user.data.role);

        if (user.data.role === "customer") navigate("/CustomerDashboard");
        else if (user.data.role === "mechanic")

          navigate('/MechanicDashboard');
        else if (user.data.role === "admin")
          navigate('/admin/dashboard');

      })
      .catch((error) =>
        window.alert("Not authorized user ,Please Register first")
      );
  };

  return (
    <div>
      <div className="sticky-top">
        <NavbarHome />
      </div>
      <Container className="row" style={{ margin: "100px 350px" }}>
        <Card className="m-0 p-0" style={{ width: "20rem" }}>
          <img
            src="./Images/Login.jpg"
            height="300px"
            width="300px"
            alt="LoginImage...."
          />
        </Card>
        <Card className="m-0 p-0" style={{ width: "20rem" }}>
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
              Enter Login Credential
            </Card.Title>
            <br></br>
            <Card.Text>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email ID</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Email ID "
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "enter emailid e.g. abc@gmail.com",
                      },
                    })}
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
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    {...register("password", {
                      required: "Password is required",
                      pattern: {
                        value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
                        message:
                          "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters",
                      },
                    })}
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
                </Form.Group>
                <Button variant="primary" type="submit" className="m-2">
                  Login
                </Button>

                <button
                  className="btn btn-primary m-2"
                  onClick={() => {
                    navigate("/Home");
                  }}
                >
                  Cancel
                </button>
              </Form>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
      <Marquee />
    </div>
  );
}
