import "./chatButton.css";

const UserChatComponent = () => {
  return (
    <>
      <input type="checkbox" id="checkboxForChat" />
      <label className="chatButton" htmlFor="checkboxForChat">
        <i className="bi bi-chat-square-text openChat"></i>
        <span className="position-absolute top-0 start-10 translate-middle p-2 bg-danger border-light rounded-circle"></span>
        <i className="bi bi-x-circle closeChat"></i>
      </label>

      <div className="chatContainer">
        <div className="chatHeader">
          <h2>Chat with us!</h2>
        </div>

        <div className="chatMessages">
          {Array.from({ length: 20 }).map((_, id) => {
            return (
              <div key={id}>
                <p>
                  <b>You:</b> Hello admin!
                </p>
                <p className="bg-primary p-3 ms-4 text-light rounded-pill">
                  <b>Support:</b> Hello user!
                </p>
              </div>
            );
          })}
        </div>

        <textarea
          id="userMessage"
          className="form-control"
          placeholder="Enter your message"
        ></textarea>

        <button className="btn btn-primary btn-block">Send!</button>
      </div>
    </>
  );
};

export default UserChatComponent;
