import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const images = [
  "/images/category/consoles.jpg",
  "/images/category/rent.jpg",
  "/images/category/accesories.jpg",
  "/images/category/games.jpg",
  "/images/category/vr.jpg",
];

const categories = [
  "Consoles",
  "Rent a console",
  "Console accesories",
  "Digital games",
  "VR accesories",
];

const CategoryCardComponent = (category, i) => {
  return (
    <Container>
      <Row xs={1} md={2} className="g-0 mt-3 mb-5">
        {categories.map((category, i) => (
          <Card key={i}>
            <Card.Img variant="top" src={images[i]} fluid="true" />
            <Card.Body>
              <Card.Title>{category}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <LinkContainer to="/product-list">
                <Button variant="primary">Go to {category} category</Button>
              </LinkContainer>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
};

export default CategoryCardComponent;
