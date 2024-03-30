import React, { useState } from "react";
import { updateUserRole, deleteUser } from "../store/userSlice";
import { useSelector, useDispatch } from "react-redux";
import './Users.css'
import AdminNavbar from "./AdminNavbar";
const Users = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [newRole, setNewRole] = useState(''); 
  const users = useSelector((state) => state.utilisateur.users);
  const roles = users.map(user => user.role);
  const uniqueRoles = [...new Set(roles)];
  const dispatch = useDispatch();

  const navigate = (direction) => {
    let newIndex = currentIndex;

    switch (direction) {
      case "first":
        newIndex = 0;
        break;
      case "previous":
        newIndex = Math.max(0, currentIndex - 1);
        break;
      case "next":
        newIndex = Math.min(users.length - 1, currentIndex + 1);
        break;
      case "last":
        newIndex = users.length - 1;
        break;
      default:
        break;
    }

    setCurrentIndex(newIndex);
  };

  const handleRoleChange = (userId) => {
    if (newRole) {
      dispatch(updateUserRole({ userId, newRole }));
      setNewRole(''); 
    }
  };
  
  const handleDelete = (userId) => {
    dispatch(deleteUser(userId));
    setCurrentIndex(0);
  };

  const currentUser = users[currentIndex];

  return (
    <div>
      <AdminNavbar/>
    <div className="users-container">
      <h2>Formulaire de gestion des utilisateurs</h2>
      {currentUser && (
        <div className="from">
          <h3>Nom: {currentUser.nom}</h3>
          <p>Login: {currentUser.login}</p>
          <p>Rôle: {currentUser.role}</p>
          <select
            value={newRole}
            onChange={(e) => setNewRole(e.target.value)}
          >
           <option value="">Sélectionner un rôle</option>
            {uniqueRoles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
          <button onClick={() => handleRoleChange(currentUser.id)}>Modifier le rôle</button><br/>
          <button onClick={() => handleDelete(currentUser.id)}>Supprimer</button>
        </div>
      )}
      <div className="buttons">
        {users.length > 0 && (
          <div>
            <span>
              Utilisateur {currentIndex + 1} de {users.length}
            </span>
            <button onClick={() => navigate("first")}>Premier</button>
            <button onClick={() => navigate("previous")}>Précédent</button>
            <button onClick={() => navigate("next")}>Suivant</button>
            <button onClick={() => navigate("last")}>Dernier</button>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Users;
