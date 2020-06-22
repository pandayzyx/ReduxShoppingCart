import {ADD_TO_CART,REDUCE_QUANTITY,ADD_QUANTITY} from  "./actionTypes"

export const addItemToCart =(payload)=>{
    console.log(payload)
    return{
        type:ADD_TO_CART,
        payload:payload
    }
   
}

export const reduceQuantity =(payload)=>{
    return{
        type:REDUCE_QUANTITY,
        payload:payload
    }
   
}
export const addQuantity =(payload)=>{
    return{
        type:ADD_QUANTITY,
        payload:payload
    }
   
}