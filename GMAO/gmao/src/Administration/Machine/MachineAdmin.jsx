import React from 'react'
import Navbar from '../../Components/Navbar'
import AdministrationNav from '../AdministrationNav'


export default function MachineAdmin() {
  
  return (
    <div>
        <Navbar />
        <AdministrationNav />

        <div className="bg-gray-100 p-4 mx-10 mt-10">
            <div className="flex justify-between items-center">
            <h1 className="text-black text-2xl font-bold">Gestion des Machines</h1>
            </div>


            <div className="bg-gray-100 p-1 mx-2 mt-10">
                    <div className="container mx-auto">
                    <table className="w-full bg-white shadow-md rounded-lg mt-8">
                        <thead>
                        <tr className="bg-gray-800 text-white">
                            <th className="text-left p-2">ID</th>
                            <th className="text-left p-2">Modele</th>
                            <th className="text-left p-2">Fabricant</th>
                            <th className="text-left p-2">Fournisseur</th>
                            <th className="text-left p-2">Emplacement</th>
                            <th className="text-left p-2">Actif</th>
                        </tr>
                        </thead>

                        <tbody>
                            <tr className="border-t">
                            <td className="p-2">1</td>
                            <td className="p-2">AC-15296-BG900</td>
                            <td className="p-2">Dexter</td>
                            <td className="p-2">Lidll</td>
                            <td className="p-2">A1</td>
                            <td className="p-2">OUI</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>


    </div>
  )
}
