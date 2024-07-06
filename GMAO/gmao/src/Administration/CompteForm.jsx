import React, { useState } from 'react';

const PopupForm = ({ onClose }) => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [motdepasse, setMotDePasse] = useState('');
  const [emplacement, setEmplacement] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Envoyer les données du nouvel utilisateur à votre API ou base de données
    // ...

    onClose();
    window.location.reload()
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-4">
      <h2 className="text-gray-800 text-lg font-bold mb-4">Créer un nouvel utilisateur</h2>

      <form onSubmit={handleSubmit}>
  <div className="mb-2">
    <label htmlFor="nom" className="block text-gray-700">Nom</label>
    <input
      type="text"
      id="nom"
      className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={nom}
      onChange={(e) => setNom(e.target.value)}
    />
  </div>

  <div className="mb-2">
    <label htmlFor="prenom" className="block text-gray-700">Prénom</label>
    <input
      type="text"
      id="prenom"
      className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={prenom}
      onChange={(e) => setPrenom(e.target.value)}
    />
  </div>

  <div className="mb-2">
    <label htmlFor="email" className="block text-gray-700">Email</label>
    <input
      type="email"
      id="email"
      className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>

  <div className="mb-2">
    <label htmlFor="telephone" className="block text-gray-700">Téléphone</label>
    <input
      type="tel" 
      id="telephone"
      className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={telephone}
      onChange={(e) => setTelephone(e.target.value)}
    />
  </div>

  <div className="mb-2">
    <label htmlFor="motdepasse" className="block text-gray-700">Mot de passe</label>
    <input
      type="text" 
      id="motdepasse"
      className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={motdepasse}
      onChange={(e) => setMotDePasse(e.target.value)} // Assuming motDePasse state variable
    />
  </div>

  <div className="mb-2">
    <label htmlFor="emplacement" className="block text-gray-700">Emplacement</label>
    <input
      type="text" 
      id="emplacement"
      className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={emplacement}
      onChange={(e) => setEmplacement(e.target.value)}
    />
  </div>

  <div className="mb-2">
    <label htmlFor="role" className="block text-gray-700">Rôle</label>
    <select
      id="role"
      className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={role}
      onChange={(e) => setRole(e.target.value)}
    >
      <option value="UTILISATEUR">UTILISATEUR</option>
      <option value="ADMIN">ADMIN</option>
      <option value="TECH">TECH</option>
      <option value="RESP_TECH">RESP_TECH</option>
      <option value="RESP_PROD">RESP_PROD</option>
      <option value="CHEF_EQUIP">CHEF_EQUIP</option>
    </select>
  </div>

  <div className="flex justify-center items-center mt-2">


  <button
    type="submit"
    className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
  >
    Créer
  </button>

  <button
    type="button"
    className="bg-red-500 text-gray-700 px-4 py-2 rounded-md"
    onClick={onClose}
  >
    Annuler
  </button>


</div>
</form>

    </div>
  );
};

export default PopupForm;




