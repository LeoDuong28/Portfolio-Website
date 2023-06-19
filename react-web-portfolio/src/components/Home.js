import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello!{" "}
                <span className="wave" role="img" aria-aria-labelledby="wave">
                  👋
                </span>
              </h1>

              <h1 className="heading-name">
                My Name is
                <strong className="main-name"> Leo Duong </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Typewriter
                  options={{
                    strings: [
                      "Software Developer",
                      "FrontEnd Developer",
                      "BackEnd Developer",
                      "University Student",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 70,
                  }}
                />
              </div>
            </Col>

            <Col></Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}
