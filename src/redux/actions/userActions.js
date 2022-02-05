import axios from 'axios'
import { GET_USERS, USERS_ERROR } from '../constants/userContants'


export const getUsers = () => async dispatch => {
    
    try{
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users`)

        console.log(res)

        dispatch( {
            type: GET_USERS,
            payload: res.data
        })
    }
    catch(error){
        dispatch( {
            type: USERS_ERROR,
            payload: error,
        })
    }

}