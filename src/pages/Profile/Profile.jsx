import React, { useState } from 'react'
import BackIcon from "../../assets/images/back.svg"
import BGInfo from "../../assets/images/bg-info.png"
import PersonImg from "../../assets/images/profile-img.png"
import Img from "../../assets/images/img.webp"
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { Born, Date, Location } from '../../assets/images/Icons'
import Button from "../../components/Button"
import Model from '../../components/Model'
function Profile() {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem("token"))
  const [ isUpdate , setIsUpdate] = useState(false)
  const [profileActive , setProfileActive] = useState("Tweets")
  const [profileImg, setProfileImg] = useState(Img)

  const [userInfo, setUserInfo] = useState({
    avatarImg : profileImg,
      name: JSON.parse(localStorage.getItem("token")).login,
      email: "@Random_Email",
      jobTitle: "UX&UI designer at",
      companyName: "@abutechuz"
  })
  function handleUpdate(e){
    e.preventDefault()
    const data = {
      avatarImg : profileImg,
      name: e.target.userName.value,
      email: e.target.userEmail.value,
      jobTitle: e.target.info.value,
      companyName: e.target.company.value,
    }
    setUserInfo(data)
    setIsUpdate(false)
  }

  return (
    <div className='h-[100vh] overflow-y-auto border-r-[1px] border-r-[#D8D8D8]'>
      <div className="flex gap-10 mt-[22px] pb-[15px] pl-[31px] border-b-[2px] border-b-[#CFCFCF]">
        <button onClick={() => navigate(-1)}>
          <img src={BackIcon} alt="back icon" width={20} />
        </button>
        <div className="space-y-[2px]">
          <strong className='font-bold text-[20px] leading-[26px] block'>{userInfo.name}</strong>
          <span className=' text-[16px] leading-[21px] opacity-60'>1,070 Tweets</span>
        </div>
      </div>
      <img className='w-full' src={BGInfo} alt="background info img"  height={280} />
      <div className="flex justify-between px-[25px] mb-[10px]"> 
        <div className=" rounded-full -mt-[75px]">
          <img className='w-[150px]  h-[150px]' src={PersonImg} alt="profile person img"  />
        </div>
        <button onClick={() => setIsUpdate(true)} type='button' className='w-[120px] mt-[20px] font-bold text-[18px]  border-[1px] border-[#999999] rounded-[50px]'>Edit profile</button>
      </div>
      <div className="px-[25px]">
        <strong className='font-bold text-[24px] leading-[31px]'>{user.login.toUpperCase()}</strong>
        <span className='block opacity-60 text-[16px] leading-[21px]'>{userInfo.email}</span>
        <p className='mt-[15px] text-[16px] leading-[23px]'>{userInfo.jobTitle} <span className='text-[#1DA1F2]'>{userInfo.companyName}</span> </p>
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
      <Model isOpen={isUpdate} setIsOpen={setIsUpdate} >
        <form onSubmit={handleUpdate} className='w-full'>
          <label htmlFor="file">
            <input onChange={(e) => setProfileImg(URL.createObjectURL(e.target.files[0]))} type="file" className='hidden' id='file' />
            <img className='mx-auto rounded-lg' src={profileImg} alt="img" width={200} height={200} />
          </label>
        <div className="flex w-full justify-between mt-6">
          <div className="w-[48%]  flex flex-col gap-[20px]">
            <label className="flex flex-col">
              <span className='text-[15px] text-black'>First name :</span>
              <input className='bg-[#EEEEEE] placeholder:text-zinc-600 p-3 rounded-lg mt-2 outline-none focus:shadow  focus:shadow-gray-700' type="text" placeholder="Enter name " name="userName" autocomplete="off" required />
            </label>
            <label className="flex flex-col">
              <span className='text-[15px] text-black'>User email:</span>
              <input className='bg-[#EEEEEE] placeholder:text-zinc-600 p-3 rounded-lg mt-2 outline-none focus:shadow  focus:shadow-gray-700' type="email" placeholder="Enter email " name="userEmail" autocomplete="off" required />
            </label>
          </div>
          <div className="w-[48%]  flex flex-col gap-[20px]">
            <label className="flex flex-col">
              <span className='text-[15px] text-black'>Job title :</span>
              <input className='bg-[#EEEEEE] placeholder:text-zinc-600 p-3 rounded-lg mt-2 outline-none focus:shadow  focus:shadow-gray-700' type="text" placeholder="Enter Job title " name="info" autocomplete="off" required />
            </label>
            <label className="flex flex-col">
              <span className='text-[15px] text-black'>User compny name :</span>
              <input className='bg-[#EEEEEE] placeholder:text-zinc-600 p-3 rounded-lg mt-2 outline-none focus:shadow  focus:shadow-gray-700' type="text" placeholder="Enter compny name " name="company" autocomplete="off" required />
            </label>
          </div>
        </div>

        {/* <Button className="w-[400px] mt-5 p-2 text-[22px]">Update user</Button> */}
        <button className=" mt-5 p-2 text-[22px] w-full bg-[#1DA1F2] rounded-[30px] text-white" type='submit' >Update user</button>
        </form>
      </Model>
    </div>
  )
}

export default Profile
