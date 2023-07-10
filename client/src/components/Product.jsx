import React from 'react'
import { fetchUser } from '../utils/user'
import "../product.css"


const Product = () => {

  const user = fetchUser();
  console.log(user)
  return (
    <div className='model'>
      <div className='model1'>Model 1</div>
      <div className='model2'>Model 2</div>
      <div className='model3'>Model 3</div>

    </div>
  )
}

export default Product