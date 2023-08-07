import { Container, Col, Row, Alert, ListGroup, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import CartItemComponent from "../components/CartItemComponent";

const CartPage = () => {
  return (
    <Container fluid>
      <Row className="mt-4">
        <Col md={8}>
          <h1>Shopping cart:</h1>
          <ListGroup variant="flush">
            {Array.from({ length: 3 }).map((item, i) => (
              <CartItemComponent key={i} />
            ))}
            <>
              <Alert variant="info">Your cart is empty.</Alert>
            </>
          </ListGroup>
        </Col>
        <Col md={4}>
          <ListGroup>
            <ListGroup.Item>
              <h3>Subtotal (2 items)</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Price: <span className="fw-bold">$9999</span>
            </ListGroup.Item>
            <LinkContainer to="/user/cart-details">
              <Button type="button">Proceed to checkout</Button>
            </LinkContainer>

            <ListGroup.Item></ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
