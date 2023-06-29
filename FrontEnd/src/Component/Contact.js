import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import NavbarHome from "./NavbarHome";
import { useEffect } from "react";
const Contact = () => {

  useEffect(() => {
 
    document.body.style.overflow = 'hidden';
  
    return () => {
  
      document.body.style.overflow = 'visible';
    };
  }, []);
  return (
    <div>
      <div className="reqcont sticky-top">
        <NavbarHome />
      </div>
      <div>
        <div className="bg-grey">
          <Container className="mt-5" style={{ margin: "50px 140px" }}>
            <Row>
              <Card.Title className="text-center p-3 text-success">
                <h3>Leave us a message !</h3>
              </Card.Title>
            </Row>
            <Row>
              <Col
                sm={4}
                className="cards shadow p-3 mt-3 my-3 mb-5 bg-white rounded text-center "
                style={{ width: "27%", marginLeft: "20px" }}
              >
                <Card.Body variant="danger">
                  <Card.Title className="text-danger">
                    Helpline Number
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted ">
                    --------------------------
                  </Card.Subtitle>
                  <Card.Text>
                    <Image src="./images/icon.png" alt="Logo" width="30px" />
                    +91-8398970970
                    <br />
                    <Image src="./images/icon.png" alt="Logo" width="30px" />
                    +91-7030141305
                  </Card.Text>
                </Card.Body>
              </Col>
              <Col sm={5}></Col>
              <Col
                sm={4}
                className="card mx-auto mt-3 my-3 ml-8 shadow p-1 mb-5 bg-white rounded text-center"
                style={{ width: "27%", marginLeft: "800px" }}
              >
                <Card.Body>
                  <Card.Title className="text-danger">Email :</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    ---------------
                  </Card.Subtitle>
                  <Card.Text>
                    <Image src="./images/email.png" alt="Logo" width="35px" />
                    Customer Support : info@autohub.in
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Container>
          <Container style={{ marginLeft: "140px" }}>
            <Row className="justify-content-md-center">
              <Col xs lg="2"></Col>
              <Col
                md="auto"
                className="card mx-auto mt-3 my-3 mr-3 shadow p-3 mb-5 bg-white rounded text-center"
                style={{ width: "40%" }}
              >
                <Card.Body>
                  <Card.Title className="text-primary">
                    Corporate Office Address:
                  </Card.Title>
                  <Card.Subtitle className=" text-muted">
                    ---------------------------------------
                  </Card.Subtitle>
                  <Card.Text>
                    AutoHub Pvt. Ltd 3rd Floor, Landmark Tower, Moti Vihar,
                    Ashok Marg, South City I, Sector-41, Pune Maharashtra -
                    230532
                  </Card.Text>
                </Card.Body>
              </Col>
              <Col xs lg="2"></Col>
            </Row>
          </Container>
          <Card.Footer
            className="text-muted text-center m-0 p-0"
            style={{ marginLeft: "150px" }}
          >
            Ⓒ 2023 AutoHub Pvt. Ltd
          </Card.Footer>
        </div>
      </div>
    </div>
  );
};

export default Contact;
