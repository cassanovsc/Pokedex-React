import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Inicio from './pages/Inicio';
import Pokedex from './pages/Pokedex';
import PokemonDetails from './pages/PokemonDetails';

export default function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/pokedex' element={<Pokedex />} />
        <Route path='/pokedex/:id' element={<PokemonDetails />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}
