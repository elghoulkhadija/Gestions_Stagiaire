import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AjouterStg } from "../Redux/reducer";

export default function AddStg() {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        age: '',
        filiére: '',
        image: ''
    });
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const handlerAdd = (e) => {
        e.preventDefault();
        dispatch(AjouterStg(formData));
        alert("Stagiaire ajouté avec succès!");
        setFormData({
            nom: '',
            prenom: '',
            age: '',
            filiere: '',
            image: ''
        });
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-gray-50 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Ajouter un Stagiaire</h2>

            <form onSubmit={handlerAdd} className="space-y-4">
                <input type="text" name="nom" placeholder="nom" value={formData.nom} onChange={handleChange} required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input type="text"  name="prenom" placeholder="Prénom" value={formData.prenom}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input  type="number" name="age" placeholder="Âge" value={formData.age} onChange={handleChange}
                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                
                <input type="text" name="image" placeholder="URL de l'image" value={formData.image} onChange={handleChange}
                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input type="text" name="filiere" placeholder="Filière" value={formData.filiere} onChange={handleChange}
                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input type="submit" className="w-full bg-purple-700 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-colors"
                    value="Ajouter"
                />
            </form>
        </div>

    );
}