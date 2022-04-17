import { Button, Container } from "react-bootstrap";
import React from "react";
import { Form } from "react-bootstrap";
import "./Login.css";
import { useRef } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const inputEmail = useRef("");
  const inputPass = useRef("");

  const navigateRegister = () => {
    navigate("/register");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = inputEmail.current.value;
    const pass = inputPass.current.value;
    // inputEmail.current.value = "";
  };
  return (
    <Container className="w-50 mx-auto my-5 p-5 login-container">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={inputEmail}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={inputPass}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button className="px-4 mb-2" variant="primary" type="submit">
          Login
        </Button>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <div className="d-flex">
            <Form.Text>New to Anne Sofie's clinic?</Form.Text>
            <Link
              onClick={navigateRegister}
              className="text-decoration-none ps-2"
              to="/register"
            >
              Please register here
            </Link>
          </div>
        </Form.Group>
      </Form>
      <div className="login-divider">
        <div
          style={{ height: "1px", backgroundColor: "green", width: "50%" }}
        ></div>
        <p className="divider-position">or</p>
        <div
          style={{ height: "1px", backgroundColor: "green", width: "50%" }}
        ></div>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center ">
        <button className="w-50 my-2 btn-success">Google SignIn</button>
        <button className="w-50 btn-danger">Github SignIn</button>
      </div>
    </Container>
  );
};

export default Login;
