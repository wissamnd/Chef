
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY, DELTE_ORDERS, SIGN_IN,LOG_OUT} from './action-types/cart-actions'

//add cart action
export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}
//remove item action
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}
//remove item action
export const oderDelete=(id)=>{
    return{
        type: DELTE_ORDERS,
        id
    }
}
//subtract qt action
export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}

//sign in action
export const signIN=(name,email)=>{
    return{
        type: SIGN_IN,
        name,
        email
    }
}
//log out action
export const logOUT=()=>{
    return{
        type: LOG_OUT,
    }
}
