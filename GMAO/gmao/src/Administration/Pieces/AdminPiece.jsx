import React, { useState } from 'react'
import Navbar from '../../Components/Navbar'
import AdministrationNav from '../AdministrationNav'
import PiecePopup from './PiecePopup'

export default function AdminPiece() {

  const[isPieceOpen, setPieceOpen] = useState(false);

  return (
    <div>
        <Navbar/>
        <AdministrationNav/>

        <div className="bg-gray-100 p-4 mx-10 mt-10">
            <div className="flex justify-between items-center">
            <h1 className="text-black text-2xl font-bold">Gestion des Pieces</h1>

            <button
                    className="bg-green-500 text-white px-4 py-2 rounded-md"
                    onClick={() => setPieceOpen(true)}
                >
                    Créer une Nouvelle Piece
                </button>
            </div>

            {isPieceOpen && <PiecePopup onClose={() => setPieceOpen(false)} />}

            <div className="bg-gray-100 p-1 mx-2 mt-10">
                    <div className="container mx-auto">
                    <table className="w-full bg-white shadow-md rounded-lg mt-8">
                        <thead>
                        <tr className="bg-gray-800 text-white">
                            <th className="text-left p-2">ID</th>
                            <th className="text-left p-2">Nom</th>
                            <th className="text-left p-2">Fabricant</th>
                            <th className="text-left p-2">Fournisseur</th>
                            <th className="text-left p-2">Description</th>
                            <th className="text-left p-2">Stock</th>
                        </tr>
                        </thead>

                        <tbody>
                            <tr className="border-t">
                            <td className="p-2">1</td>
                            <td className="p-2">Boulon qui tourne</td>
                            <td className="p-2">Heckler & Koch</td>
                            <td className="p-2">Heckler & Koch</td>
                            <td className="p-2">Simple boulon</td>
                            <td className="p-2">789</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>



    </div>
  )
}
