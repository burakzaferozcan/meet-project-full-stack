import { useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function UserPage() {
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:3001/userpage")
      .then((result) => {
        console.log(result);

        if (result.data !== "Success") {
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <header className="header">
        <h1 className="header-h1">Meet-Project</h1>{" "}
      </header>
      <section className="section">
        <h3>Video calls and meetings for everyone.</h3>
        <div className="section-child">
          <div className="left">
            <div className="link-div">
              <h5> Create a new room and invite your friends.</h5>
              <Link to="/createroom" className="section-link">
                Create Room
              </Link>
            </div>
          </div>
          <div className="right">
            <div className="link-div">
              <h5>Join the room you were invited to.</h5>
              <Link to="/joinroom" className="section-link">
                Join Room
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UserPage;
