import {Link} from 'react-router-dom';
export default function Header(){
    return(
        <header className="bg-purple-700 text-white shadow-md p-4 flex flex-col md:flex-row items-center justify-between">
        <h2 className="text-2xl font-bold mb-2 md:mb-0">Gestion des Stagiaires</h2>

        <nav className="flex gap-4">
            <Link to="/" className="px-3 py-2 rounded-md text-purple-200 font-bold hover:bg-blue-600 transition-colors" >
              Liste
            </Link>
            <Link to="/AddStg" className="px-3 py-2 text-purple-200 font-bold rounded-md hover:bg-blue-600 transition-colors">
              Ajouter
            </Link>
        </nav>
        </header>

    );
}