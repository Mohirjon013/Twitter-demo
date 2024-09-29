import React from 'react'
import ErrorImg from "../assets/images/404.png"
function NotFound() {
  return (
    <div>
      <img src={ErrorImg} alt="" className='w-full mt-10'  />
    </div>
  )
}

export default NotFound
