import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Model from './components/Model'
import UserProfile from './components/UserProfile';
import About from './components/About'
import Docs from './components/Docs'
import Body from './components/Body'
import Product from './components/Product'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import UserProfileForm from './components/UserProfileForm';
import App from './App.jsx'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/*" element={<Body />} />
      <Route path='/about' element={<About />} />
      <Route path='/docs' element={<Docs />} />
      <Route path='/market' element={<App />} />
      <Route path='/product' element={<Product />} />
      <Route path='/model/:modelId' element={<Model />} />
      <Route path="/user-profile/:userId" element={<UserProfile />} />
      <Route path="/user-profile-form/:userId" element={<UserProfileForm />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default Home