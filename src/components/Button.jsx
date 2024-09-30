import React from 'react'

function Button({type,children, extraStyle}) {
  return (
    <button type={type} className={` p-[18px] font-bold text-[18px] leading-[23px] text-white bg-[#1DA1F2] rounded-[76px] border-[1px] border-transparent ${extraStyle}`}>{children}</button>
  )
}

export default Button
