import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";
import { Link, useNavigate } from "react-router-dom";
import "./Registration.css";
export default function Registration() {
 const [login, setLogin] = useState("");
 const [nom, setNom] = useState("");
 const [password, setPassword] = useState("");
 const [confirmPassword, setConfirmPassword] = useState("");
 const [error, setError] = useState("");
 const dispatch = useDispatch();
 const navigate = useNavigate();
 const handleRegistre = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Confirmation de mot de passe incorrecte");
    } else if (login === "" || nom === "" || password === "" || confirmPassword === "") {
      setError("Veuillez remplir tous les champs!!!");
    } else {
      dispatch(
        addUser({
          login: login,
          nom: nom,
          password: password,
          role: "membre",
        })
      );
      navigate("/");
    }
 };
 return (
    <div className="registration-container">
      <h1>Inscription</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleRegistre} className="registration-form">
        <label>Login</label>
        <input
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <br />
        <label>Nom</label>
        <input
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <label>Confirmation Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <br />
        <input type="submit" value="Registre" />
      </form>
      <Link to="/">Connexion</Link>
    </div>
 );
}