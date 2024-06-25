import React from "react";
import Dashboard from "./Components/Dashboard";
import Homepage from "./Components/Homepage";
import Profil from "./Components/Profil";
import Incidents from "./Components/Incidents";
import Stock from "./Components/Stock";
import Machines from "./Components/Machines";
import Login from "./Login/Login";



import {BrowserRouter, Routes, Route} from "react-router-dom"





function App() {
  return (
    
    <div>
      
      
      <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/Profil" element={<Profil/>} />
        <Route path="/Incidents" element={<Incidents/>} />
        <Route path="/Machines" elements={<Machines/>} />
        <Route path="/Stock" element={<Stock/>} />
        <Route path="/Login" element={<Login/>} />
      </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
