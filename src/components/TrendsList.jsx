import React from 'react'
import { Dots } from '../assets/images/Icons'
import Sitting from "../assets/images/sitting.svg"


function TrendsList() {
  return (
    <ul className="px-[15px] bg-[#F7F9F9] mt-[20px] pt-[20px] rounded-[10px]">
        <li className='flex  items-center justify-between mb-[20px]'>
          <h3 className='font-bold text-[24px] leading-[31px]'>Trends for you</h3>
          <img src={Sitting} alt="sitting img" width={24} height={24} />
        </li>
        <li className='flex relative'>
          <div className="">
            <span className=' text-[16px] leading-[21px]'>Trending in Germany</span>
            <p className='font-semibold text-[20px] leading-[26px]'>Revolution</p>
            <span className=' text-[16px] leading-[21px]'>50.4K Tweets</span>
          </div>
          <button className='absolute top-3 right-0'>
            <Dots/>
          </button>
        </li>
        <li className='flex relative py-[15px]'>
          <div className="">
            <span className=' text-[16px] leading-[21px]'>Trending in Germany</span>
            <p className='font-semibold text-[20px] leading-[26px]'>Revolution</p>
            <span className=' text-[16px] leading-[21px]'>50.4K Tweets</span>
          </div>
          <button className='absolute top-3 right-0'>
            <Dots/>
          </button>
        </li>
        <li className='flex relative'>
          <div className="">
            <span className=' text-[16px] leading-[21px]'>Trending in Germany</span>
            <p className='font-semibold text-[20px] leading-[26px]'>Revolution</p>
            <span className=' text-[16px] leading-[21px]'>50.4K Tweets</span>
          </div>
          <button className='absolute top-3 right-0'>
            <Dots/>
          </button>
        </li>
        <li className='mt-[30px] pb-[25px]'>
          <p className='text-[#1DA1F2] text-[18px] leading-[18px]'>Show more</p>
        </li>
      </ul>
  )
}

export default TrendsList
