import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bloqueComment } from "../store/comentaireSlice";
import "./ListComment.scss";
import { Link } from "react-router-dom";
export default function ListeComment() {
  const comments = useSelector((state) => state.comment.commnentaires);
  const dispatch = useDispatch();

  const sortedComments = [...comments].sort(
    (a, b) => new Date(b.date_commentaire) - new Date(a.date_commentaire)
  );

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
          className="navbar-brande active">
          List Commantaire Bloqué
        </Link>
      </nav>
      <h1 className="text-center">Liste des commentaires</h1>
      <table>
        <thead>
          <tr>
            <th>Commentaire</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sortedComments.map((comment) => (
            <tr
              key={comment.id}
              className={
                comment.etat_commentaire === 2 ? "blocked-comment" : ""
              }
            >
              <td>{comment.texte_commentaire}</td>
              <td>{comment.date_commentaire}</td>
              <td>{comment.etat_commentaire}</td>
              <td>
                <button
                  onClick={() => dispatch(bloqueComment(comment.id))}>
                  Block
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
