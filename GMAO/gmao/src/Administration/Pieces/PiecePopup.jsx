import React, { useState } from 'react'

const PiecePopup = ({ onClose }) => {

    const [stock, setStock] = useState('');
    const [fabricantId, setFabricantId] = useState('');
    const [fournisseurId, setFournisseurId] = useState('');
    const [description, setDescription] = useState('');
    const [nom, setNom] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
    
        // Envoi vers API
    
        onClose();
        window.location.reload()
      };





  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-4">
        <h2 className="text-gray-800 text-lg font-bold mb-4">Créer une nouvelle pièce</h2>

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


                <label htmlFor="nom" className="block text-gray-700">Description</label>
                    <input
                        type="text"
                        id="description"
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />


                <label htmlFor="nom" className="block text-gray-700">Fabricant</label>
                    <input
                        type="text"
                        id="fabricant"
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={fabricantId}
                        onChange={(e) => setFabricantId(e.target.value)}
                    />

                <label htmlFor="nom" className="block text-gray-700">Fournisseur</label>
                    <input
                        type="text"
                        id="fournisseur"
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={fournisseurId}
                        onChange={(e) => setFournisseurId(e.target.value)}
                    />

                <label htmlFor="nom" className="block text-gray-700">Stock</label>
                    <input
                        type="text"
                        id="stock"
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
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


export default PiecePopup;