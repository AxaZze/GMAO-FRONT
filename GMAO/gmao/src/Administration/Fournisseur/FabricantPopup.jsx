import React, { useState } from 'react';

const PopupForm = ({ onClose }) => {
  const [nom, setNom] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Envoi vers API

    onClose();
    window.location.reload()
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-4">
      <h2 className="text-gray-800 text-lg font-bold mb-4">Créer un nouveau Fabricant</h2>

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




