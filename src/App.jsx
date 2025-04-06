import { useState } from 'react'
import './App.css'
import Scoreboard from './components/Scoreboard'
import Container from './components/Container'

function App() {
  const [score, setScore] = useState(0);
  
  return (
    <>
      <h2>Pokémon Memory Game</h2>
      <p>Get points by clicking on a card but don't click on any more than once!</p>
      <Scoreboard score={score}></Scoreboard>
      <Container setScore={setScore} ></Container>
    </>
  )
}

export default App


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Card from './components/Card'

// function App() {
//   // const [pokemonName, setPokemonName] = useState("charmander");
//   // const [id, setId] = useState(132);

//   // // function setId  // return a random number between 1 and 1025
//   //                   // assign that number as value of {id}
//   // // for (let i = 0; i < 10; i++) {
//   // //   setId ((array) => {
//   // //     const shuffled
//   // //     let min = 0;
//   // //     let max = 1025;
//   // //     let random = Math.floor(Math.random() * (max - min + 1) + min);
//   // //     console.log(`Random number between ${min} and ${max}: ${random}`);
//   // //     return `${random}`
//   // //   }, [`${random}`]);  
   

//   // setPokemonName()
//   // // }


//   return (
//     <>
//       <div>
//       <Card
//       />
//         </div>
//     </>
//   )
// }

// export default App
