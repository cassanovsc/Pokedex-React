import { useState } from "react"
import { useLocation } from "react-router"
import PokemonCardDetails from "../components/PokemonCardDetails"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Products() {
  let { state } = useLocation();

  return (
    <div className="content-pokemon">
    <Header/>
      <section className="body-pokemon-details">
      
      <PokemonCardDetails pokemon={state.p}/>

      </section>
      
    <Footer/>

    </div>
  )
}
