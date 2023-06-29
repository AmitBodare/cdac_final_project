import React from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import AdminNavbar from "./Navbar/AdminNavbar";
import { useNavigate } from "react-router-dom";
import Marquee from "./Marquee";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import MechanicService from "./Services/MechanicService";


export default function UpdateMechanicSalary() {


  const location = useLocation();


  const navigate = useNavigate();

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




  useEffect(() => {
    const { updatedMechanicId } = location.state
    console.log(updatedMechanicId)
    MechanicService.getOneMechanic(updatedMechanicId.mechanicID).then((res) => {
      console.log(res.data)
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

  }, [])





  const updateMechanic = async () => {

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

        alert("Salary updated successfully");
        navigate("/admin/approveMechanic");

      }
      ).catch((error) => alert("Salary not updated.."))


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
        <AdminNavbar />
      </div>
      <Container style={{ width: "40rem", margin: "50px 400px" }}>
        <h3
          style={{ textAlign: "center", color: "green", fontFamily: "cursive" }}
        >
          UPDATE WORK STATUS{" "}
        </h3>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Salary</Form.Label>
          <Form.Control type="number" placeholder="Salary"
            onChange={(e) => { setSalary(e.target.value) }} />
        </Form.Group>

        <button className="btn btn-primary m-2"
          onClick={updateMechanic}

        >
          Approve
        </button>
      </Container>
      <Marquee />
    </div>
  );
}
