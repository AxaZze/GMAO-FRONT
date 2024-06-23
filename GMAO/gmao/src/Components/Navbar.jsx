import React from 'react'

export default function Navbar() {
 
    return (
    <div>
        <nav className="bg-orange-500 text-white">
        <ul className="flex flex-row justify-between items-center px-4 py-4">
            <li>
            <a href="/" className="text-lg font-bold hover:text-black-500">Accueil</a>
            </li>
            <li>
            <a href="/Dashboard" className="text-lg font-medium hover:text-red-500">Dashboard</a>
            </li>
            <li>
            <a href="/Incidents" className="text-lg font-medium hover:text-red-500">Incidents</a>
            </li>
            <li>
            <a href="/Machines" className="text-lg font-medium hover:text-red-500">Machines</a>
            </li>
            <li>
            <a href="/Pieces" className="text-lg font-medium hover:text-red-500">Pieces</a>
            </li>
            <li>
            <a href="/Interventions" className="text-lg font-medium hover:text-red-500">Interventions</a>
            </li>
            <li>
            <a href="/Stock" className="text-lg font-medium hover:text-red-500">Stock</a>
            </li>
            <li>
            <a href="/Profil" className="text-lg font-medium hover:text-red-500">Profil</a>
            </li>
            <li>
            <a href="/Deconnect" className="text-lg font-medium hover:text-red-500">Déconnexion</a>
            </li>
        </ul>
        </nav>
    </div>
    
  )
}
