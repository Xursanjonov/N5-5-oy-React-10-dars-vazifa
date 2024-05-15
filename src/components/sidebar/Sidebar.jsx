import React, { memo } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom/dist'
import { FaHome, FaSignOutAlt, FaUser, FaUserTie } from 'react-icons/fa'
import { SlBulb } from "react-icons/sl";
import { IoMdContacts } from "react-icons/io";
import { PiArticleNyTimesFill } from "react-icons/pi";
import LogoIcons from '../../assets/icons/LogoIcons'
import './sidebar.scss'

const Sidebar = () => {
  const navigate = useNavigate()
  const handaleSubmit = () => {
    localStorage.removeItem('x-auth-token')
    navigate('/')
  }

  return (
    <div className='sidebar'>
      <div className="sidebar__logo"> <LogoIcons /> <h1>Dashboard</h1> </div>
      <div className="sidebar__body">
        <ul className="sidebar__body__ul">
          <NavLink to={`/admin/products`} className='sidebar__body__ul__item'> <FaUser fontSize={25} /> <span>Products</span> </NavLink>
          <NavLink to={`/admin/users`} className='sidebar__body__ul__item'> <FaUser fontSize={25} /> <span>Users</span> </NavLink>
          <NavLink to={`/admin/posts`} className='sidebar__body__ul__item'> <SlBulb fontSize={25} /> <span>Posts</span> </NavLink>
          <NavLink to={`/admin/contacts`} className='sidebar__body__ul__item'> <IoMdContacts fontSize={25} /> <span>Contacts</span> </NavLink>
          <NavLink to={`/admin/agents`} className='sidebar__body__ul__item'> <FaUserTie fontSize={25} /> <span>Agents</span> </NavLink>
          <NavLink to={`/admin/articles`} className='sidebar__body__ul__item'> <PiArticleNyTimesFill fontSize={25} /> <span>Articles</span> </NavLink>
        </ul>
        <div className="btns">
          <Link to={'/'} className='btn_Home'> GoHome <FaHome /> </Link>
          <button className='btn_logout' onClick={handaleSubmit}> Logout <FaSignOutAlt /> </button>
        </div>
      </div>
    </div>
  )
}

export default memo(Sidebar)