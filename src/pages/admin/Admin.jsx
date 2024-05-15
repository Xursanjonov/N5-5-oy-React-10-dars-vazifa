import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { FaBars } from 'react-icons/fa'
import profils from '../../assets/images/profil.png'
import "./admin.scss"
import { Outlet } from 'react-router-dom'

const Admin = () => {

  return (
    <div className='admin'>
      <Sidebar />
      <div className="admin__content">
        <div className='admin__content__header'>
          <button className='btnBars'> <FaBars fontSize={25} /> </button>
          <div className='profile'>
            <p className='profile__title'>Jones Ferdinand</p>
            <figure className='profile__img'><img src={profils} alt="" /></figure>
          </div>
        </div>
        <div className='admin__content__body'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Admin