import React from 'react'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Model from './components/Model'
import UserProfile from './components/UserProfile';
import About from './components/About'
import Docs from './components/Docs'
import Products from './components/Products'
import Schemes from './components/Schemes'
import UserProfileForm from './components/UserProfileForm';

const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/*" element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/docs' element={<Docs />} />
      <Route path='/products' element={<Products />} />
      <Route path='/schemes' element={<Schemes />} />
      <Route path='/model/:modelId' element={<Model />} />
      <Route path="/user-profile/:userId" element={<UserProfile />} />
      <Route path="/user-profile-form/:userId" element={<UserProfileForm />} />
      </Routes>
    </div>
  )
}


export default App