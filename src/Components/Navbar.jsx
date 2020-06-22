import React from "react"
import {Link} from  "react-router-dom"


export default function Navbar(){
    let arr  = [
        {link:"/",name:"Home"},
        {link:"/addproducts",name:"addProducts"},
        {link:"/cart",name:"cart"},
        {link:"/orders",name:"orders"}
    ]  
    return(
     <div>
{
    arr.map(item=><Link style = {{marginLeft:"10px"}} to ={item.link} >{item.name}</Link>)
}
     </div>
    )
}