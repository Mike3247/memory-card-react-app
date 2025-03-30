import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [pokemonName, setPokemonName] = useState("charmander");

  async function getData() {
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto", {mode: "cors"});
        const pokemonData = await response.json()
        console.log(pokemonData.name);
        setPokemonName(pokemonData.name);

    } catch (error) {
        console.log(error)
    }

  }

getData()

  return (
    <>
      <div>
      <Card
      pokemonName={pokemonName}
      />
        </div>
    </>
  )
}

export default App
