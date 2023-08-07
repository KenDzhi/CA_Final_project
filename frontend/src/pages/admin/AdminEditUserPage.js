import { useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminEditUserPage = () => {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container>
      <Row className="mt-5 justify-content-md-center">
        <Col md={1}>
          <Link to="/admin/users" className="btn btn-primary my-3">
            Go back
          </Link>
        </Col>
        <Col md={6}>
          <h1>Edit user details</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Label>First name</Form.Label>
              <Form.Control
                name="firstName"
                required
                type="text"
                defaultValue="Petras"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                name="lastName"
                required
                type="text"
                defaultValue="Petraitis"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>User email</Form.Label>
              <Form.Control
                name="email"
                required
                type="email"
                defaultValue="petras.petraitis@mail.lt"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCheckboxForAdminRights">
              <Form.Check
                name="isAdmin"
                type="checkbox"
                label="Is administrator?"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit changes
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminEditUserPage;
