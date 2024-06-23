import React from "react";
import Dashboard from "./Components/Dashboard";
import Homepage from "./Components/Homepage";
import Navbar from "./Components/Navbar";
import Profil from "./Components/Profil";
import Incidents from "./Components/Incidents";
import Stock from "./Components/Stock";
import Machines from "./Components/Machines";



import {BrowserRouter, Routes, Route} from "react-router-dom"





function App() {
  return (
    
    <div>
      
      <h1 className="text-3xl text-white font-bold">GMAO</h1>
      <Navbar />
      <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/Profil" element={<Profil/>} />
        <Route path="/Incidents" element={<Incidents/>} />
        <Route path="/Machines" elements={<Machines/>} />
        <Route path="/Stock" element={<Stock/>} />
      </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
