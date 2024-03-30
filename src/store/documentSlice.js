import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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

const documentReducer = createSlice({
  name: "document",
  initialState,
  reducers: {},
});

export default documentReducer.reducer;
export const { addDocument} = documentReducer.actions;

