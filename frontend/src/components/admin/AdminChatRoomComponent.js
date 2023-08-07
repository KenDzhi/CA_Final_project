import { useState } from "react";
import { Button, Form, Toast } from "react-bootstrap";

const AdminChatRoomComponent = () => {
  const [toast1, closeToast1] = useState(true);
  const close1 = () => closeToast1(false);
  const [toast2, closeToast2] = useState(true);
  const close2 = () => closeToast2(false);

  return (
    <>
      <Toast show={toast1} onClose={close1} className="ms-4 mb-5">
        <Toast.Header>
          <strong className="me-auto">Chat with Petras Petraitis</strong>
        </Toast.Header>
        <Toast.Body>
          <div style={{ maxHeight: "500px", overflow: "auto" }}>
            {Array.from({ length: 15 }).map((_, i) => (
              <>
                <p className="bg-primary text-light rounded-pill p-2 ms-4">
                  <b>User wrote:</b>
                  Hello admins! Is anyone home?
                </p>
                <p>
                  <b>Admin wrote:</b>
                  Hello user! Yes, I'm here, do you have any questions?
                </p>
              </>
            ))}
          </div>
          <Form>
            <Form.Group className="mb-3" controlId="adminsChat">
              <Form.Label>Reply to a user</Form.Label>
              <Form.Control as="textarea" rows={2} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send!
            </Button>
          </Form>
        </Toast.Body>
      </Toast>

      <Toast show={toast2} onClose={close2} className="ms-4 mb-5">
        <Toast.Header>
          <strong className="me-auto">Chat with Petras Petraitis</strong>
        </Toast.Header>
        <Toast.Body>
          <div style={{ maxHeight: "500px", overflow: "auto" }}>
            {Array.from({ length: 15 }).map((_, i) => (
              <>
                <p className="bg-primary text-light rounded-pill p-2 ms-4">
                  <b>User wrote:</b>
                  Hello admins! Is anyone home?
                </p>
                <p>
                  <b>Admin wrote:</b>
                  Hello user! Yes, I'm here, do you have any questions?
                </p>
              </>
            ))}
          </div>
          <Form>
            <Form.Group className="mb-3" controlId="adminsChat">
              <Form.Label>Reply to a user</Form.Label>
              <Form.Control as="textarea" rows={2} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send!
            </Button>
          </Form>
        </Toast.Body>
      </Toast>
    </>
  );
};

export default AdminChatRoomComponent;
