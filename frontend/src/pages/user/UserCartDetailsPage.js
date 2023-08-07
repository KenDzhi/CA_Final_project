import {
    Container,
    Row,
    Col,
    Alert,
    Form,
    ListGroup,
    Button,
  } from "react-bootstrap";
  import CartItemComponent from "../../components/CartItemComponent";
  
  const UserCartDetailsPage = () => {
    return (
      <Container fluid>
        <Row className="mt-4">
          <h1>Cart details</h1>
          <Col md={8}>
            <br />
            <Row>
              <Col md={6}>
                <h2>Shipping</h2>
                <b>Name:</b> Petras Petraitis <br />
                <b>Address:</b> Anykščiai, Statybininkų g. 45-5 <br />
                <b>Phone no.:</b> +37067123456
                <br />
              </Col>
              <Col md={6}>
                <h2>Payment method</h2>
                <Form.Select>
                  <option value="card">Payment online</option>
                  <option value="onDelivery">Payment on delivery</option>
                </Form.Select>
              </Col>
              <Row>
                <Col>
                  <Alert className="mt-3" variant="danger">
                    Not delivered. In order to make your order, fill out your profile details like address, phone, etc.
                  </Alert>
                </Col>
                <Col>
                  <Alert className="mt-3" variant="success">
                    Not paid yet
                  </Alert>
                </Col>
              </Row>
            </Row>
            <br />
            <h2>Ordered items</h2>
            <ListGroup variant="flush">
              {Array.from({ length: 3 }).map((item, i) => (
                <CartItemComponent key={i} />
              ))}
            </ListGroup>
          </Col>
          <Col md={4}>
            <ListGroup>
              <ListGroup.Item>
                <h3>Order summary</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                Items price: <span className="fw-bold">$999</span>
              </ListGroup.Item>
              <ListGroup.Item>
                Shipping: <span className="fw-bold">Included</span>
              </ListGroup.Item>
              <ListGroup.Item className="text-danger">
                Total price: <span className="fw-bold">$99999</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="d-grid gap-2">
                  <Button size="lg" variant="danger" type="button">
                    Pay for the order
                  </Button>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default UserCartDetailsPage;
  