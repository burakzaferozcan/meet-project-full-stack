import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex justify-content-center align-items-center  vh-100 vw-100">
      <div className="bg-white p-3 m-0 rounded w-75 ">
        <h2 className="d-flex justify-content-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Username</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              autoComplete="off"
              name="email"
              className="form-control rounded-10"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
          <button
            type="submit"
            className="btn btn-success w-100 rounded-10 bg-primary"
          >
            Sign Up
          </button>
        </form>
        <br />
        <p className="d-flex justify-content-center">
          Do you already have an account?
        </p>
        <Link
          to="/login"
          className="btn btn-default border-primary w-100 bg-light rounded-10 text decoration-none"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
export default Signup;
