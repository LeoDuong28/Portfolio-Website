import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn,  } from "react-icons/fa";


function Footer() {
    let date = new Date();
    let year = date.getFullYear();

    return (
        <Container fluid className="footer">
            <Row>
                <Col md="4" className="footer-copywright">
                    <h3>Developed and Designed by Leo Duong</h3>
                </Col>
                <Col md="4" className="footer-copywright">
                    <h3>Copyright © {year} LD</h3>
                </Col>
                <Col md="4" className="footer-body">
                    <ul className="footer-icons">
                        <li className="social-icons">
                            <a href="https://github.com/LeoDuong28" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                                <AiFillGithub />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a href="www.linkedin.com/in/leo-duong-836334280" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn />
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}


export default Footer;












