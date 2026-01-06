import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';

export default function DetailStg(){
    const nom=useParams();
    const stagiaires=useSelector(state=>state.stagiaires);
    const stagiaire=stagiaires.find(s=>s.nom===nom.nom);
    return(
           <div className="max-w-sm mx-auto mt-10 p-6 bg-fuchsia-100 shadow-lg rounded-lg text-center">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Détails du Stagiaire</h2>
                <img  src={stagiaire.image}  alt=""
                    className="w-48 h-48 mx-auto rounded-full object-cover mb-4 border-2 border-fuchsia-500"
                />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    {stagiaire.nom} {stagiaire.prenom}
                </h3>
                <p className="text-black-600 mb-1 font-semibold">Âge: <span className="font-medium text-fuchsia-800">{stagiaire.age}</span></p>
                <p className="text-black-600 font-semibold">Filiére: <span className="font-medium text-fuchsia-800">{stagiaire.filiere}</span></p>
            </div>

        );

}