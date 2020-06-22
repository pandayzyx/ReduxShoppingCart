import React from "react";
import data from "../data.json";
import ProductItem from "../Components/ProductItem";
import {connect} from  "react-redux"
import { v4 as uuidv4 } from 'uuid';
class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			category: "all",
		};
	}
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
    };
    

	render() {
        let {productArr} = this.props
   console.log(this.props)
        let {category}  = this.state
		return (
			<div>
				<div>
					<select
						name="category"
						onChange={(e) => this.handleChange(e)}
						value={this.state.category}
					>
                        <option value="all">All</option>
						<option value="Shoes">Shoes</option>
						<option value="Jeans">Jeans</option>
						<option value="Laptop">Laptop</option>
						<option value="Mobile">Mobile</option>
					</select>
				</div>

                {productArr && productArr.filter((item)=>{
                    if(category === "all"){
                        return true
                    }
                    else if(category === item.category){
                        return true
                    }
                })
                .map((item) => (
					<div key = {uuidv4()}>
   	            <ProductItem  {...item} />
					</div>
				
				))}
			</div>
		);
	}
}

const MapStateToProps  =  state=>{
    return{
        productArr:state.productArr
    }
}

export default connect(MapStateToProps,null)(Home)
