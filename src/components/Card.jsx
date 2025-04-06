import { useState, useEffect } from 'react'

export default function Card ({id, onClick}) {
    const [name, setName] = useState("");

    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/${id}.png`
    
    useEffect(() => {
        async function fetchName () {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
            const data = await response.json();
            setName(data.name);
        }
        fetchName();
    },[])
    
    return (
        <div onClick={() => onClick(id)} className="card">
            <div className="name">{capitalize(name)}</div>
            <img src={url} alt="" height=""/>
        </div>
    )
}

function capitalize(val){
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

// import { useState, useEffect } from "react";


// export default function Card (count) {
//   const [pokemonName, setPokemonName] = useState("charmander");
//   const [id, setId] = useState();
  

//   const generationOfId = count + 1;
  
//   setId(generationOfId);
  
//   useEffect (() => {
    
//     async function fetchPokemonName() {
//       try{
          
//           const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {mode: "cors"});
//           const pokemonData = await response.json()
//           console.log(pokemonData.name);
//           setPokemonName(pokemonData.name);

  
//       } catch (error) {
//           console.log(error)
//           throw new Error(error);
//       }
//     }
//     fetchPokemonName();
//   },[]);

  
//   return (
//     <div>
//       <div>
//         <img className="card__pokemon" src={"url"} alt={pokemonName} />
//       </div>
//       <h2 className="card__title">{pokemonName}</h2>
//     </div>
//   )
// }