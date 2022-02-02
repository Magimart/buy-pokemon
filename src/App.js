import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SwapSlide } from './components/mainComponents/SwapSlider';
import Header from './components/headerComponents/Header';

function App() {

          const baseUrl = 'https://pokeapi.co/api/v2/pokemon';
          const[allPokemons, setAllPokemons] = useState([])

          const fetchAllPokemons = async () => {

            const res = await fetch(`${baseUrl}?limit=200`)
            const data = await res.json()

           //_____________________create function to fetch and create objects from each iteration
               const pokemonObjects = (results) =>  {
                   
                 results.forEach(async(pokemon) => {
                     const res = await fetch(`${baseUrl}/${pokemon.name}`)
                     const data =  await res.json()

                        setAllPokemons((currentList) => [...currentList, data])
                 })
              }
              pokemonObjects(data.results)
         }

    useEffect(() => {   
     fetchAllPokemons()
    },[])
   

  return (
    <div className="App">
            <Header/>
          <div  className="AppWrapp">
             <SwapSlide allPokemons={allPokemons}/>
         </div>
    </div>
  );
}

export default App;



