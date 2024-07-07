import React from "react";
import Dashboard from "./Components/Dashboard";
import Homepage from "./Components/Homepage";
import Profil from "./Components/Profil";
import Incidents from "./Incidents/Incidents";
import Stock from "./Components/Stock";
import Materiel from "./Components/Materiel";
import Login from "./Login/Login";
import Piece from "./Piece/Piece";

// Administration
import Administration from "./Administration/Administration";
import GestionCompte from "./Administration/GestionCompte";

import {BrowserRouter, Routes, Route} from "react-router-dom"
import Fournisseur from "./Administration/Fournisseur";






function App() {
  return (
    
    <div>
      
      
      <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/Profil" element={<Profil/>} />
        <Route path="/Incidents" element={<Incidents/>} />
        <Route path="/Materiel" element={<Materiel/>} />
        <Route path="/Stock" element={<Stock/>} />
        <Route path="/Login" element={<Login/>} />  
        <Route path="/Pieces" element={<Piece />} />

        [Pages d'administration]
        <Route path="/Administration" element={<Administration/>} />
        <Route path="/Administration/GestionCompte" element={<GestionCompte/>} />
        <Route path="/Administration/FournisseursFabriquants" element={<Fournisseur/>} />
      </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
