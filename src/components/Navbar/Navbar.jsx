import './Navbar.css'
import React, { useContext, useState } from 'react'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../content/StoreContent';

export default function Navbar({setShowLogin}) {

  const [menu,setMenu] = useState("home");

  const {getTotalCartAmount} =useContext(StoreContext)

  return (
    
    <div className="navbar">
      <Link to='/'><img src={assets.logo} alt="" className="log" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
        <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-app</a>
        <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon}/>
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon}/></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  )
}
