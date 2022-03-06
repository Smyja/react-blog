import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { history } from "../helpers";
import { authenticationService } from "../services/authenticatiion";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useNavigate();
  function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    authenticationService
      .login(username, email, password)
      .then((res) => {
        setLoading(false);
        history("/");
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message || error);
      });
  }
  console.log(authenticationService.isAuthenticated);
  if (authenticationService.isAuthenticated) {
    return <Navigate replace to="/" />;
  }
  return (
    <div>
      <header>Login</header>

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
        <label htmlFor="">Email</label>
        <input
          className="text-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit" loading={loading.toString()} disabled={loading}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
