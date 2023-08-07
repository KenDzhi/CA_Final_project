import { ListGroup, Row, Col, Image, Button, Form } from "react-bootstrap";

const CartItemComponent = () => {
  return (
    <>
      <ListGroup.Item>
        <Row>
          <Col md={2}>
            <Image src="/images/category/consoles.jpg" fluid />
          </Col>
          <Col md={2}>
            Xbox
            <br />
            Controller
          </Col>
          <Col md={2}>
            <b>$99</b>
          </Col>
          <Col md={3}>
            <Form.Select>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </Form.Select>
          </Col>
          <Col md={3}>
            <Button
              type="button"
              variant="danger"
              onClick={() => window.confirm("Are you sure?")}
              className="bi bi-trash"
            ></Button>
          </Col>
        </Row>
      </ListGroup.Item>
      <br />
    </>
  );
};

export default CartItemComponent;
