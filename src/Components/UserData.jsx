import React, { Component } from 'react'
import { connect } from 'react-redux'
import {confirmOrder} from "../Redux/action"
class UserData extends Component {
    constructor(props){
        super(props)
        this.state ={
            name: "",
            phone: "",
            email: "",
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        let {name,phone,email} =  this.state
        e.preventDefault()
        if(name === ""||phone === ""||email===""){
            alert("Enter all details")
        }
        else{
            let payload = {...this.state}
            this.props.confirmOrder( payload )
        }
      
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>Name:
                        <input onChange={this.handleChange} value={this.state.name} type="text" name="name"/>
                    </div>
                    <div>
                        Phone:
                        <input onChange={this.handleChange} value={this.state.phone} type="text" name="phone"/>
                    </div>
                    <div>Email:
                        <input onChange={this.handleChange} value={this.state.email} type="text" name="email"/>
                    </div>
                    <div>
                        <input type="submit" value="CONFIRM ORDER" />
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    confirmOrder: (payload) => dispatch(confirmOrder(payload))
})

export default connect(null,mapDispatchToProps)(UserData)