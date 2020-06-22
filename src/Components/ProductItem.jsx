import React from "react"
import {addItemToCart} from "../Redux/action"
import {connect} from  "react-redux"


 function ProductItem(props){
   let {addToCart} = props
    return(
        <div style = {{border:"1px solid black",margin:"10px"}}>
            <p>{props.item}</p>
            <p>{props.price}</p>
            <p><img src  = {props.image} alt  = "img"></img></p>
            <button onClick  ={()=>addToCart(props.id)}>Add Item</button>
        </div>
    )
}

const MapDispatchToprops =(dispatch)=>{
   return{
       addToCart:(payload)=>dispatch(addItemToCart(payload))
   }
}
export default connect(null,MapDispatchToprops)(ProductItem)