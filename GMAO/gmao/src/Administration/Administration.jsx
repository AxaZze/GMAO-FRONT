import React from 'react'
import Navbar from '../Components/Navbar'
import AdministrationNav from './AdministrationNav'

export default function Administration() {
  return (
    <div>
      <Navbar />
      <AdministrationNav />
      
      <div className="bg-gray-100 p-4 mx-10 mt-10">
        <h1 className="text-black text-2xl font-bold">Note de version - v0.X</h1>
        <p></p> <br/>


        <h1 className="text-black text-2xl font-bold">Note de version - v0.2</h1>
        <p>
          - Mise en place page de connexion utilisateur <br/>
          - Mise en place sécurisation de l'accès à l'application <br/>
          - Mise en place page de Profil <br/>
          - Mise en place bouton de déconnexion <br/>
          
        </p> <br/>



        <h1 className="text-black text-2xl font-bold">Note de version - v0.1</h1>
        <p>
          - Initalialisation du Projet <br/>
          - Mise en place architecture simple <br/>
          - Mise en place menu de navigation global
        </p>
      </div>
    </div>
  )
}
