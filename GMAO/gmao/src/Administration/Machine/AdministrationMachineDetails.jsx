import React from 'react'
import Navbar from '../../Components/Navbar'
import AdministrationNav from '../AdministrationNav'
import { useParams } from 'react-router-dom';

export default function MachineDetails() {

  const { machineID } = useParams();
  console.log("Test");
  console.log(machineID)
  return (
    <div>
      <Navbar />
      <AdministrationNav />

      <div className="bg-gray-100 p-4 mx-10 mt-10">
        <h1 className="text-black text-2xl font-bold">Machine N° {machineID}</h1>
        <p> page permettant d'afficher les détails d'une machine.</p>
        <p>Besoin  d'avoir un CRUD</p>
        </div>

    </div>
  )
}
