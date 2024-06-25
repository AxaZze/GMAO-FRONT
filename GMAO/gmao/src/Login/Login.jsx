import React, { useState } from 'react';
//import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const Navigate = useNavigate();
    const handleSubmit = async (event) => {
      event.preventDefault();
  /*
      try {
        const response = await axios.post('http://localhost:8080/user/connect', {
          email,
          password,
        });
  */
        const token = "CECIESTUNTOKEN";
        localStorage.setItem('token', token);
  
        // Redirection vers une page protégée après une connexion réussie
        
            
            Navigate('/')
        
        /*
      } catch (error) {
        console.error('Erreur de connexion:', error);
        // Afficher un message d'erreur à l'utilisateur
      }*/
    };






  return (
    <div className="container flex flex-col items-center justify-center min-h-screen">
      <div className="form-container bg-white border-2 border-orange-500 rounded-lg p-10">
        <div className="logo"></div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold" htmlFor="email">
              Adresse e-mail:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold" htmlFor="password">
              Mot de passe:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-bold p-2 rounded-md hover:bg-orange-600"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  )
}
