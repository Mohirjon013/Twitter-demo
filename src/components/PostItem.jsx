import React from 'react'
import { CommentIcon, Dots, LikeActive, LikeIcon, ReplyIcon, ShareIcon, StatisticIcon } from '../assets/images/Icons'

function PostItem({item, setPosts, posts}) {

    function handleCommentClick(value){
        if(value == "comment"){
            item.isCommented = !item.isCommented
            item.commentCount =  item.isCommented ? ++item.commentCount :  --item.commentCount
            setPosts([...posts])
        }
        else if(value == "reply"){
            item.isReplied = !item.isReplied
            item.replyCount = item.isReplied ? ++item.replyCount : --item.replyCount 
            setPosts([...posts])
        }
        else if(value == "like"){
            item.isLiked = !item.isLiked
            item.likeCount = item.isLiked ? ++item.likeCount : --item.likeCount 
            setPosts([...posts])
        }
        
        
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
            <button onClick={() => handleCommentClick("comment")} className={`flex items-center space-x-[10px] ${item.isCommented ? "text-blue-500" : ""}`}>
                <CommentIcon/>
                <span className='font-semibold text-[16px] leading-[21px]'>{item.commentCount ? item.commentCount : ""}</span>
            </button>
            <button onClick={() => handleCommentClick("reply")} className={`flex items-center space-x-[10px] ${item.isReplied ? "text-green-500" : ""}`}>
                <ReplyIcon/>
                <span className='font-semibold text-[16px] leading-[21px]'>{item.replyCount ? item.replyCount : ""}</span>
            </button>
            <button onClick={() => handleCommentClick("like")} className={`flex items-center space-x-[10px] ${item.isLiked ? "text-red-500" : ""}`}>
                {item.isLiked ? <LikeActive/> : <LikeIcon/>}
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
