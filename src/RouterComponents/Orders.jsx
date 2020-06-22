import React from "react"
import{connect} from  "react-redux"


function Orders (props){
    let {orderArr} = props
    return(
        <div>
        {
         orderArr && orderArr.map(item=>{
             return(
                <div style = {{border:"1px solid black",margin:"10px"}}>
                <p>{item.item}</p>
                <p>{item.price}</p>
                <p><img src  = {item.image} alt  = "img"></img></p>
       
            </div>
             )
         })   
       
        }
        </div>
    )
}

const MaptoStateProps = state=>{
    return{
        orderArr:state.orderArr
    }
}

export default connect(MaptoStateProps,null)(Orders)