import { combineReducers } from 'redux'
// import { getAllPokemonReducer } from './allPokemonReducer'
import userReducer from './userReducer'



export default combineReducers({
    usersList: userReducer,
    // pokemons: getAllPokemonReducer,
})



