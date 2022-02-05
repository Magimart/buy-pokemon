    import './App.css';
    import React, { useEffect, useState } from 'react';
    import { SwapSlide } from './components/mainComponents/SwapSlider';
    import Header from './components/headerComponents/Header';
    import { Route, Switch } from "react-router-dom";
    import Users from './components/mainComponents/Users';
    
    
    function App(props) {
    
    
              const[allPokemons, setAllPokemons] = useState([])
    
              const baseUrl = 'https://pokeapi.co/api/v2/pokemon';
    
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
        },[ ])
    
     
    
      return (
        <React.Fragment>
        <div className="App">
                <Header/>
              <div  className="AppWrapp">
                    <Switch>
                      <Route exact path="/users" component={Users}/>
                      <Route 
                           path="/"
                           render={() => <SwapSlide  allPokemons={allPokemons}  {...props}   /> }
                       />

                    </Switch>
              </div>
        </div>
      </React.Fragment>
      );
    }
    
    export default App;
    
    
    
    
    





