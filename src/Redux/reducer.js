import {ADD_TO_CART,REDUCE_QUANTITY,ADD_QUANTITY,CONFIRM_ORDER,ADD_PRODUCT,EDIT_PRODUCT,SEE_PRODUCT_DETAILS} from  "./actionTypes"
import data from  "../data.json"

const initState ={
    productArr:[...data],
    cartArr:[],
    orderArr:[],
    orderDetailsFilled:false,
    item:""
}
const reducer = (state = initState,action)=>{
    console.log(state.cartArr)
    switch(action.type){
        case ADD_TO_CART:{
            let item  = state.productArr.find(item=>item.id===action.payload)
            let cartArr = [...state.cartArr]
            // duplicate
            let flag = false
            for( let i=0; i<state.cartArr.length; i++){
                if( cartArr[i].id === Number(action.payload) ){
                    flag = true;
                    cartArr[i].qty++
                    break
                }
            }
            if(!flag){
                cartArr = [ ...cartArr, { ...item, qty:1 } ]
            }
            return{
                ...state,
                cartArr:cartArr
            }
        }
        case REDUCE_QUANTITY: {
            let id = action.payload
            let cartArr = state.cartArr.map( item => item.id===id? { ...item, qty:item.qty-1 }: item )
            cartArr = cartArr.filter(item => item.qty>0 )
            return {
                ...state,
                cartArr:cartArr
            }
        }
        case ADD_QUANTITY: {
            let id = action.payload
            const cartArr = state.cartArr.map( item => item.id===id? { ...item, qty:item.qty+1 }: item )
            return {
                ...state,
                cartArr:cartArr
            }
        }

        case CONFIRM_ORDER: {
            let id = action.payload
            const cartArr = state.cartArr.map( item => item.id===id? { ...item, qty:item.qty+1 }: item )
            return {
                ...state,
                orderArr:cartArr,
                cartArr:[]

            }
        }

        case ADD_PRODUCT: {  
            return {
                ...state,
                productArr:[action.payload,...state.productArr]

            }
        }

        case EDIT_PRODUCT: {
            
            return {
                ...state,
                productArr:state.productArr.map(item=>item.id===action.payload.id?{...item,...action.payload}:item)
                
            }
        }
        default:{
            return{...state}
     }   
    }
}

export default reducer