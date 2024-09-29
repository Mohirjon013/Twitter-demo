import React from 'react'
import SearchIcon from "../assets/images/search.svg"
import LoginInput from './LoginInput'
import Picture from "../assets/images/pic.png"
import MIghtLikeList from './MIghtLikeList'
import TrendsList from './TrendsList'




function SiteBarProfile() {
  return (
    <div className='w-[25%] h-[100vh] overflow-y-auto px-[20px] space-y-[25px] pb-[30px]'>
      <label className='w-full flex gap-1 bg-[#EFF3F4] px-5 rounded-[31px] mt-5'>
        <img src={SearchIcon} alt="search img" width={19} height={19} />
        <LoginInput extraStyle={"w-[90%] py-[15px] bg-[#EFF3F4] border-none"} type={"text"} placeholder={"Search Twitter"} />
      </label>
      <img src={Picture} alt="picture img" width={373} height={178} />
      <MIghtLikeList/>
      <TrendsList/>
    </div>
  )
}

export default SiteBarProfile
