import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Document.css';
export default function DocumentMembre() {
  const [selectedTheme, setSelectedTheme] = useState('');
  const documents = useSelector((state) => state.document.documents);
  const handleThemeChange = (event) => {
    setSelectedTheme(event.target.value);
  };
  const filteredDocuments = documents.filter(
    (document) => document.nom_theme === selectedTheme
  );
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
      <h2>Recherche de documents par thème</h2>
      <label>
        Sélectionnez un thème :
        <select value={selectedTheme} onChange={handleThemeChange}>
          <option value="">Sélectionnez un thème</option>
          {Array.from(
            new Set(documents.map((document) => document.nom_theme))
          ).map((theme, index) => (
            <option key={index} value={theme}>
              {theme}
            </option>
          ))}
        </select>
      </label>
      {selectedTheme && (
        <div>
          <h3>Documents pour le thème : {selectedTheme}</h3>
          <ul>
            {filteredDocuments.map((document) => (
              <li key={document.code_document}>{document.nom_document}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}




