import React, { useState } from 'react'
import BackIcon from "../../assets/images/back.svg"
import BGInfo from "../../assets/images/bg-info.png"
import PersonImg from "../../assets/images/profile-img.png"

import { Link, Outlet, useNavigate } from 'react-router-dom'
import { Born, Date, Location } from '../../assets/images/Icons'
function Profile() {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem("token"))

  const [profileActive , setProfileActive] = useState("Tweets")
  return (
    <div className='h-[100vh] overflow-y-auto border-r-[1px] border-r-[#D8D8D8]'>
      <div className="flex gap-10 mt-[22px] pb-[15px] pl-[31px] border-b-[2px] border-b-[#CFCFCF]">
        <button onClick={() => navigate(-1)}>
          <img src={BackIcon} alt="back icon" width={20} />
        </button>
        <div className="space-y-[2px]">
          <strong className='font-bold text-[20px] leading-[26px] block'>{user.login}</strong>
          <span className=' text-[16px] leading-[21px] opacity-60'>1,070 Tweets</span>
        </div>
      </div>
      <img className='w-full' src={BGInfo} alt="background info img"  height={280} />
      <div className="flex justify-between px-[25px] mb-[10px]"> 
        <div className=" rounded-full -mt-[75px]">
          <img className='w-[150px]  h-[150px]' src={PersonImg} alt="profile person img"  />
        </div>
        <button type='button' className='w-[120px] mt-[20px] font-bold text-[18px]  border-[1px] border-[#999999] rounded-[50px]'>Edit profile</button>
      </div>
      <div className="px-[25px]">
        <strong className='font-bold text-[24px] leading-[31px]'>{user.login.toUpperCase()}</strong>
        <span className='block opacity-60 text-[16px] leading-[21px]'>@Random_Email</span>
        <p className='mt-[15px] text-[16px] leading-[23px]'>UX&UI designer at <span className='text-[#1DA1F2]'>@abutechuz</span> </p>
      </div>
      <ul className="flex items-center gap-[15px] px-[25px] my-[15px]">
        <li className='flex items-center space-x-[5px]'>
          <Location/>
          <span className='text-[18px] leading-[23px]'>Toshkent</span>
        </li>
        <li className='flex items-center space-x-[5px]'>
          <Born/>
          <span className='text-[18px] leading-[23px] opacity-60'>Born October 14, 2005</span>
        </li>
        <li className='flex items-center space-x-[5px]'>
          <Date/>
          <span className='text-[18px] leading-[23px] opacity-60'>Joined October 2024</span>
        </li>
      </ul>
      <ul className="flex items-center gap-[30px] px-[25px] mb-10 ">
        <li className='flex items-center space-x-[5px]'>
          <strong className='text-[18px] leading-[23px]'>67</strong>
          <span className='text-[18px] leading-[23px]'>Following</span>
        </li>
        <li className='flex items-center space-x-[5px]'>
          <strong className='text-[18px] leading-[23px]'>45</strong>
          <span className='text-[18px] leading-[23px]'>Followers</span>
        </li>
      </ul>
      <div className='flex items-center justify-between px-[25px] border-b-[2px] border-b-[#C4C4C4]'>
        <Link onClick={(e) => setProfileActive(e.target.textContent)} className={`${profileActive == "Tweets" ? "before:left-0": ""} relative before:w-[100%] before:h-[4px] before:bg-blue-500 before:rounded-md before:absolute before:bottom-0 before:-left-[100%] duration-300 overflow-hidden font-bold text-[18px] pb-[19px] inline-block`} to={"/profile"}>Tweets</Link>
        <Link onClick={(e) => setProfileActive(e.target.textContent)} className={`${profileActive == "Tweets & replies" ? "before:left-0": ""} relative before:w-[100%] before:h-[4px] before:bg-blue-500 before:rounded-md before:absolute before:bottom-0 before:-left-[100%] duration-300 overflow-hidden font-bold text-[18px] pb-[19px] inline-block`} to={"tweets-replies"}>Tweets & replies</Link>
        <Link onClick={(e) => setProfileActive(e.target.textContent)} className={`${profileActive == "Media" ? "before:left-0": ""} relative before:w-[100%] before:rounded-md before:h-[4px] before:bg-blue-500  before:absolute before:bottom-0 before:-left-[100%] duration-300 overflow-hidden font-bold text-[18px] pb-[19px] inline-block`} to={"media"}>Media</Link>
        <Link onClick={(e) => setProfileActive(e.target.textContent)} className={`${profileActive == "Likes" ? "before:left-0": ""} relative before:w-[100%] before:h-[4px] before:bg-blue-500 before:rounded-md before:absolute before:bottom-0 before:-left-[100%] duration-300 overflow-hidden font-bold text-[18px] pb-[19px] inline-block`} to={"likes"}>Likes</Link>
      </div>
      <Outlet/>
    </div>
  )
}

export default Profile
