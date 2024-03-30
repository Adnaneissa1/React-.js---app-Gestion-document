import React from 'react';
import { Link } from 'react-router-dom';
import './AdminNavbar.css'; 

const Navbar = () => {
  return (
    <nav className="na">
      <Link to="/admin" className="navbar-br">
        Home Admin
      </Link>

      <Link to="/admin/user" className="navbar-br">
        Users
      </Link>

      <Link to="/admin/user-password" className="navbar-br">
        Change User Password
      </Link>

      <Link to="/admin/user-commentaire" className="navbar-br">
        View User Comments
      </Link>
    </nav>
  );
};

export default Navbar;
