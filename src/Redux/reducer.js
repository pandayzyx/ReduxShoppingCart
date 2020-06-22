import {ADD_TO_CART,REDUCE_QUANTITY,ADD_QUANTITY} from  "./actionTypes"
import data from  "../data.json"

const initState ={
    productArr:[...data],
    cartArr:[],
    orderArr:[]
}
const reducer = (state = initState,action)=>{
    switch(action.type){
        case ADD_TO_CART:{
        let item  = state.productArr.find(item=>item.id===action.payload)   
     return{
         ...state,
         cartArr:[...state.cartArr,item]
         


     }
        }

     default:{
         return{...state}
     }   
    }
}

export default reducer