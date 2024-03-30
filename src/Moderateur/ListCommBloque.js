import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { debloquerComment } from "../store/comentaireSlice";
import "./ListComment.scss";
import { Link } from "react-router-dom";

export default function CommentairesBloquesForm() {
  const comments = useSelector((state) =>
    state.comment.commnentaires.filter(
      (comment) => comment.etat_commentaire === 2
    )
  );
  const dispatch = useDispatch();
  const [selectedComments, setSelectedComments] = useState([]);

  const handleCheckboxChange = (commentId) => {
    const isSelected = selectedComments.includes(commentId);
    if (isSelected) {
      setSelectedComments(selectedComments.filter((id) => id !== commentId));
    } else {
      setSelectedComments([...selectedComments, commentId]);
    }
  };

  const handleDebloquerClick = () => {
    dispatch(debloquerComment(selectedComments));
    setSelectedComments([]);
  };

  return (
    <div>
      <nav className="nav">
        <Link to="/moderateur" className="navbar-brande">
          Modérateur
        </Link>
        <Link to="/moderateur/list-commantaire" className="navbar-brande">
          List Commantaire
        </Link>
        <Link
          to="/moderateur/list-commantaire-bloqué"
          className="navbar-brande active"
        >
          List Commantaire Bloqué
        </Link>
      </nav>

      <h2 className="text-center">Commentaires bloqués</h2>
      <form>
        <table>
          <thead>
            <tr>
              <th>Commentaire</th>
              <th>Date</th>
              <th>Action</th>
              <th>Sélectionner</th>
            </tr>
          </thead>
          <tbody>
            {comments.map((comment) => (
              <tr key={comment.id}>
                <td>{comment.texte_commentaire}</td>
                <td>{comment.date_commentaire}</td>
                <td>
                  <button
                    onClick={() => dispatch(debloquerComment([comment.id]))}
                  >
                    Débloquer
                  </button>
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedComments.includes(comment.id)}
                    onChange={() => handleCheckboxChange(comment.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="button" onClick={handleDebloquerClick}>
          Débloquer les commentaires sélectionnés
        </button>
      </form>
    </div>
  );
}
