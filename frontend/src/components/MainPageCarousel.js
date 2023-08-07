import { Carousel } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const MainPageCarousel = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/carousel/carousel-vr.jpg"
          alt="VR products"
          style={{ height: "300px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <LinkContainer
            style={{
              cursor: "pointer",
              fontSize: "50px",
              color: "white",
              textShadow: "2px 2px black",
            }}
            to="/product-details"
          >
            <h3>Virtual reality</h3>
          </LinkContainer>

          <p
            style={{
              fontWeight: "bold",
              fontSize: "20px",
              color: "white",
              textShadow: "2px 2px black",
            }}
          >
            Emerge yourself into digital world with our VR products
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/carousel/carousel-consoles.jpg"
          alt="Gaming consoles"
          style={{ height: "300px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <LinkContainer
            style={{
              cursor: "pointer",
              fontSize: "50px",
              color: "white",
              textShadow: "2px 2px black",
            }}
            to="/product-details"
          >
            <h3>Gaming consoles</h3>
          </LinkContainer>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "20px",
              color: "white",
              textShadow: "2px 1px black",
            }}
          >
            Playstation? Xbox? Or maybe Nintendo? Here we have it all
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/carousel/carousel-accesories.png"
          alt="Gaming accesories"
          style={{ height: "300px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <LinkContainer
            style={{
              cursor: "pointer",
              fontSize: "50px",
              color: "white",
              textShadow: "2px 2px black",
            }}
            to="/product-details"
          >
            <h3>Gaming accesories</h3>
          </LinkContainer>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "20px",
              color: "white",
              textShadow: "2px 1px black",
            }}
          >
            All the things to enchance your gaming experience
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MainPageCarousel;
