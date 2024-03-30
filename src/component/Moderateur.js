import React from "react";
import { Link } from "react-router-dom";
import "./Moderateur.scss"
import { logOut } from "../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
export default function Moderateur() {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const handleLogOut = (e)=>{
    e.preventDefault();
    dispatch(logOut())
  }
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-content">
          <div className="container">
            <div className="navbar-top flex flex-between">
              <Link to="/moderateur" className="navbar-brand">
                <span className="text-regal-blue">Modérateur</span>
              </Link>
            </div>
            <div className="navbar-top flex flex-between">
              <Link to="/moderateur/list-commantaire" className="navbar-brand">
                <span className="text-regal-blue">List Commantaire</span>
              </Link>
            </div>
            <div className="navbar-top flex flex-between">
              <Link to="/moderateur/list-commantaire-bloqué" className="navbar-brand">
                <span className="text-regal-blue">List Commantaire Bloqué</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <h1>Modérateur</h1>
      {user && <h1>Bienvenue {user.nom} !</h1>}
      <button onClick={handleLogOut} style={{color:"blue"}} >
        <Link to="/">
          log out
        </Link>
      </button>
    </div>
  );
}
