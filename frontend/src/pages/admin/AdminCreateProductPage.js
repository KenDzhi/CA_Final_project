import { useState } from "react";
import {
  Col,
  Container,
  Row,
  Form,
  Button,
  CloseButton,
  Table,
  Alert,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminCreateProductPage = () => {
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
          <Link to="/admin/products" className="btn btn-primary my-3">
            Go back
          </Link>
        </Col>
        <Col md={6}>
          <h1>Create a new product</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formProductName">
              <Form.Label>Name</Form.Label>
              <Form.Control name="name" required type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formProductDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="description"
                required
                as="textarea"
                rows={3}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formProductStock">
              <Form.Label>Amount in stock</Form.Label>
              <Form.Control name="productStock" required type="number" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formProductPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control name="productPrice" required type="number" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCategory">
              <Form.Label>
                Category <CloseButton />(<small>remove selected</small>)
              </Form.Label>
              <Form.Select required name="category" aria-label="category">
                <option value="">Choose a category</option>
                <option value="1">Consoles</option>
                <option value="2">Digital games</option>
                <option value="3">Gaming accesories</option>
                <option value="4">VR</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formNewCategory">
              <Form.Label>Or create a new category </Form.Label>
              <Form.Control name="newCategory" type="text" />
            </Form.Group>

            <Row className="mt-5">
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formAttributes">
                  <Form.Label>Choose an attribute and set value</Form.Label>
                  <Form.Select
                    name="attributeName"
                    aria-label="attributeSelect"
                  >
                    <option>Choose an attribute</option>
                    <option value="red">Color</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formAttributeValue">
                  <Form.Label>Attribute value</Form.Label>
                  <Form.Select
                    name="attributeValue"
                    aria-label="attributeValue"
                  >
                    <option>Choose attribute value</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Table hover>
                <thead>
                  <tr>
                    <th>Attribute</th>
                    <th>Value</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>attribute</td>
                    <td>value</td>
                    <td>
                      <CloseButton />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formNewAttribute">
                  <Form.Label>Create new attribute</Form.Label>
                  <Form.Control
                    disabled={false}
                    placeholder="first choose or create a category"
                    name="newAttribute"
                    type="text"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formNewAttributeValue">
                  <Form.Label>Create new attribute</Form.Label>
                  <Form.Control
                    disabled={false}
                    placeholder="first choose or create a category"
                    name="newAttributeValue"
                    type="text"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Alert variant="primary">
              After typing attribute key and value, press enter on one of these
              fields
            </Alert>

            <Form.Group className="mb-3 mt-3" controlId="formProductImages">
              <Form.Label>Images</Form.Label>
              <Form.Control required type="file" multiple />
            </Form.Group>
            <Button variant="primary" type="submit">
              Create
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminCreateProductPage;
