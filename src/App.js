
import './App.css';
import Stagiaire from './components/Stagiaire/Stagiaire';
import Header from './components/Header/Header';
import AddStg from './components/Stagiaire/AddStg';
import DetailStg from './components/Stagiaire/DetailStg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<Stagiaire/>}/>
            <Route path='/AddStg' element={<AddStg/>}/>
            <Route path='/:nom' element={<DetailStg/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
