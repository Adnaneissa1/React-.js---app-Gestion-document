import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetPassword } from '../store/userSlice'; 
import { Link } from 'react-router-dom';
const PasswordReset = () => {
  const [selectedUser, setSelectedUser] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const users = useSelector((state) => state.utilisateur.users);
  const dispatch = useDispatch();

  const handleUserChange = (event) => {
    setSelectedUser(event.target.value);
    setNewPassword('');
    setConfirmPassword('');
    setErrorMessage('');
  };

  const handleResetPassword = () => {
    if (newPassword !== confirmPassword) {
      setErrorMessage('Les mots de passe ne correspondent pas');
    } else {
      dispatch(resetPassword({ login: selectedUser, password: newPassword }));
      setSelectedUser('');
      setNewPassword('');
      setConfirmPassword('');
      setErrorMessage('Mot de passe réinitialisé avec succès');
    }
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
      <h2>Réinitialisation de mot de passe</h2>
      <label>
        Sélectionnez un utilisateur :
        <select value={selectedUser} onChange={handleUserChange}>
          <option value="">Sélectionnez un utilisateur</option>
          {users.map((user) => (
            <option key={user.id} value={user.login}>{user.nom}</option>
          ))}
        </select>
      </label>
      {selectedUser && (
        <div>
          <h3>Réinitialisation du mot de passe pour {selectedUser}</h3>
          <div>
            <input
              type="password"
              placeholder="Nouveau mot de passe"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Confirmez le mot de passe"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button onClick={handleResetPassword}>Réinitialiser le mot de passe</button>
          {errorMessage && <p>{errorMessage}</p>}
        </div>
      )}
    </div>
  );
};

export default PasswordReset;
