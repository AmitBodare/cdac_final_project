import React, { Component, useEffect, useState  } from "react";
import { Container, Table } from 'react-bootstrap';
import{ Button} from "react-bootstrap";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RequestService from "./Services/RequestService";
import { Link } from "react-router-dom";             
import { AdminChangeReq } from "./AdminChangeReq";

import { useNavigate} from 'react-router-dom';
import axios from "axios";
import AdminNavbar from "./Navbar/AdminNavbar";


function EnquiryMadeByCustomer (){

  const navigate = useNavigate();
  const [requests, setRequests] = useState([]);

 

    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     requests: [],
    //     loadComponent:false
    //   };
    // }

    useEffect(() => {
      
      
      RequestService.getAllCustomerAndRequests().then((response) => {
        
        setRequests(response.data);
        console.log(response.data)
      });
    },[])

    const feedbackRequest=requests.filter((element)=>{
      return (element.feedback!==null)
   })

    const deleteFeedbackHandler=(req)=>{

      RequestService.updateFeedbackInRequest(req).then(window.location.reload(false)).catch();
      
    }

      return (
  
        <div>
         <AdminNavbar />
          <Container className="text-center mt-3 ">
            <h1 className="p-3" align="center" style={{ color: 'green' }} >Feedbacks</h1>
            <Table bordered>
              <thead>
                <tr style={{color:"orange"}}>
                <th>Customer Name</th>
                 <th>Vehicle Number</th>
                 <th>Problem Description</th>
                  <th>Feedback</th>
                  <th>Delete</th>
                 
      
                </tr>
              </thead>
              <tbody>
                {feedbackRequest.map((req) => {
                  return (
                    <tr key={req.requestId} style={{color:"gray"}}  >
                       <td>{req.customer.firstName}</td>
                      <td>{req.vehicleNo}</td>
                      <td>{req.problemDescription}</td>                    
                      <td>{req.feedback}</td>
                    
                       
  <td>    <button className="btn btn-danger" onClick={()=>deleteFeedbackHandler(req)}>Delete</button>
  
    
  </td>
  
                      

  
                    </tr>
  
                  );
                })}
  
              </tbody>
            </Table>
          </Container>
        </div>
      );
    }
  
  
  export default EnquiryMadeByCustomer;