import React, { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authenticationService } from "../services/authenticatiion";
import { AuthContext } from "../contexts/AuthContext";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const { signup } = useContext(AuthContext);


  const history = useNavigate();
  function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    authenticationService
      .signup(username, email, password,confirmPassword)
      .then((res) => {
        setLoading(false);
        signup(res.data.key)
        history("/");
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message || error);
      });
  }

  return (
    <div>
      <header>Signup</header>

      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="text-input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="">Password</label>
        <input
          className="text-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="">Confirm Password</label>
        <input
          className="text-input"
          type="password"
          value={confirmPassword}
          onChange={(e) => setconfirmPassword(e.target.value)}
        />
        <label htmlFor="">Email</label>
        <input
          className="text-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit" loading={loading.toString()} disabled={loading}>
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
