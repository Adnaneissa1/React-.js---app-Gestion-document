import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../store/userSlice'; 
import AdminNavbar from './AdminNavbar';
const PasswordUser = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.utilisateur.users);

  const [searchLogin, setSearchLogin] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showResetForm, setShowResetForm] = useState(false);

  const handleSearch = () => {
    const user = users.find((user) => user.login === searchLogin);
    if (user) {
      setSearchLogin(user.login);
      setSuccessMessage(`Nom: ${user.nom}, Login: ${user.login}`);
      setErrorMessage('');
      setShowResetForm(true); 
    } else {
      setErrorMessage('Utilisateur non trouvé');
      setSuccessMessage('');
      setShowResetForm(false); 
    }
  };

  const handleResetPassword = () => {
    if (newPassword !== confirmPassword) {
      setErrorMessage('Les mots de passe ne correspondent pas');
      setSuccessMessage('');
    } else {
      dispatch(resetPassword({ login: searchLogin, password: newPassword }));
      setSearchLogin('');
      setNewPassword('');
      setConfirmPassword('');
      setErrorMessage('');
      setSuccessMessage('Mot de passe modifié avec succès');
    }
  };

  return (
    <div>
      <AdminNavbar/>
      <h2>Admin Panel - Réinitialisation de mot de passe</h2>
      <div>
        <input
          type="text"
          placeholder="Entrez le login"
          value={searchLogin}
          onChange={(e) => setSearchLogin(e.target.value)}
        />
        <button onClick={handleSearch}>Rechercher</button>
      </div>

      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
      {showResetForm && (
        <div>
          <h3>Réinitialisation du mot de passe pour {searchLogin}</h3>
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
        </div>
      )}
    </div>
  );
};

export default PasswordUser;
