import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  commnentaires: [
    {
      id:1,
      code_commentaire: 1,
      date_commentaire: "2023-12-01",
      texte_commentaire: "Premier commentaire",
      etat_commentaire: 1,
      code_document: 1,
      login: "user2",
    },
    {
      id:2,
      code_commentaire: 2,
      date_commentaire: "2023-12-02",
      texte_commentaire: "Deuxième commentaire",
      etat_commentaire: 1,
      code_document: 1,
      login: "user2",
    },
    {
      id:3,
      code_commentaire: 3,
      date_commentaire: "2023-12-08",
      texte_commentaire: "Troisiéme commentaire",
      etat_commentaire: 1,
      code_document: 2,
      login: "user2",
    },
    {
      id:4,
      code_commentaire: 4,
      date_commentaire: "2023-12-10",
      texte_commentaire: "Quatrième commentaire",
      etat_commentaire: 1,
      code_document: 4,
      login: "user5",
    },
    {
      id:5,
      code_commentaire: 5,
      date_commentaire: "2023-12-12",
      texte_commentaire: "Cinquième commentaire",
      etat_commentaire: 1,
      code_document: 5,
      login: "user5",
    },
  ],
  documents: [
    {
      code_document: 1,
      nom_document: "document 1",
      etat_document: 1,
      nom_theme: "Informatique",
      login: "user2",
    },
    {
      code_document: 2,
      nom_document: "document 2",
      etat_document: 0,
      nom_theme: "Informatique",
      login: "user2",
    },
    {
      code_document: 3,
      nom_document: "document 3",
      etat_document: 1,
      nom_theme: "Littérature",
      login: "user5",
     },
     {
      code_document: 4,
      nom_document: "document 4",
      etat_document: 0,
      nom_theme: "Histoire",
      login: "user5",
    },{
      code_document: 5,
      nom_document: "document 5",
      etat_document: 1,
      nom_theme: "Science",
      login: "user5",
    },
    {
      code_document: 6,
      nom_document: "document 6",
      etat_document: 1,
      nom_theme: "Mathématiques",
      login: "user8",
    },
    {
      code_document: 7,
      nom_document: "document 7",
      etat_document: 0,
      nom_theme: "Informatique",
      login: "user8",
    },
  ],
};

const commentReducer = createSlice({
  name: "comment",
  initialState,
  reducers: {
    addComment: (state, action) => {
      state.commnentaires.push(action.payload);
    },
    bloqueComment: (state, action) => {
      const commentId = action.payload;
      const commentToBlock = state.commnentaires.find(comment => comment.id === commentId);
      if (commentToBlock) {
        commentToBlock.etat_commentaire = 2;  
      }
    },
    debloquerComment : (state,action)=>{
      const idsToUnblock = action.payload;
      idsToUnblock.forEach((id) => {
        const commentToUnblock = state.commnentaires.find((cmt) => cmt.id === id);
        if (commentToUnblock) {
          commentToUnblock.etat_commentaire = 1; 
        }
      });
    },
    supprimerCommentaires: (state, action) => {
      const idsToDelete = action.payload;
      state.commnentaires = state.commnentaires.filter((comment) => !idsToDelete.includes(comment.id));
    },
    searchComments: (state, action) => {
      const { documentName, themeName, username } = action.payload;
      state.commnentaires = state.commnentaires.filter(comment => {
        const associatedDocument = state.documents.find(doc => doc.code_document === comment.code_document);
    
        const matchesDocument = associatedDocument && associatedDocument.nom_document.toLowerCase().includes(documentName.toLowerCase());
        const matchesTheme =  associatedDocument && associatedDocument.nom_theme.toLowerCase().includes(themeName.toLowerCase());
        const matchesUsername =  comment.login.toLowerCase().includes(username.toLowerCase());
    
        return matchesDocument && matchesTheme && matchesUsername;
      });
    },
    addDocument: (state, action) => {
      state.documents.push(action.payload);
    },
    
    
  }

});

export default commentReducer.reducer;
export const {addComment,bloqueComment,debloquerComment,supprimerCommentaires,searchComments,addDocument} = commentReducer.actions;