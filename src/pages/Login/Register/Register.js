import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import auth from "../../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import SignGoogle from "../SignGoogle/SignGoogle";

const Register = () => {
  const [createUserWithEmailAndPassword, user, createerror] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, error] = useUpdateProfile(auth);

  const navigate = useNavigate();
  if (user) {
    console.log(user);
  }

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSignUpSibmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const phone = e.target.phone.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name, phoneNumnber: phone });
    console.log("updating");

    navigate(from, { replace: true });
  };

  return (
    <Container className="mb-5">
      <h1 className="text-primary text-center mt-4">Registration Form</h1>
      <Row className="mt-3">
        <Col
          sm={12}
          md={6}
          className="d-flex justify-content-center sign-up-images"
        >
          <img
            src="https://i.ibb.co/jT7DbtY/signup.jpg"
            className="w-100 h-100"
            alt="Sign up images"
          />
        </Col>
        <Col sm={12} md={6} className=" shadow-lg rounded p-4">
          <Form onSubmit={handleSignUpSibmit}>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
              <Form.Label column sm="2">
                Name
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" name="name" placeholder="Your Name" />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextphone"
            >
              <Form.Label column sm="2">
                PHone
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Your email"
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2"></Form.Label>
              <Col sm="10">
                <Button variant="primary" type="submit">
                  Sign UP
                </Button>
              </Col>
            </Form.Group>
            <small className="">
              Already Have an account? <Link to="/login">Please Login</Link>
            </small>
          </Form>
          <div className="d-flex align-items-center justify-content-center my-3">
            <div>------------------</div>
            <p className="m-0 px-2">Or</p>
            <div>------------------</div>
          </div>
          <div className="d-flex justify-content-center">
            <SignGoogle></SignGoogle>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
