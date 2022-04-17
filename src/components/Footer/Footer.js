import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Foorer.css";

const Footer = () => {
  return (
    <div className="my-3">
      <Container>
        <Row>
          <Col>
            <h4 className="text-success">Anne Sofie's Clinic</h4>
            <p className="lh-sm">Phone: 004554871620</p>
            <p className="lh-sm">Email: info@sunrise.com</p>
            <a
              className="text-decoration-none bg-success p-2 text-white"
              href="www.facebook.com"
            >
              <BsFacebook />
            </a>

            <span className="mx-2">
              <a
                className="text-decoration-none bg-success p-2 text-white"
                href="https://github.com/settings/applications/1882855"
              >
                <BsGithub />
              </a>
            </span>
            <a
              className="text-decoration-none bg-success p-2 text-white"
              href="https://www.linkedin.com/"
            >
              <BsLinkedin />
            </a>
          </Col>

          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
<h2>footer page</h2>;
