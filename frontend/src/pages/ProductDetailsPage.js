// import { useParams } from "react-router-dom";
import {
  Row,
  Col,
  Container,
  Image,
  ListGroup,
  ListGroupItem,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import AddedToCartAlertComponent from "../components/AddedToCartAlertComponent";
import { Rating } from "react-simple-star-rating";

const ProductDetailsPage = () => {
  //   const { id } = useParams();
  //   console.log(id); bus naudojamas dinaminiam produktu loadinimui

  return (
    <Container>
      <AddedToCartAlertComponent />

      <Row className="mt-5">
        <Col md={4}>
          <Image fluid src="/images/category/consoles.jpg" />
          <Image fluid src="/images/category/consoles.jpg" />
          <Image fluid src="/images/category/consoles.jpg" />
          <Image fluid src="/images/category/consoles.jpg" />
        </Col>

        <Col md={8}>
          <Row>
            <Col md={8}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h1>Product name:</h1>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating readonly size={20} initialValue={4} />
                  (1)
                </ListGroup.Item>
                <ListGroup.Item>
                  Price <span className="fw-bold">$999</span>
                </ListGroup.Item>
                <ListGroupItem>
                  Description Description DescriptionDescription
                  DescriptionDescription Description Description Description
                  Description Description v Description vDescriptionDescription
                  Description{" "}
                </ListGroupItem>
              </ListGroup>
            </Col>
            <Col md={4}>
              <ListGroup>
                <ListGroup.Item>Availability: in stock</ListGroup.Item>
                <ListGroup.Item>
                  Price <span className="fw-bold">$999</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  Quantity:
                  <Form.Select size="lg" aria-label="Select a quantity">
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                  </Form.Select>
                </ListGroup.Item>
                <ListGroupItem>
                  <Button variant="danger">Add to cart</Button>
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
          <Row>
            <Col className="mt-5">
              <h5>Reviews</h5>
              <ListGroup variant="flush">
                {Array.from({ length: 5 }).map((item, i) => (
                  <ListGroup.Item key={i}>
                    Petras Petraitis <br />
                    <Rating readonly size={20} initialValue={5} />
                    <br />
                    2023-08-01 
                    <br />
                    The product is awesome, would recomend to a friend 5/5 stars
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
          <hr />
          Send review form
          <Alert variant="danger">Login to leave a review</Alert>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              
              <Form.Label>Write your review</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Select aria-label="rating">
              <option>Select your rating</option>
              <option value={5}>Five</option>
              <option value={4}>Four</option>
              <option value={3}>Three</option>
              <option value={2}>Two</option>
              <option value={1}>One</option>
            </Form.Select>
            <Button className="mb" variant="primary">Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetailsPage;
