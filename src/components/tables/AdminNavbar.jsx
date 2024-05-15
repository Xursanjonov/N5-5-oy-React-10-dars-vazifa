import React from 'react'
import './adminNavbar.scss'

const AdminNavbar = ({title}) => {
  return (
      <div className='admin__navbar'>
        <h2>{title}</h2>
        <div className="admin__navbar_div">
            <button className='btnDot'>
                <p className='dot'></p>
                <p className='dot'></p>
                <p className='dot'></p>
            </button>
            <button className='btnAdd'>Add</button>
        </div>
      </div>
  )
}

export default AdminNavbar