import React, { useRef } from "react";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();
  const inputName = useRef("");
  const inputEmail = useRef("");
  const inputPass = useRef("");

  const navigateRegister = () => {
    navigate("/login");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = inputName.current.value;
    const email = inputEmail.current.value;
    const pass = inputPass.current.value;
    // inputEmail.current.value = "";
  };
  return (
    <Container className="w-50 mx-auto my-5 p-4 login-container">
      <h1 className="text-success text-center mb-3">Registration New User</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control ref={inputName} type="text" placeholder="Enter name" />
        </Form.Group>
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
          <Form.Check
            className={agree ? "text-success" : "text-danger"}
            onClick={() => setAgree(!agree)}
            type="checkbox"
            label="Accept terms and condition"
          />
        </Form.Group>
        <Button className="px-4 mb-2" variant="primary" type="submit">
          Register
        </Button>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <div className="d-flex">
            <Form.Text>Already registered user?</Form.Text>
            <Link
              onClick={navigateRegister}
              className="text-decoration-none ps-2"
              to="/login"
            >
              Go to the login page
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

export default Register;
