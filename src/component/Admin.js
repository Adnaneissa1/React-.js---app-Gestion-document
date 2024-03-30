import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../store/authSlice";
export default function Admin() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(logOut());
    navigate("/");
  };
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-content">
          <div className="container">
            <div className="navbar-top flex flex-between">
              <Link to="/admin" className="navbar-brand">
                <span className="text-regal-blue">Home Admin</span>
              </Link>
            </div>
            <div className="navbar-top flex flex-between">
              <Link to="/admin/user" className="navbar-brand">
                <span className="text-regal-blue">Users</span>
              </Link>
            </div>
            <div className="navbar-top flex flex-between">
              <Link to="/admin/user-password" className="navbar-brand">
                <span className="text-regal-blue">Changé password de user</span>
              </Link>
            </div>
            <div className="navbar-top flex flex-between">
              <Link to="/admin/user-commentaire" className="navbar-brand">
                <span className="text-regal-blue">
                  Consulter Commentaire de user
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div>
        <h1>ADMINSTRATEUR</h1>
        <h2>{user && <p>Bienvenue {user.nom}</p>}</h2>
        <button onClick={handleLogOut}>Déconnexion</button>
      </div>
    </div>
  );
}
