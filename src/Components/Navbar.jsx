import React from "react"
import {Link} from  "react-router-dom"
import { v4 as uuidv4 } from 'uuid';

export default function Navbar(){
    let arr  = [
        {link:"/",name:"Home"},
        {link:"/product",name:"Product"},
        {link:"/cart",name:"cart"},
        {link:"/orders",name:"orders"}
    ]  
    return(
     <div>
{
    arr.map(item=><Link key = {uuidv4()} style = {{marginLeft:"10px"}} to ={item.link} >{item.name}</Link>)
}
     </div>
    )
}