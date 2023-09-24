import React from 'react'
import "./menu.scss"
import { Link } from 'react-router-dom'
import {menu} from "../../data"


const Menu = () => {
  return (
    <div className='menu'>
 {menu.map((item)=>{
return  <div className='item' key={item.id}>
        <spna className="title">{item.title}</spna>
     {item.listItems.map((listItem) => {
     return <Link className='listItem' to={listItem.url} key={listItem.id}>
          <span>{listItem.icon}</span> 
          <span className='listItemTitle'>{listItem.title}</span>
        </Link>
     })}
    </div>
       })}
           </div>
  )
}

export default Menu;

