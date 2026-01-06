import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
// import './Stagiaire.css';

function Stagiaire(){
    const stagiaire=useSelector(state=>state.stagiaires);
    return(
       <div className="max-w-4xl mx-auto mt-10 p-4 bg-purple-100 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Liste des Stagiaires</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {stagiaire.map(s => (
            <div  key={s.nom} className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
               <Link to={`/${s.nom}`}>
                <img  src={s.image} alt="" 
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-2 border-purple-500"
                />
                </Link> 
                <h3 className="text-lg font-semibold text-gray-700">
                  {s.nom} {s.prenom}
                </h3>
            </div>
            ))}
        </div>
        </div>

    );
}
export default Stagiaire;