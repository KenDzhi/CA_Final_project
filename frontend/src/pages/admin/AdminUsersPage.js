import { Button, Col, Row, Table } from "react-bootstrap";
import AdminLinksComponent from "../../components/admin/AdminLinksComponent";
import { LinkContainer } from "react-router-bootstrap";

const deleteUser = () => {
  if (window.confirm("Are you sure?")) alert("User was deleted!");
};

const AdminUsersPage = () => {
  return (
    <Row className="m-5">
      <Col md={2}>
        <AdminLinksComponent />
      </Col>
      <Col md={10}>
        <h1>User list:</h1>

        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Email</th>
              <th>Is admin?</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {["bi bi-check-lg text-success", "bi bi-x-lg text-danger"].map(
              (item, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>Petras</td>
                  <td>Petraitis</td>
                  <td>pertras.petraitis@email.lt</td>
                  <td>
                    <i className={item} />
                  </td>
                  <td>
                    <LinkContainer to="/admin/edit-user">
                      <Button className="btn=sm">
                        <i className="bi bi-pencil-square"></i>
                      </Button>
                    </LinkContainer>
                    {"/"}
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={deleteUser}
                    >
                      <i className="bi bi-x-circle"></i>
                    </Button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default AdminUsersPage;
