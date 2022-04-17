import { Button, Container } from "react-bootstrap";
import React from "react";
import { Form } from "react-bootstrap";
import "./Login.css";
import { useRef } from "react";

const Login = () => {
  const inputEmail = useRef("");
  const inputPass = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = inputEmail.current.value;
    const pass = inputPass.current.value;
    console.log(email, pass);
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
        <Button variant="primary" type="submit">
          Submit
        </Button>
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
