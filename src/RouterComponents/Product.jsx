import React from "react"
import {addItemToCart} from "../Redux/action"
import {connect} from  "react-redux"
import {Link} from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';


 function Product(props){
   let {productArr,match} = props
    return(
		<>
		<div>	
              <Link to  = {`${match.url}/add`}>
              <button>Add New Product</button>
              </Link>  
				</div>
		{
			productArr.map(item=>{
				return(

					<div key = {uuidv4()} style = {{border:"1px solid black",margin:"10px",padding:"6px"}}>

					<p>{item.item}</p>
					<p>{item.price}</p>
					<p><img src  = {item.image} alt  = "img"></img></p>
					<Link  to ={`${match.url}/${item.id}/edit`}  >
					<button>Edit Item</button>
					</Link>
					<Link to ={`${match.url}/${item.id}`} >
					<button>See more details</button>
					</Link>
					
					
				</div>
				)
			})
		}		

		</>
    )
}

const StateToProps =(state)=>{
	return{
  productArr:state.productArr
	}
}
export default connect(StateToProps,null)(Product)



