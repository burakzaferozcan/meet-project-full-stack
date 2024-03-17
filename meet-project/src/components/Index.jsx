import React from "react";
import { Link } from "react-router-dom";
function Index() {
  return (
    <div>
      <header className="header">
        <h1 className="header-h1">Meet-Project</h1>{" "}
      </header>
      <section className="section">
        <h3>Video calls and meetings for everyone...</h3>
        <div className="section-child">
          <div className="left">
            <div className="link-div">
              <h5>Join the meeting securely without registration.</h5>
              <Link to="/createroom" className="section-link">
                Create Room
              </Link>

              <Link to="/joinroom" className="section-link">
                Join Room
              </Link>
            </div>
          </div>

          <div className="right">
            <div className="link-div">
              <h5>Create optional registration.</h5>
              <Link to="/login" className="section-link">
                Login
              </Link>

              <Link to="/register" className="section-link">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Index;
