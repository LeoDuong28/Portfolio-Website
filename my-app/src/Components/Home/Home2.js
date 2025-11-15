import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";


function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            <span color="yellow">INTRODUCTION</span> ABOUT ME
                        </h1>
                        <p className="home-about-body">
                            I'm a Software Engineer
                            <br />
                            <br />
                            I'm proficient in
                            <b color="yellow">
                                {" "}
                                Javascript, Python, C++, C, and Java{" "}
                            </b>
                            and I enjoy working across all aspects of coding.
                            <br />
                            <br />
                            My key areas of interest including developing
                            <b color="yellow">
                                {" "}
                                Full-stack Development, Mobile App Development, Game Development, Machine Learning, DevOps, Cybersecurity, Cloud Computing, Augmented Reality, Virtual Reality
                            </b>.
                            <br />
                            <br />
                            Whenever possible, I love to grind leetcode and building projects with <b color="yellow">Node.js</b> and modern frameworks like{" "}
                            <b color="yellow">React.js, Django, SwiftUI, Spring Boot</b>.
                        </p>
                    </Col>
                    <Col md={4} className="myAvatar">
                        <Tilt>
                            <img src={myImg} className="img-fluid" alt="avatar" />
                        </Tilt>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}












