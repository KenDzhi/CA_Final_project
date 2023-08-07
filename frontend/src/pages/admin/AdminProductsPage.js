import { Button, Col, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import AdminLinksComponent from "../../components/admin/AdminLinksComponent";
import { LinkContainer } from "react-router-bootstrap";

const deleteProductButton = () => {
  if (window.confirm("Are you sure to delete this product?"))
    alert("Product was deleted");
};

const AdminProductsPage = () => {
  return (
    <Row className="m-5">
      <Col md={2}>
        <AdminLinksComponent />
      </Col>
      <Col md={10}>
        <h1>
          Product list:{" "}
          <LinkContainer to="/admin/create-new-product">
            <Button variant="primary" size="lg">
              Create new product
            </Button>
          </LinkContainer>
        </h1>

        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Product name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "Xbox One S 500GB", price: "$299", category: "Console" },
              { name: "God of War 4", price: "$49", category: "Digital games" },
              {
                name: "Xbox One S controller",
                price: "$69",
                category: "Accessories",
              },
            ].map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>
                  <LinkContainer to="/admin/edit-product">
                    <Button className="btn-sm">
                      <i class="bi bi-pencil-square"></i>
                    </Button>
                  </LinkContainer>
                  {" / "}
                  <Button
                    className="btn-sm danger"
                    variant="danger"
                    onClick={deleteProductButton}
                  >
                    <i class="bi bi-trash-fill"></i>
                  </Button>
                </td>
                <td>Card</td>
                <td>
                  <Link to="/admin/order-details">Go to order</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default AdminProductsPage;
