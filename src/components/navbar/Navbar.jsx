import React from 'react'
import "./navbar.scss"
import{FiSearch} from "react-icons/fi"
import{BsGrid} from "react-icons/bs"
import{IoNotificationsOutline} from "react-icons/io5"
import{TbBorderCorners} from "react-icons/tb"
import{LuSettings} from "react-icons/lu"
import{BiLogoRedux} from "react-icons/bi"


const Navbar = () => {
  return (
  <div className='navbar'>
      <div className='logo'>
        <BiLogoRedux/>
        <span>Company Dashboard </span>
      </div>
      <div className="icons">
         <FiSearch/>
         <BsGrid/>
         <TbBorderCorners/>
             <div className='notification'>
                <IoNotificationsOutline/>
                <span>1</span>
             </div>
             <div className='user'>
                <img src='https://avatars.githubusercontent.com/u/115937579?v=4' alt=''/>
                <span>Samarth</span>
             </div>
         <LuSettings/>
      </div>
  </div>
  )
}

export default Navbar;