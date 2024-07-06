import React, { useState } from 'react'
import AdministrationNav from './AdministrationNav'
import Navbar from '../Components/Navbar'
import PopupForm from './CompteForm';


export default function GestionCompte() {

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div>
    <Navbar />
    <AdministrationNav />

    <div className="bg-gray-100 p-4 mx-10 mt-10">
    <div className="flex justify-between items-center">
      <h1 className="text-black text-2xl font-bold">Gestion des comptes utilisateurs</h1>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded-md"
        onClick={() => setIsPopupOpen(true)}
      >
        Créer un nouvel utilisateur
      </button>
    </div>

    {isPopupOpen && <PopupForm onClose={() => setIsPopupOpen(false)} />}

      <div className="bg-gray-100 p-1 mx-2 mt-10">
            <div className="container mx-auto">
              <table className="w-full bg-white shadow-md rounded-lg mt-8">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="text-left p-2">ID</th>
                    <th className="text-left p-2">Nom</th>
                    <th className="text-left p-2">Prénom</th>
                    <th className="text-left p-2">Email</th>
                    <th className="text-left p-2">Telephone</th>
                    <th className="text-left p-2">Zone</th>
                    <th className="text-left p-2">Actif</th>
                  </tr>
                </thead>

                <tbody>
                    <tr className="border-t">
                      <td className="p-2">1</td>
                      <td className="p-2">Dupont</td>
                      <td className="p-2">JEan</td>
                      <td className="p-2">a@a.com</td>
                      <td className="p-2">0656892354</td>
                      <td className="p-2">A1</td>
                      <td className="p-2">1</td>
                    </tr>
                </tbody>
              </table>
          </div>
      </div>
      
    </div>
  </div>
  )
}
