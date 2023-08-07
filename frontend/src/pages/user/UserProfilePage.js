import { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

const UserProfilePage = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const onChange = () => {
    const password = document.querySelector("input[name=password]");
    const confirm = document.querySelector("input[name=confirmPassword]");

    if (confirm.value === password.value) {
      confirm.setCustomValidity("");
    } else {
      confirm.setCustomValidity("Passwords does not match");
    }
  };

  return (
    <Container>
      <Row className="mt-5 justify-content-md-center">
        <Col md={6}>
          <h1>Change your profile details</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                disabled
                defaultValue="petras.petraitis@petras.lt"
                name="email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                defaultValue="Petras"
                name="name"
              />
              <Form.Control.Feedback type="invalid">
                Please enter your name
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                defaultValue="Petraitis"
                name="lastName"
              />
              <Form.Control.Feedback type="invalid">
                Please enter your last name
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your phone number"
                defaultValue=""
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your address (city/street/house number)"
                defaultValue=""
              />
              <Form.Text className="text-muted">
                Please use following format: City/Street/House number
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPostCode">
              <Form.Label>Post code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your post code"
                defaultValue=""
              />
              <Form.Text className="text-muted">
                Check your post code at{" "}
                <a href="www.post.lt/pasto-kodu-ir-adresu-paieska">
                  www.post.lt
                </a>
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Change your password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Enter your password"
                minLength={6}
                name="password"
                onChange={onChange}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid password
              </Form.Control.Feedback>
              <Form.Text className="text-muted">
                Password should have atleast 6 characters!
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formConfirmPassword">
              <Form.Label>Repeat your password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Repeat your password"
                minLength={6}
                name="confirmPassword"
                onChange={onChange}
              />
              <Form.Control.Feedback type="invalid">
                Both passwords should match!
              </Form.Control.Feedback>
            </Form.Group>

            <Button type="submit">Update</Button>
            <Alert show={true} variant="danger">
              User with a same email already exists!
            </Alert>
            <Alert show={true} variant="success">
              User was updated succesfully!
            </Alert>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfilePage;
