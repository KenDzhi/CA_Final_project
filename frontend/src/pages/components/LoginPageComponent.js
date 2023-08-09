import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
  Spinner,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginPageComponent = ({ loginUserApiRequest }) => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget.elements;
    const email = form.email.value;
    const password = form.password.value;
    const doNotLogout = form.doNotLogout.checked;

    if (event.currentTarget.checkValidity() === true && email && password) {
      loginUserApiRequest(email, password, doNotLogout).then((res) =>
        console.log(res)
      );
    }

    setValidated(true);
  };

  return (
    <Container>
      <Row className="mt-5 justify-content-md-center">
        <Col md={6}>
          <h1>Login</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter your email"
                name="email"
              />
              <Form.Control.Feedback type="invalid">
                Please enter your email
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Enter your password"
                minLength={6}
                name="password"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCheckboxAlwaysLoggedin">
              <Form.Check
                type="checkbox"
                name="doNotLogout"
                label="Do not logout"
              />
            </Form.Group>

            <Row className="pb-2">
              <Col>
                You don't have an account?
                <Link to={"/register"}> Register </Link>
              </Col>
            </Row>

            <Button type="submit">
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Login
            </Button>

            <Alert show={true} variant="danger">
              User was not found. Check your email or password!
            </Alert>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPageComponent;
