import React from "react"
import {Route,Switch} from "react-router-dom"
import Home from "../RouterComponents/Home"
import Cart from "../RouterComponents/Cart"
import Orders from "../RouterComponents/Orders"
import Product from "../RouterComponents/Product"
import AddProduct from "../RouterComponents/AddProduct"
import EditItem from "../RouterComponents/EditItem"
import ItemDetails from "../RouterComponents/ItemDetail"


export default function PublicRouter(){
  return(
  <Switch>
      <Route exact  path = "/" render = {()=><Home/>}></Route>
      <Route exact path = "/product" render = {(props)=><Product{...props}/>} ></Route>
      <Route path = "/product/add" render = {()=><AddProduct/>} ></Route>
      <Route exact path = "/product/:id" render = {(props)=><ItemDetails {...props}/>} ></Route>
      <Route path = "/product/:id/edit" render = {(props)=><EditItem{...props}/>} ></Route>
      <Route path = "/cart" render = {()=><Cart/>} ></Route>
      <Route path = "/orders"render = {()=><Orders/>} ></Route>
  </Switch>
  )
}
