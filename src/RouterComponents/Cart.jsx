import React from "react"
import {connect} from "react-redux"
import CartItem from "../Components/CartItem"
import { addQuantity, reduceQuantity } from "../Redux/action"
import UserData from "../Components/UserData"
class Cart extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            showUserData: false
        }
    }

    handleToggle = () => {
        this.setState({ showUserData: !this.state.showUserData })

    }
    render (){
        let {cartArr, addQty, reduceQty,orderDetailsFilled} = this.props
        return(
            <div>
                { cartArr.length === 0 &&  "Cart is empty" }
                {
                    cartArr && cartArr.map(item=>
                        
                        <CartItem 
                            handleAdd={addQty}
                            handleReduce={reduceQty} 
                            {...item} 
                            key={item.id}/>)
                }

                {
                    this.state.showUserData && <UserData />
                }
    
                {  cartArr.length !== 0 &&  !this.state.showUserData && 
                    <button onClick={this.handleToggle}> ADD DETAILS </button>
                }
            </div>
        )
    }

}

const mapStateToProps = state => ({
    cartArr: state.cartArr,
    orderDetailsFilled:state.orderDetailsFilled

})

const mapDispatchToProps = dispatch => ({
    addQty: (id) => dispatch( addQuantity(id) ),
    reduceQty: (id) => dispatch( reduceQuantity(id) ),
})

export default connect(mapStateToProps,mapDispatchToProps)(Cart)