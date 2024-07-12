import React, { useState } from 'react'
import Navbar from '../../Components/Navbar'
import AdministrationNav from '../AdministrationNav'
import FabricantPopup from '../Fabricant/FabricantPopup'
import FournisseurPopup from './FournisseurPopup'


export default function Fournisseur() {

    const [isFournisseurOpen, setFournisseurOpen] = useState(false);
    const [isFabricantOpen, setFabricantOpen] = useState(false);


  return (
    <div>
    <Navbar />
    <AdministrationNav />

        <div className="bg-gray-100 p-4 mx-10 mt-10">
            <div className="flex justify-between items-center">
            <h1 className="text-black text-2xl font-bold">Gestion des Fabriquants</h1>

            <button
                    className="bg-green-500 text-white px-4 py-2 rounded-md"
                    onClick={() => setFabricantOpen(true)}
                >
                    Créer un nouveau Fabricant
                </button>
            </div>

            {isFabricantOpen && <FabricantPopup onClose={() => setFabricantOpen(false)} />}

            <div className="bg-gray-100 p-1 mx-2 mt-10">
                    <div className="container mx-auto">
                    <table className="w-full bg-white shadow-md rounded-lg mt-8">
                        <thead>
                        <tr className="bg-gray-800 text-white">
                            <th className="text-left p-2">ID</th>
                            <th className="text-left p-2">Nom</th>
                        </tr>
                        </thead>

                        <tbody>
                            <tr className="border-t">
                            <td className="p-2">1</td>
                            <td className="p-2">Heckler & Koch</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>





        <div className="bg-gray-100 p-4 mx-10 mt-10">
            <div className="flex justify-between items-center">
            <h1 className="text-black text-2xl font-bold">Gestion des Fournisseurs</h1>

            <button
                    className="bg-green-500 text-white px-4 py-2 rounded-md"
                    onClick={() => setFournisseurOpen(true)}
                >
                    Créer un nouveau Fournisseur
                </button>
            </div>

            {isFournisseurOpen && <FournisseurPopup onClose={() => setFournisseurOpen(false)} />}

            <div className="bg-gray-100 p-1 mx-2 mt-10">
                    <div className="container mx-auto">
                    <table className="w-full bg-white shadow-md rounded-lg mt-8">
                        <thead>
                        <tr className="bg-gray-800 text-white">
                            <th className="text-left p-2">ID</th>
                            <th className="text-left p-2">Nom</th>
                        </tr>
                        </thead>

                        <tbody>
                            <tr className="border-t">
                            <td className="p-2">1</td>
                            <td className="p-2">Heckler & Koch</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
  </div>
      

  )
}
