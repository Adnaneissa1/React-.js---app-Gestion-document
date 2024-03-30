import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchComments } from "../store/comentaireSlice";
const MembreComment = () => {
  const [theme, setTheme] = useState("");
  const [documentName, setDocumentName] = useState("");
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comment.commnentaires);
  const documents = useSelector((state) => state.document.documents);
  const handleSearch = () => {
    dispatch(searchComments({ documentName: documentName, themeName: theme, username: userName }));
  };
  return (
    <div>
      <nav className="NavB">
        <Link to="/membre" className="nvand">
          <span className="text-regal-blue">Home Membre</span>
        </Link>
        <Link to="/membre/documents" className="nvand">
          <span className="text-regal-blue">Documents</span>
        </Link>
        <Link to="/membre/commentaires" className="nvand">
          <span className="text-regal-blue">Commentaires</span>
        </Link>
        <Link to="/membre/publie" className="nvand">
          <span className="text-regal-blue">Publiés</span>
        </Link>
      </nav>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <input
          type="text"
          placeholder="Thème"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        />
        <input
          type="text"
          placeholder="Nom du document"
          value={documentName}
          onChange={(e) => setDocumentName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button type="submit">Rechercher</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Date</th>
            <th>Texte</th>
            <th>État</th>
            <th>Document</th>
            <th>Thème</th>
            <th>Login</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comment) => {
            const associatedDocument = documents.find((doc) => doc.code_document === comment.code_document);
            return (
              <tr key={comment.code_commentaire}>
                <td>{comment.code_commentaire}</td>
                <td>{comment.date_commentaire}</td>
                <td>{comment.texte_commentaire}</td>
                <td>{comment.etat_commentaire}</td>
                <td>{associatedDocument ? associatedDocument.nom_document : ""}</td>
                <td>{associatedDocument ? associatedDocument.nom_theme : ""}</td>
                <td>{comment.login}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default MembreComment;
