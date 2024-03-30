import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDocument, addComment, searchComments } from "../store/comentaireSlice";
const DocumentAndCommentForm = () => {
  const [documentName, setDocumentName] = useState("");
  const [themeName, setThemeName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [selectedDocument, setSelectedDocument] = useState("");
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comment.commnentaires);
  const documents = useSelector((state) => state.comment.documents);
  const handleAddDocument = () => {
    const newDocument = {
      nom_document: documentName,
      nom_theme: themeName,
    };
    dispatch(addDocument(newDocument));
    setDocumentName("");
    setThemeName("");
  };
  const handleAddComment = () => {
    const newComment = {
      texte_commentaire: commentText,
      code_document: parseInt(selectedDocument),
    };
    dispatch(addComment(newComment));
    setCommentText("");
  };
  const handleSearchComments = () => {
    dispatch(searchComments({ documentName: "", themeName: "", username: "" })); 
  };
  return (
    <div>
      <h2>Add Document and Comment</h2>
      <label>
        Document Name:
        <input type="text" value={documentName} onChange={(e) => setDocumentName(e.target.value)} />
      </label>
      <label>
        Theme Name:
        <input type="text" value={themeName} onChange={(e) => setThemeName(e.target.value)} />
      </label>
      <button type="button" onClick={handleAddDocument}>
        Add Document
      </button>
      <label>
        Comment Text:
        <input type="text" value={commentText} onChange={(e) => setCommentText(e.target.value)} />
      </label>
      <label>
        Select Document:
        <select value={selectedDocument} onChange={(e) => setSelectedDocument(e.target.value)}>
          <option value="">Select a Document</option>
          {documents.map((doc) => (
            <option key={doc.code_document} value={doc.code_document}>
              {doc.nom_document}
            </option>
          ))}
        </select>
      </label>
      <button type="button" onClick={handleAddComment}>
        Add Comment
      </button>
      <button type="button" onClick={handleSearchComments}>
        Search Comments
      </button>
      <h2>All Comments</h2>
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
export default DocumentAndCommentForm;

