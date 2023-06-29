import React from "react";
import { Card, Container, Row } from "react-bootstrap";

import Footercomponent from "./Footercomponent";

import NavbarHome from "./NavbarHome";
import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);
  return (
    <>
      <div className="reqcont sticky-top">
        <NavbarHome />
      </div>

      <div className="p-3">
        <Container style={{ margin: "50px 100px", position: "fixed" }}>
          <Row>
            <Card className="p-3 card  my-3 mr-3 shadow p-3 mb-5 bg-white rounded offset:4">
              <Card.Body>
                <Card.Title className="text-primary text-center">
                  <h2>About us</h2>
                </Card.Title>

                <Card.Text className="p-3 size-md">
                  <h5>
                    AutoHub aims to be the best of both worlds - Reliable and
                    Cost-effective Car Services
                  </h5>
                </Card.Text>

                <Card.Text className="p-3 size-md">
                  <p>
                    Car Servicing, Car repairs and Car cleaning - we are your
                    one-stop solution for all things cars.
                  </p>
                  <p>
                    A brainchild of 4 friends - Amit Bodare,Prashant
                    Shinde,Toufik Shikalgar,Shubham Borase. Autohub is a network
                    of technology-enabled car service centres, offering a
                    seamless car service experience at the convenience of a tap.{" "}
                  </p>
                  <p>
                    Stay in the comforts of your home or office and make the
                    most of our complimentary service. Count on us to be your
                    personal car care expert, advisor and car mechanic.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </div>
      <div
        style={{
          position: "fixed",
          bottom: "0",
          width: "100%",
          height: "100px",
        }}
      >
        <Footercomponent />
      </div>
    </>
  );
};

export default About;
