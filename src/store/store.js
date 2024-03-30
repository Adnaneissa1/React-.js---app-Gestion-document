import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import commentReducer from "./comentaireSlice";
import documentReducer from "./documentSlice";
import authReducer from "./authSlice"

const store = configureStore({
  reducer: {
    utilisateur: userReducer,
    comment: commentReducer,
    document: documentReducer,
    auth:authReducer,
  },
});

export default store;
