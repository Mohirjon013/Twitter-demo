import React, { useState } from 'react'
import { CalendarIcon, ClearIcon, CommentIcon, Dots, GiftIcon, LikeIcon, ModeIcon, ReplyIcon, SaveImgIcon, ShareIcon, SimailIcon, StatisticIcon, StatsIcon } from '../assets/images/Icons'
import Button from '../components/Button'
import Person1 from "../assets/images/person-img1.png"
import Person2 from "../assets/images/person-img2.png"
import Person3 from "../assets/images/person-img3.png"

import Kebab from "../assets/images/kebab-img.png"
import PostItem from '../components/PostItem'

import Loading from "../assets/images/loading.png"


function Home() {
  const [inputValue, setInputValue] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [ postImgUrl, setPostImgUrl] = useState(null)

  const [ posts, setPosts] = useState([
    {
      id:1,
      avatarIcon:Person1,
      name:"Designsta",
      nick:"@inner · 25m",
      postDeck:"Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?",
      commentCount:"10",
      replyCount:"1",
      likeCount:"8",
      postImg:null
    },
    {
      id:2,
      avatarIcon:Person2,
      name:"cloutexhibition",
      nick:"@RajLahoti · 22m",
      postDeck:"YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.",
      commentCount:false,
      replyCount:"5",
      likeCount:"9",
      postImg:null
    },
    {
      id:3,
      avatarIcon:Person3,
      name:"CreativePhoto",
      nick:"@cloutexhibition · 1h",
      postDeck:"Обетда..... Кечиринглар",
      commentCount:"10",
      replyCount:"1",
      likeCount:"8",
      postImg:Kebab
    },
  ])

  function handleSubmitPosts(e){
    e.preventDefault()
    const data = {
      id:posts.length ? posts[posts.length - 1].id + 1 : 1,
      avatarIcon:'https://picsum.photos/500/500',
      name: JSON.parse(localStorage.getItem("token")).login,
      nick:`@${JSON.parse(localStorage.getItem("token")).login} · 5m`,
      postDeck:inputValue,
      commentCount:false,
      replyCount:false,
      likeCount:false,
      postImg:postImgUrl
    }
    setIsLoading(true)
    setTimeout(() => {
      setPosts([data, ...posts])
      setIsLoading(false)
      setPostImgUrl(null)
      e.target.reset()
    }, 800);
  }

  // console.log(postImgUrl);
  
  return (
    <div className="border-r-[2px] border-r-[#D8D8D8] h-[100vh] overflow-auto">
      <div className='flex items-center justify-between p-5 border-b-[2px] border-b-[#D8D8D8]'>
        <h2 className='font-bold text-[24px] leading-[31px]'>Home</h2>
        <button>
          <ModeIcon/>
        </button>
      </div>
      <form onSubmit={handleSubmitPosts} className='p-5 border-b-[2px] border-b-[#D8D8D8] relative' autoComplete='off'>
        <div className={`flex  ${postImgUrl ? "items-start" : "items-center"} space-x-[15px]`}>
          <img className='rounded-full' src="https://picsum.photos/800/800" alt="" width={60} height={60} />
          
          <div className="w-[80%]">
            <input onChange={(e) => setInputValue(e.target.value)} className='w-[80%] font-semibold text-[22px] leading-[29px] placeholder:text-[#828282] outline-none p-1' type="text" placeholder='What’s happening' required name='tweetDate' />
            {postImgUrl ? 
            <div className='border-[1px] border-slate-500 rounded-lg p-2 mt-8 relative'>
              <button onClick={() => setPostImgUrl(null)} type='button' className='absolute top-5 right-5'>
                <ClearIcon/>
              </button>
              <img className='pt-3'  src={postImgUrl} alt="choosen img" width={679} height={438} />  
            </div>
            : ""}
          </div>
        </div>
        <div className="flex items-center space-x-5 pl-[77px] pt-[32px] mb-[26px]">
          <label className='cursor-pointer'>
            <input onChange={(e) => setPostImgUrl(URL.createObjectURL(e.target.files[0]))} className='hidden ' type="file" />
            <SaveImgIcon  />
          </label>
          <label>
            <input className='hidden' type="file" />
            <GiftIcon  />
          </label>
          <label>
            <input className='hidden' type="file" />
            <StatsIcon  />
          </label>
          <label>
            <input className='hidden' type="file" />
            <SimailIcon  />
          </label>
          <label>
            <input className='hidden' type="file" />
            <CalendarIcon  />
          </label>
        </div>
        <Button extraStyle={`w-[111px] absolute duration-300 right-[18px] bottom-2 ${inputValue ? "" : "cursor-not-allowed opacity-40 hover:opacity-40"}`} type={inputValue ? "submit" : "button"}>
          {isLoading ? <img className="scale-[3] mx-auto" src={Loading} alt="" width={22} /> : "Tweet"}  
        </Button>
      </form>
      <ul>
        {posts.map(item => <PostItem key={item.id} item={item}/>)}
      </ul>
    </div>
  )
}

export default Home
