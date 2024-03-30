import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Connexion from './component/Connexion';
import Registration from './component/Registration';
import Admin from './component/Admin';
import Membre from './component/Membre';
import "./App.scss"
import Moderateur from './component/Moderateur';
import ListeComment from './Moderateur/ListeComment';
import ListCommBloque from './Moderateur/ListCommBloque';
import Users from './admin/Users'
import PasswordUser from './admin/PasswordUser';
import CommentUser from "./admin/CommentUser"
import DocumentMembre from './membre/DocumentMembre';
import MembreComment from './membre/MembreComment';
import PubMembre from './membre/PubMembre';
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Connexion/>} />
        <Route path='/registre' element={<Registration/>}/>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path="/admin/user" element={<Users/>}/>
        <Route path='/admin/user-password' element={<PasswordUser/>}/>
        <Route path='/admin/user-commentaire' element={<CommentUser/>}/>
        <Route path='/moderateur' element={<Moderateur/>}/>
        <Route path='/moderateur/list-commantaire' element={<ListeComment/>}/>
        <Route path='/moderateur/list-commantaire-bloqué' element={<ListCommBloque/>}/>
        <Route path='/membre' element={<Membre/>}/>
        <Route path='/membre/documents' element={<DocumentMembre/>}/>
        <Route path='/membre/publie' element={<PubMembre/>}/>
        <Route path='/membre/commentaires' element={<MembreComment/>}/>
        <Route/>
      </Routes>
      </BrowserRouter>
      </div>
  )
}
