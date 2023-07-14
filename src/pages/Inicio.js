import { useNavigate } from "react-router-dom"

import Header from "../components/Header"
import Footer from "../components/Footer"
import pokedex from '../assets/pokedex.png'

export default function Inicio() {
  const navigate = useNavigate()

  return (
    <div className="content-inicio">
      <Header/>

      <section className="body-main">
        <h1 className='title'>Explore o mundo Pokémon</h1>
        <div className="img-pokedex">
          <img src={pokedex} alt="Pokedex"/>
        </div>
        <button href='/pokedex' onClick={(e) => {e.preventDefault(); navigate('/pokedex');}}>Vamos Lá!</button>
      </section>

      <Footer/>
    </div>
  )
}
