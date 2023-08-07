import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom';

function AddedToCartAlertComponent() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert show={show} variant="success" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>A product was added to cart!</Alert.Heading>
        <p>
          <Button variant='success'>Go back</Button> {" "}
          
            <Link to="/cart">
            <Button variant='danger'>Go to cart</Button>
            </Link>
          
        </p>
      </Alert>
    );
  }
  return;
}

export default AddedToCartAlertComponent;