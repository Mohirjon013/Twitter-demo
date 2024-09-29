import React from 'react'
import { CommentIcon, Dots, LikeIcon, ReplyIcon, ShareIcon, StatisticIcon } from '../assets/images/Icons'

function PostItem({item}) {

    function handleChangeCount(e){
        console.log(e.target);
        
    }
  return (
    <li className='p-5 border-b-[2px] border-b-[#D8D8D8] relative'>
        <div className="flex space-x-[15px]">
            <img className='rounded-full h-[60px] ' src={item.avatarIcon} alt="avatar icon" width={60} height={60} />
            <div className="">
                <strong className='font-bold text-[20px] leading-[26px] mr-[5px]'>{item.name}</strong>
                <span className=' text-[18px] leading-[23px] opacity-60'>{item.nick}</span>
                <p className=' text-[18px] leading-[23px] mt-[5px]'>{item.postDeck}</p>
            </div>
        </div>
        <button className='absolute  right-4 top-5'>
            <Dots/>
        </button>
        {item.postImg ? <img className='rounded-[21px] py-[18px] pl-[75px]' src={item.postImg} alt="post img" width={679} height={453} /> : ""}
        <div className="mt-[22px] flex items-center space-x-[100px] pl-[75px]">
            <button onClick={handleChangeCount} className='flex items-center space-x-[10px]'>
                <CommentIcon/>
                <span className='font-semibold text-[16px] leading-[21px]'>{item.commentCount ? item.commentCount : ""}</span>
            </button>
            <button className='flex items-center space-x-[10px]'>
                <ReplyIcon/>
                <span className='font-semibold text-[16px] leading-[21px]'>{item.replyCount ? item.replyCount : ""}</span>
            </button>
            <button className='flex items-center space-x-[10px]'>
                <LikeIcon/>
                <span className='font-semibold text-[16px] leading-[21px]'>{item.likeCount ? item.likeCount : ""}</span>
            </button>
            <button className='flex items-center space-x-[10px]'>
                <ShareIcon/>
            </button>
            <button className='flex items-center space-x-[10px]'>
                <StatisticIcon/>
            </button>
        </div>
    </li>
  )
}

export default PostItem
