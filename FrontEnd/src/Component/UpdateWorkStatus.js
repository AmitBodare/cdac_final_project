import React from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import MechanicNavbar from "./Navbar/MechanicNavbar";
import { useNavigate } from "react-router-dom";
import Marquee from "./Marquee";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import RequestService from "./Services/RequestService";


export default function UpdateWorkStatus() {


  const location = useLocation();


  const navigate = useNavigate();

  const [changedStatus, setStatus] = useState('');
  const [upRequest, setRequest] = useState({})



  useEffect(() => {
    const { updatedrequestId } = location.state
    console.log(updatedrequestId)
    RequestService.getOneRequest(updatedrequestId.requestId).then((res) => {
      console.log(res.data)
      setRequest(res.data)
    })

  }, [])





  const updateRequest = () => {



    const ob = upRequest;



    setRequest({ ...upRequest, status: changedStatus })

    console.log(JSON.stringify(ob))

    const newRequest = JSON.stringify(ob);

   
    axios.put(`http://localhost:9000/Request-api/${upRequest.requestId}`, newRequest, {
      headers: {
        'Content-Type': 'application/json'
      }


    }).then((res) => {
      console.log("request updated")

      navigate("/MechanicDashboard");
    })



    //  })

  }



  return (
    <div style={{
      backgroundImage: "url('Images/Wallpaper.jpg')", backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      width: "100vw"
    }}>
      <div>
        <MechanicNavbar />
      </div>
      <Container style={{ width: "40rem", margin: "50px 400px" }}>
        <h3
          style={{ textAlign: "center", color: "green", fontFamily: "cursive" }}
        >
          UPDATE WORK STATUS{" "}
        </h3>

        <Form.Group className="mb-3" style={{ color: "yellow" }}>
          <Form.Label>Status</Form.Label>
          <Form.Select onChange={(e) => {
            setRequest({ ...upRequest, status: e.target.value })
          }}>
            <option>Pending </option>
            <option>Repairing </option>
            <option>Repairing Done</option>
          </Form.Select>
        </Form.Group>

        <button className="btn btn-primary m-2"
          onClick={updateRequest}

        >
          Update
        </button>
      </Container>
      <Marquee />
    </div>
  );
}
