import { useState } from "react";
import "./forms.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //Form Submit Handler
  const fromSubmitHandler = (event) => {
    event.preventDefault();

    if (email.trim() === "") {
      return toast.error("Email is required");
    }

    if (username.trim() === "") {
      return toast.error("Username is required");
    }

    if (password.trim() === "") {
      return toast.error("Password is required");
    }

    if (password !== confirmPassword) {
      return toast.error("Passwords dont match");
    }
    console.log({ email, password, username });
  };
  return (
    <div className="form-wrapper">
      <ToastContainer theme="colored" />
      <form onSubmit={fromSubmitHandler} className="form">
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Email"
        />
        <input
          onChange={(e) => setUername(e.target.value)}
          value={username}
          type="text"
          placeholder="username"
        />
        <input
          onChange={(p) => setPassword(p.target.value)}
          value={password}
          type="password"
          placeholder="password"
        />
        <input
          onChange={(p) => setConfirmPassword(p.target.value)}
          value={confirmPassword}
          type="password"
          placeholder="Confirm Password"
        />
        <button className="form-btn">Register</button>
      </form>
    </div>
  );
};
export default Register;
