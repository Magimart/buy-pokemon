import { GET_USERS, USERS_ERROR } from '../constants/userContants';

const initialState = {
    users:[],
    loading:true
}

export default function(state = initialState, action){

    switch(action.type){

        case GET_USERS:
        return {
            ...state,
            users:action.payload,
            loading:false

        }
        case USERS_ERROR:
            return{
                loading: false, 
                error: action.payload 
            }
        default: return state
    }

}