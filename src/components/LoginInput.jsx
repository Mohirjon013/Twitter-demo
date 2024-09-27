import React from 'react'

function LoginInput({extraStyle,type,placeholder,name}) {
  return (
    <input className={`w-full px-5 py-[23px] outline-none text-[18px] leading-[23px] border-[1px] border-[#CCCCCC] rounded-[6px] ${extraStyle}`} type={type} placeholder={placeholder} name={name} required />
    
  )
}

export default LoginInput
