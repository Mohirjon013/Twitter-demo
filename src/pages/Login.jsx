import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/images/logo.svg"
import LoginInput from '../components/LoginInput'
import Button from '../components/Button'
import { Context } from '../context/AuthContext'
import loading from "../assets/images/loading.png"
import toast, { Toaster } from 'react-hot-toast'


function Login() {
  const { setToken, register} = useContext(Context)
  const [isLoading, setIsLoading] = useState(false)

  function handleLoginSubmit(e){
    e.preventDefault()
    const data = {
      login:e.target.login.value.trim(),
      password:e.target.password.value.trim()

    }

    if(register){
      if(data.login == register.login && data.password == register.password){
        setIsLoading(true)
        toast.success(`Welcome to Twitter "${ data.login.toUpperCase()}"`)
        setTimeout(() => {
          setToken(data)
        }, 1000);
      }
      else{
        setIsLoading(true)
        setTimeout(() => {
          toast.error(`The User is not found`)
          setIsLoading(false)
        }, 1000);
        
        e.target.reset()
      }
    }
    else{
      if(data.login == "mohirjon" && data.password == "123"){
        setIsLoading(true)
        toast.success(`Welcome to Twitter "${ data.login.toUpperCase()}"`)
        setTimeout(() => {
          setToken(data)
        }, 800);
      }
      else{
        setIsLoading(true)
        setTimeout(() => {
          toast.error(`The User is not found`)
          setIsLoading(false)
        }, 800);
        e.target.reset()
      }
    }
    
  }
  return (
    <form onSubmit={handleLoginSubmit} className='w-[450px] mx-auto mt-[60px] pb-[20px]' autoComplete='off'>
      <Toaster position="top-right" reverseOrder={false}/>
      <Link to={"/"}>
        <img src={Logo} alt="logo img" width={50} height={41} />
      </Link>
      <h2 className='font-black text-[42px] leading-[49px] my-[37px] ml-[9px]'>Log in to Twitter</h2>
      <LoginInput extraStyle={"mb-[25px]"} placeholder={"Phone number, email address"} name={"login"} type={"text"} />
      <LoginInput placeholder={"Password"} name={"password"} type={"password"} />
      <Button extraStyle={"mt-[25px] w-full h-[59px]  hover:bg-transparent border-[2px] hover:border-[#1DA1F2] hover:text-[#1DA1F2] duration-300"} type={"submit"} >
      
        {isLoading ? <img className='scale-[3] mx-auto' src={loading} alt="loading img" width={22} />: "Log In"}
      </Button>
      
      <div className="flex justify-between items-center mt-10">
        <p className='text-[18px] leading-[23px] text-[#1DA1F2]'>Forgot password?</p>
        <Link to={"/sign-up"} className='text-[18px] leading-[23px] text-[#1DA1F2]'>Sign up to Twitter</Link>
        
      </div>
    </form>
  )
}

export default Login
