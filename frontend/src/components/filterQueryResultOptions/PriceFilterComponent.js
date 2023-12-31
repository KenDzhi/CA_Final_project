import { Form } from "react-bootstrap";

const PriceFilterComponent = () => {
  return (
    <>
      <Form.Label>
        <span className="fw-bold">Price no greater than:</span> 1000$
      </Form.Label>
      <Form.Range min={1} max={1000} step={5}/>
    </>
  );
};

export default PriceFilterComponent;
