import { Link } from "react-router-dom";
import * as FaIcon from 'react-icons/fa'
import * as AiIcon from 'react-icons/ai'
import React, { useState } from "react";
import { sidebarData } from "./sideBarData";
import './navBar.css'
import { IconContext } from "react-icons";

export default function NavBar() {

  const [sidebar, setSidebar] = useState(false)
  const showSideBar = () => setSidebar(!sidebar)

  return (
    <IconContext.Provider value={{color: '#fff'}} >
    <div className="navbar">
      <Link to='#' className='menu-bars'>
        <FaIcon.FaBars onClick={showSideBar}/>
      </Link>
    </div>
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
      <ul className="nav-menu-items" onClick={showSideBar}>
        <li className="navbar-toggle">
          <Link to="#" className='menu-bars'>
            <AiIcon.AiOutlineClose />
          </Link>
        </li>
        {sidebarData.map((item,index) => {
          return(
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
    </IconContext.Provider>
  )
}