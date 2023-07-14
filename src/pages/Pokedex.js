import PokemonCard from "../components/PokemonCard"
import Header from "../components/Header"
import Footer from "../components/Footer"
import pokedex from '../pokedex.json'
import {Link} from 'react-router-dom'

export default function Pokedex() {
  const pokemonList = pokedex.pokemons;

  return (
    <div className="content-pokedex">
    <Header/>

      <section className="main-pokedex">
        <h1 className='title'>Pokédex</h1>
        <div className='cards-pokedex'>
          {pokemonList.map((p, index) => (
            <Link to={'/pokedex/'+p.id} state={{p: p}} key={index}>
              <PokemonCard pokemon={p}/>
            </Link>
          ))}
        </div>
      </section>
      <Footer/>
    </div>
  )
}
