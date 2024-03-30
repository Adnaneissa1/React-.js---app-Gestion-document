import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logOut } from '../store/authSlice';
export default function Membre() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = (e)=>{
    dispatch(logOut());
    navigate("/");
  }
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-content">
          <div className="container">
            <div className="navbar-top flex flex-between">
              <Link to="/membre" className="navbar-brand">
                <span className="text-regal-blue">Home Membre</span>
              </Link>
            </div>
            <div className="navbar-top flex flex-between">
              <Link to="/membre/documents" className="navbar-brand">
                <span className="text-regal-blue">Documents</span>
              </Link>
            </div>
            <div className="navbar-top flex flex-between">
              <Link to="/membre/commentaires" className="navbar-brand">
                <span className="text-regal-blue">Commentaires</span>
              </Link>
            </div>
            <div className="navbar-top flex flex-between">
              <Link to="/membre/publie" className="navbar-brand">
                <span className="text-regal-blue">Publiés</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div>
      <h1>Membre</h1>
      <h2>{user && <p>Bienvenue {user.nom}</p>}</h2>
        <button onClick={handleLogOut}>Log Out</button>
      </div>
    </div>
  );
}