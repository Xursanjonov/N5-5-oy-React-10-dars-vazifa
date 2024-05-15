import React from 'react'
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Login from "./pages/login/Login"
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import NotFound from './pages/not-found/NotFound'
import DetailsProduct from './pages/details-product/DetailsProduct'
import Admin from './pages/admin/Admin'
import Auth from './pages/auth/Auth'
import { ToastContainer } from 'react-toastify';
import AdminProducts from './pages/admin-products/AdminProducts'
import Users from './pages/user/User'
import Posts from './pages/posts/Posts'
import Contacts from './pages/contacts/Contacts'
import Agents from './pages/agents/Agents'
import Articles from './pages/articles/Articles'
import 'react-toastify/dist/ReactToastify.css';
import "./App.scss"

// npm create vite
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Login />} />
        <Route path='about' element={<About />} />
        <Route path='/product/:id' element={<DetailsProduct />} />

        <Route path='/' element={<Auth />}>
          <Route path='admin/' element={<Admin />}>
            <Route path='products' element={<AdminProducts />} />
            <Route path='users' element={<Users />} />
            <Route path='posts' element={<Posts />} />
            <Route path='contacts' element={<Contacts />} />
            <Route path='agents' element={<Agents />} />
            <Route path='articles' element={<Articles />} />
          </Route>
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
      {/* <Footer/> */}
      <ToastContainer />
    </>
  )
}

export default App