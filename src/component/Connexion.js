import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from '../store/authSlice';
import './Connexion.css'
export default function Connexion() {
  const [loginValue, setLoginValue] = useState("");
  const [password, setPassword] = useState("");
  const users = useSelector(state => state.utilisateur.users);
  const user = users.find((u) => u.login === loginValue);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleConnexion = (e) => {
    e.preventDefault();
    if (!user || user.password !== password) {
      alert("Utilisateur non trouvé ou mot de passe incorrect");
      return;
    }
    switch (user.role) {
      case "membre":
        navigate("/membre");
        break;
      case "administrateur":
        navigate("/admin");
        break;
      case "modérateur":
        navigate("/moderateur");
        break;
      default:
        navigate("/");
        break;
    }
    dispatch(login(user));
  };
  return (
    <div className="container">
      <h1 className="heading">Connexion</h1>
      <form className="form" onSubmit={handleConnexion}>
        <label htmlFor="login">Login : </label>
        <input
          type="text"
          name="login"
          id="login"
          value={loginValue}
          onChange={(e) => setLoginValue(e.target.value)}
          placeholder="Login"
          className="input"
        />
        <br />
        <label htmlFor="password">Password : </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          className="input"
        />
        <br />
        <button type="submit" className="login-button">
          Se connecter
        </button>
      </form>
      <Link to="/registre">S'incrire</Link>
    </div>
  );
}
