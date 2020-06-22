import React from "react"
import {Route,Switch} from "react-router-dom"
import Home from "../RouterComponents/Home"
import Cart from "../RouterComponents/Cart"
import Orders from "../RouterComponents/Orders"
import AddProducts from "../RouterComponents/AddProducts"


export default function PublicRouter(){
  return(
  <Switch>
      <Route exact  path = "/" render = {()=><Home/>}></Route>
      <Route  path = "/addproducts" render = {(props)=><AddProducts{...props}/>} ></Route>
      <Route path = "/cart" render = {()=><Cart/>} ></Route>
      <Route path = "/orders"render = {()=><Orders/>} ></Route>
  </Switch>
  )
}
