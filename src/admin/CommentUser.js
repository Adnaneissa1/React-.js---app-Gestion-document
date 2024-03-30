import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { supprimerCommentaires } from "../store/comentaireSlice";
import AdminNavbar from './AdminNavbar';
const CommentairesAdmin = () => {
  const [selectedMember, setSelectedMember] = useState("");
  const [selectedComments, setSelectedComments] = useState([]);
  const users = useSelector((state) => state.utilisateur.users);
  const commentaires = useSelector((state) => state.comment.commnentaires);
  const dispatch = useDispatch();

  const handleMemberChange = (event) => {
    setSelectedMember(event.target.value);
    setSelectedComments([]);
  };

  const handleCheckboxChange = (commentId) => {
    const isSelected = selectedComments.includes(commentId);
    if (isSelected) {
      setSelectedComments(selectedComments.filter((id) => id !== commentId));
    } else {
      setSelectedComments([...selectedComments, commentId]);
    }
  };

  const handleDeleteSelectedComments = () => {
    dispatch(supprimerCommentaires(selectedComments));
    setSelectedComments([]);
  };

  const renderMembersOptions = () => {
    return users
      .filter((user) => user.role === "membre")
      .map((user) => (
        <option key={user.id} value={user.login}>
          {user.nom}
        </option>
      ));
  };

  const renderComments = () => {
    const memberComments = commentaires.filter(
      (comment) => comment.login === selectedMember
    );

    return (
      <div>
        {memberComments.map((comment) => (
          <div key={comment.id} className="comment">
            <input
              type="checkbox"
              checked={selectedComments.includes(comment.id)}
              onChange={() => handleCheckboxChange(comment.id)}
            />
            <span>{comment.texte_commentaire}</span>
          </div>
        ))}
        {memberComments.length > 0 && (
          <button onClick={handleDeleteSelectedComments}>
            Supprimer les commentaires sélectionnés
          </button>
        )}
      </div>
    );
  };

  return (
    <div>
        <AdminNavbar/>
      <h2>Commentaires par membre</h2>
      <label>
        Sélectionnez un membre :
        <select value={selectedMember} onChange={handleMemberChange}>
          <option value="">Sélectionnez un membre</option>
          {renderMembersOptions()}
        </select>
      </label>
      {selectedMember && (
        <div>
          <h3>Commentaires de {selectedMember}</h3>
          {renderComments()}
        </div>
      )}
    </div>
  );
};

export default CommentairesAdmin;
