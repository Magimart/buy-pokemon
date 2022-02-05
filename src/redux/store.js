import {   createStore, 
           applyMiddleware 
       } from 'redux';

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers/reducers'


let initialState = {
//      cart: {
//     //     cartItems: localStorage.getItem('cartItems')
//     //         ? JSON.parse(localStorage.getItem('cartItems'))
//     //         : [],
//     //         shippingInfo: localStorage.getItem('shippingInfo')
//     //         ? JSON.parse(localStorage.getItem('shippingInfo'))
//     //         : {}
//     }
}

const middlware = [thunk];
const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middlware)))

//_______________modified
console.log("here is the store")
console.log(store)


export default store;
