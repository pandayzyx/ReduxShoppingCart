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
      <Route render = {(props)=><AddProducts{...props}/>} path = "/addproducts"></Route>
      <Route render = {()=><Cart/>} path = "/cart"></Route>
      <Route render = {()=><Orders/>} path = "/orders"></Route>
  </Switch>
  )
}
