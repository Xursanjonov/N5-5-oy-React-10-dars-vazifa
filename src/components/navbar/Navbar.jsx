import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./Navbar.scss"

const Navbar = () => {
  let { pathname } = useLocation()
  const token = localStorage.getItem('x-auth-token')

  if (pathname.includes("register") || pathname.includes("admin")) {
    return <></>
  }

  return (
    <header className='header'>
      <h2>Logo</h2>
      <Link className={`header__link`} to={"/"}>Home</Link>
      <Link className={`header__link`} to={"/about"}>About</Link>
      <Link className={`header__link`} to={"/register"}>Login</Link>
      <Link className={`header__link ${token ? 'block' : 'none'}`} to={"/admin/products"}>Admin</Link>
    </header>
  )
}

export default Navbar