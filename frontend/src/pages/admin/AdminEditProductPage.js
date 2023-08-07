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
  Image,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const deleteImgButtonStyle = {
  cursor: "pointer",
  position: "absolute",
  left: "5px",
  top: "-5px",
  transform: "scale(4)",
};

const AdminEditProductPage = () => {
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
          <h1>Edit a product</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formProductName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                required
                type="text"
                defaultValue="Xbox One X"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formProductDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="description"
                required
                as="textarea"
                rows={3}
                defaultValue="Product description"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formProductStock">
              <Form.Label>Amount in stock</Form.Label>
              <Form.Control
                name="productStock"
                required
                type="number"
                defaultValue="50"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formProductPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                name="productPrice"
                required
                type="number"
                defaultValue="$569"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCategory">
              <Form.Label>Category</Form.Label>
              <Form.Select required name="category" aria-label="category">
                <option value="">Choose a category</option>
                <option value="1">Consoles</option>
                <option value="2">Digital games</option>
                <option value="3">Gaming accesories</option>
                <option value="4">VR</option>
              </Form.Select>
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
              <Row>
                <Col style={{ position: "relative" }} xs={3}>
                  {" "}
                  <Image src="/images/category/games.jpg" fluid />
                  <i
                    style={deleteImgButtonStyle}
                    className="bi bi-x text-danger"
                  ></i>
                </Col>
                <Col style={{ position: "relative" }} xs={3}>
                  {" "}
                  <Image src="/images/category/games.jpg" fluid />
                  <i
                    style={deleteImgButtonStyle}
                    className="bi bi-x text-danger"
                  ></i>
                </Col>
              </Row>
              <Form.Control required type="file" multiple />
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

export default AdminEditProductPage;
