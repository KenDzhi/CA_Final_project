import { Form } from "react-bootstrap";

const SortOptionsComponent = () => {
  return (
    <Form.Select aria-label="Default select example">
      <option>Sort by: (Select an option)</option>
      <option value="price_1">Price: Low to high</option>
      <option value="price_-1">Price: High to low</option>
      <option value="rating_-1">Customer rating</option>
      <option value="name_1">Name A-Z</option>
      <option value="name_-1">Name Z-A</option>
    </Form.Select>
  );
};

export default SortOptionsComponent;
