import React from 'react'
import LoginInput from './LoginInput'
import SearchIcon from "../assets/images/search.svg"
import TrendsList from './TrendsList'
import MIghtLikeList from './MIghtLikeList'




function Sitebar() {
  return (
    <div className='w-[25%] h-[100vh] overflow-y-auto px-[20px] space-y-[25px]'>
      <label className='w-full flex gap-1 bg-[#EFF3F4] px-5 rounded-[31px] mt-5'>
        <img src={SearchIcon} alt="search img" width={19} height={19} />
        <LoginInput extraStyle={"w-[90%] py-[15px] bg-[#EFF3F4] border-none"} type={"text"} placeholder={"Search Twitter"} />
      </label>
      <TrendsList/>
      <MIghtLikeList/>
      <ul className="space-y-[5px] w-full pb-10 ">
        <li className='flex items-center gap-2'>
          <span className='text-[16px] leading-[21px] text-[#536471]'>Terms of Service</span>
          <span className='text-[16px] leading-[21px] text-[#536471]'>Privacy Policy</span>
          <span className='text-[16px] leading-[21px] text-[#536471]'>Cookie Policy</span>
        </li>
        <li className='flex items-center gap-2'>
          <span className='text-[16px] leading-[21px] text-[#536471]'>Imprint</span>
          <span className='text-[16px] leading-[21px] text-[#536471]'>Ads Info</span>
          <span className='text-[16px] leading-[21px] text-[#536471]'>More ···</span>
          <span className='text-[16px] leading-[21px] text-[#536471]'>© 2021 Twitter, Inc.</span>

        </li>
      </ul>
    </div>
  )
}

export default Sitebar
