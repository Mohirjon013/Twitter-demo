import React from 'react'
import Human1 from "../assets/images/human-img1.png"
import Human2 from "../assets/images/human-img2.png"

function MIghtLikeList() {
  return (
    <div className="pt-[20px] px-[15px] bg-[#F7F9F9] rounded-[10px]">
        <h2 className='font-bold text-[24px] leading-[31px] pb-[25px]'>You might like</h2>
        <div className="flex items-center relative">
          <img src={Human1} alt="human img" width={60} height={60} />
          <div className="ml-[13px] ">
            <strong className='font-semibold text-18px] leading-[23px] block'>Mushtariy</strong>
            <span className='font-semibold text-18px] leading-[23px] opacity-60'>@Mushtar565266</span>
          </div>
          <button className='p-3 text-white font-bold text-[18px] leading-[18px] bg-black rounded-[50px] absolute right-0'>Follow</button>
        </div>
        <div className="flex items-center mt-[25px] relative">
          <img src={Human2} alt="human img" width={60} height={60} />
          <div className="ml-[13px] ">
            <strong className='font-semibold text-18px] leading-[23px] block'>Shuhratbek</strong>
            <span className='font-semibold text-18px] leading-[23px] opacity-60'>@mrshukhrat</span>
          </div>
          <button className='p-3 text-white font-bold text-[18px] leading-[18px] bg-black rounded-[50px] absolute right-0'>Follow</button>
        </div>
        <div className='mt-[30px] pt-[30px] pb-[25px]'>
          <p className='text-[#1DA1F2] text-[18px] leading-[18px]'>Show more</p>
        </div>
    </div>
  )
}

export default MIghtLikeList
