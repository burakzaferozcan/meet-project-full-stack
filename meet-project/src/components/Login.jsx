import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  axios.defaults.withCredentials=true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/userpage");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center  vh-100 vw-100">
        <div className="bg-white p-3 m-0 rounded w-75 ">
          <h2 className="d-flex justify-content-center">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>E-mail</strong>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter E-mail"
                autoComplete="off"
                className="form-control rounded-10"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                className="form-control rounded-10"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-success w-100 rounded-10 bg-primary">
              Login
            </button>
          </form>
          <br />
          <p className="d-flex justify-content-center">
          If you don't have an account, create one now
          </p>
          <Link
            to="/register"
            className="btn btn-default border-primary w-100 bg-light rounded-10 text decoration-none"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
