import CodeBlock from './CodeBlock';
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Home2 from "./Home2";
import Type from "./Type";
import Techstack from "../About/Techstack";
import Github from "../About/Github";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


function Home1() {
    return (
        <section>
            <Container fuild className="home-section" id="home">
                <Container className="home-content">
                    <Row>
                        <Col md={7} style={{ paddingBottom: 10 }}>
                            <CodeBlock />
                        </Col>
                        <Col md={7} className="home-header">
                            <h1 style={{ paddingBottom: 15 }} className="heading">
                                Hello!{" "}
                                <span className="wave" role="img" aria-labelledby='wave'>
                                    👋🏻
                                </span>
                            </h1>

                            <h1 className='heading-name'>
                                I'm
                                <strong className='main-name'> Leo Duong </strong>
                            </h1>

                            <div style={{ padding: 50, textAlign: "left" }}>
                                <Type />
                            </div>
                        </Col>

                        <Col md={5} style={{ paddingBottom: 20 }}>
                            <img src={homeLogo} alt="home pic" className='img-fuild' style={{ maxHeight: "450px" }} />
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Home2 />

            <Container>
                <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
                    <Col md={12} className="home-about-social">
                        <h1>Connect With Me On</h1>
                        <p>
                            Please <span color='yellow'>contact</span> me on
                        </p>
                        <ul className='home-about-social-links'>
                            <li className='social-icons'>
                                <a href='https://github.com/LeoDuong28' target='_blank' rel="noreferrer" className='icon-colour home-social-icons'>
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className='social-icons'>
                                <a href='www.linkedin.com/in/leo-duong-836334280' target='_blank' rel='noreferrer' className='icon-colour home-social-icons'>
                                <FaLinkedinIn />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    );


}


export default Home1;
















