import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      id:1,
      login: "user1",
      nom: "adnan",
      password: "adn123",
      role: "administrateur",
    },
    {
      id:2,
      login: "user2",
      nom: "mohamed",
      password: "m12",
      role: "membre",
    },
    {
      id:3,
      login: "user3",
      nom: "youssef",
      password: "y11",
      role: "modérateur",
    },
    {
      id: 4,
      login: "user4",
      nom: "abdelghani",
      password: "a22",
      role: "membre",
     },
     {
      id: 5,
      login: "user5",
      nom: "nizar",
      password: "a33",
      role: "membre",
     },
     {
      id: 6,
      login: "user6",
      nom: "rachid",
      password: "a44",
      role: "modérateur",
     },
     {
      id: 7,
      login: "user7",
      nom: "khadija",
      password: "a55",
      role: "membre",
     },
     {
      id: 8,
      login: "user8",
      nom: "sara",
      password: "s7",
      role: "membre",
     }
  ],
};

const userReducer = createSlice({
  name: "utilisateur",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    updateUserRole: (state, action) => {
      const { userId, newRole } = action.payload;
      const userToUpdate = state.users.find((user) => user.id === userId);
      if (userToUpdate) {
        userToUpdate.role = newRole;
      }
    },
    deleteUser: (state, action) => {
      const userId = action.payload;
      state.users = state.users.filter((user) => user.id !== userId);
    },
    resetPassword: (state, action) => {
      const { login, password } = action.payload;
      const userIndex = state.users.findIndex((user) => user.login === login);
      if (userIndex !== -1) {
        state.users[userIndex].password = password; 
      }
    },
  },
});

export default userReducer.reducer;
export const { addUser,resetPassword ,updateUserRole, deleteUser } = userReducer.actions;










