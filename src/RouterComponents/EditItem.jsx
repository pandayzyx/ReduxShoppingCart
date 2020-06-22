import React from "react";
import {editItem} from "../Redux/action"
import {connect} from "react-redux"
import { v4 as uuidv4 } from 'uuid';

class EditItem extends React.Component {
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
       let {editItem,match} = this.props
       console.log(this.props)
       let obj ={
           item:this.state.item,
           price:this.state.price,
           id:match.params.id,
           category:this.state.category,
           image:"https://via.placeholder.com/150"

         
       }
       return(
           <div>

               <input  placeholder = "itemname"name = "item"value  = {this.state.item} onChange  ={this.handleChange}/>
               <input placeholder ="itemprice" name = "price"value  = {this.state.price} onChange  ={this.handleChange}/>
               <input placeholder = "category" name = "category"value  = {this.state.category} onChange  ={this.handleChange}/>
               <button onClick ={()=>editItem(obj)}>Update</button>
           </div>
       )
   } 
}

const MapDispatchToProps  = dispatch=>{
    return{
    editItem:(paylaod)=>dispatch(editItem(paylaod))
    }
}

export default connect(null,MapDispatchToProps)(EditItem)



