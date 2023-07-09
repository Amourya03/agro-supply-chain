import React from 'react'
import { fetchUser } from '../utils/user'

const Schemes = () => {

  const user = fetchUser();
  console.log(user)
  return (
    <div>Schemes</div>
  )
}

export default Schemes