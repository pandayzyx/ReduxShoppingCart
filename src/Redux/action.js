import {ADD_TO_CART,REDUCE_QUANTITY,ADD_QUANTITY,CONFIRM_ORDER} from  "./actionTypes"

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

export const confirmOrder = (payload) => ({
    type: CONFIRM_ORDER,
    payload
})
