import React, { useState } from 'react';
import axios from 'axios';

const PopupForm = ({ onClose }) => {
  const [nom, setNom] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true); 
    setError(null); 

    try {
      const response = await axios.post('http://localhost:8080/api/emplacement', {
        emplacement: nom, // Use "emplacement" as the key in the request body
      }, {
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBtYWlsLmNvbSIsImp0aSI6IjEiLCJpYXQiOjE3MjA0Nzc1MjksImV4cCI6MTcyMDU2MzkyOX0.23eIVCkD9LiFqsfdKod3g3O4Zpd0zmy9-7yqaCAAMy0',
          'Accept': '*/*',
          'Content-Type': 'application/json',
        },
      });

      console.log('Request successful:', response.data);
      // Handle successful response (e.g., display success message, close popup)
      onClose(); // Close the popup after success
    } catch (error) {
      console.error('Request failed:', error);
      setError(error.message); // Or a more user-friendly error message
    } finally {
      setIsLoading(false); // Reset loading state
    }

    window.location.reload()
  };

  const handleChange = (event) => {
    setNom(event.target.value);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-4">
      <h2 className="text-gray-800 text-lg font-bold mb-4">Créer un nouvel Emplacement</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="nom" className="block text-gray-700">Libellé</label>
          <input
            type="text"
            id="nom"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={nom}
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-center items-center mt-2">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
            disabled={isLoading} // Disable submit button while loading
          >
            {isLoading ? 'Envoi...' : 'Créer'}
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

      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default PopupForm;
