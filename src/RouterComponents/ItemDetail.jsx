import React from "react"
import {connect} from "react-redux"

function ItemDetails(props){
 let {match,productArr} = props
 let item = productArr.find(item=>item.id === (match.params.id))
 console.log(item)
 let output = ""
 for(let key in item.description){
   output  = output + " "+  key +":" + item.description[key] + "\n"
 }
 return(
     <div>
      <p>{item.item}</p>   
      <p>{item.price}</p>  
      <p>{item.category}</p>  
      <p><img src = {item.image} alt = "img"/></p>  
 <p style = {{whiteSpace:"pre-line"}}>{output}</p>
       
     </div>
 )
}

const MapStateToProps = state=>{
    return{
     productArr:state.productArr
    }
}

export default connect(MapStateToProps,null)(ItemDetails)