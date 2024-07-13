import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PiecePopup = ({ onClose }) => {
  const [selectedFournisseurId, setSelectedFournisseurId] = useState('');
  const [stock, setStock] = useState('');
  const [description, setDescription] = useState('');
  const [nom, setNom] = useState('');
  const [fournisseurs, setFournisseurs] = useState([]);

  useEffect(() => {
    const fetchFournisseurs = async () => {
      try {
        const accessToken = localStorage.getItem('access_token');
          const response = await axios.get('http://localhost:8080/api/fournisseur', {
            headers: {
              'Accept': '*/*',
              'Authorization': `Bearer ${accessToken}`,
            },
          });
        const fournisseurs = response.data;
        setFournisseurs(fournisseurs); // Update fournisseurs state with fetched data
      } catch (error) {
        console.error('Erreur lors de la récupération des fournisseurs:', error);
      }
    };
  
    fetchFournisseurs();
  }, []);

  

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      nom,
      description,
      stock,
      fournisseurId: selectedFournisseurId,
    };

    console.log(formData)

    try {
        const response = await axios.post('http://localhost:8080/api/piece', formData);
      
        if (response.status === 200) {
          // Traiter la réponse réussie (par exemple, fermer la fenêtre contextuelle, afficher un message de confirmation)
          console.log('Pièce créée avec succès!');
          onClose();
          window.location.reload(); // Recharger la page pour refléter les changements
        } else {
          console.error('Échec de la création de la pièce:', response.status);
        }
      } catch (error) {
        console.error('Erreur lors de la création de la pièce:', error);
      }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-4">
      <h2 className="text-gray-800 text-lg font-bold mb-4">Créer une nouvelle pièce</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="nom" className="block text-gray-700">
            Nom
          </label>
          <input
            type="text"
            id="nom"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />

          <label htmlFor="fournisseur" className="block text-gray-700">
            Fournisseur
          </label>
          <select
            id="fournisseur"
            value={selectedFournisseurId}
            onChange={(e) => setSelectedFournisseurId(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
            {fournisseurs.map((fournisseur) => (
                <option key={fournisseur.id} value={fournisseur.id}>
                {fournisseur.nom}
                </option>
            ))}
            </select>

          <label htmlFor="description" className="block text-gray-700">
            Description
          </label>
          <input
            type="text"
            id="description"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={description}
            onChange={(e) => setDescription(e.value)} // Minor correction: use onChange={(e) => setDescription(e.target.value)}
          />

          <label htmlFor="stock" className="block text-gray-700">
            Stock
          </label>
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
            className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
          >
            Créer
          </button>
          <button
            type="button"
            className="bg-gray-400 text-white px-4 py-2 rounded-md ml-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
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