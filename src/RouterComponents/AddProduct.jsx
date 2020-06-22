import React from "react";
import {addItem} from "../Redux/action"
import {connect} from "react-redux"
import { v4 as uuidv4 } from 'uuid';

class AddProduct extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            item: "",
            category:"",
            price:""
		};
    }
    handleChange =(e)=>{
  this.setState({
  [e.target.name]:e.target.value
  })
    }
   render(){
       let {addItem} = this.props
       let obj ={
           item:this.state.item,
           price:this.state.price,
           id:uuidv4(),
           category:this.state.category,
           image:"https://via.placeholder.com/150"

          
       }
       return(
           <div>

               <input  placeholder = "itemname"name = "item"value  = {this.state.item} onChange  ={this.handleChange}/>
               <input placeholder ="itemprice" name = "price"value  = {this.state.price} onChange  ={this.handleChange}/>
               <input placeholder = "category" name = "category"value  = {this.state.category} onChange  ={this.handleChange}/>
               <button onClick ={()=>addItem(obj)}>Add item</button>
           </div>
       )
   } 
}

const MapDispatchToProps  = dispatch=>{
    return{
    addItem:(paylaod)=>dispatch(addItem(paylaod))
    }
}

export default connect(null,MapDispatchToProps)(AddProduct)



