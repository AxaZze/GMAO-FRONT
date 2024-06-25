import React from 'react'
import Navbar from './Navbar';


export default function Incidents() {

  const data = [
    { id: 1, titre: "Problème d'impression", machine: "Imprimante A123", panne: "Impression floue" },
    { id: 2, titre: "Erreur disque dur", machine: "Serveur B456", panne: "Disque dur plein" },
    // ... plus de données
  ];

  return (

    <div>  
      <Navbar/>

      <div className="bg-gray-100 p-4 mx-10 mt-10">
          <h1 className="text-black text-2xl font-bold">Incidents en cours</h1>
            <div className="container mx-auto">
              <table className="w-full bg-white shadow-md rounded-lg mt-8">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="text-left p-2">ID</th>
                    <th className="text-left p-2">Titre</th>
                    <th className="text-left p-2">Machine</th>
                    <th className="text-left p-2">Panne</th>
                    <th className="text-right p-2">Détails</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((panne) => (
                    <tr key={panne.id} className="border-t">
                      <td className="p-2">{panne.id}</td>
                      <td className="p-2">{panne.titre}</td>
                      <td className="p-2">{panne.machine}</td>
                      <td className="p-2">{panne.panne}</td>
                      <td className="text-right p-2">
                        <a href={`/pannes/${panne.id}`} className="inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Détails</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
          </div>
      </div>

      <div className="bg-gray-100 p-4 mx-10 mt-10">
          <h1 className="text-black text-2xl font-bold">Incidents résolus</h1>
            <div className="container mx-auto">
              <table className="w-full bg-white shadow-md rounded-lg mt-8">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="text-left p-2">ID</th>
                    <th className="text-left p-2">Titre</th>
                    <th className="text-left p-2">Machine</th>
                    <th className="text-left p-2">Panne</th>
                    <th className="text-right p-2">Détails</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((panne) => (
                    <tr key={panne.id} className="border-t">
                      <td className="p-2">{panne.id}</td>
                      <td className="p-2">{panne.titre}</td>
                      <td className="p-2">{panne.machine}</td>
                      <td className="p-2">{panne.panne}</td>
                      <td className="text-right p-2">
                        <a href={`/pannes/${panne.id}`} className="inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Détails</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
          </div>
      </div>


    </div>
  )
}
