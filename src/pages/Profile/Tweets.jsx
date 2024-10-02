import React, { useContext, useState } from 'react'

import PostItem from '../../components/PostItem'
import { Context } from '../../context/AuthContext'


function Tweets() {
  const {userPosts, setUserPosts} = useContext(Context)

  return (
    <div className="">
      <ul>
        {userPosts.map(item => <PostItem post={userPosts} setPosts={setUserPosts} key={item.id} item={item}/>)}
      </ul>
    </div>
  )
}

export default Tweets
