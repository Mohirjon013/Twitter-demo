import React, { lazy, Suspense } from 'react'
import { Outlet, Route, Routes, useLocation } from 'react-router-dom'
import {  Likes, Media, More, Replies, Tweets } from '../pages'
import Navbar from '../components/Navbar'
import Sitebar from '../components/Sitebar'
import SiteBarProfile from '../components/SiteBarProfile'
import NotFound from '../components/NotFound'
import Loading from '../assets/images/loadings.png'
const Home = lazy(() => new Promise(resolve =>{
  return setTimeout(() => {
    resolve(import("../pages/Home"))
  }, 800);
}))

const Profile = lazy(() => new Promise(resolve => {
  return setTimeout(() => {
    resolve(import("../pages/Profile/Profile"))
  }, 800);
}))

function Dashboard() {
  // const pathname = useLocation()
  // let sidebar = null
  
  // if(pathname.pathname === "/"){
  //   sidebar = <Sitebar/>
  // }
  // else if(pathname.pathname === "/profile"){
  //   sidebar = <SiteBarProfile/>
  // }
  // console.log(pathname);
  
  return (

    <div className='flex '>
      <Navbar />
      <div className="w-[50%]">
        <Routes>
          <Route path='/' element={
            <Suspense fallback={<img className='mx-auto mt-[60px] w-[400px]  h-[400px]' src={Loading} alt='loading ...'></img>}><Home/>
            </Suspense>
          }/>
          <Route path='/profile' element={<Suspense fallback={<img className='mx-auto mt-[60px] w-[400px]  h-[400px]' src={Loading} alt='loading ...'></img>}> <Profile/>  </Suspense>}>
            <Route path='/profile' element={<Tweets/>} />
            <Route path='tweets-replies' element={<Replies/>} />
            <Route path='media' element={<Media/>} />
            <Route path='likes' element={<Likes/>} />
          </Route>
          <Route path='/more' element={<More/>}/>
          {/* <Route path='*' element={<NotFound/>}/> */}
              
        </Routes>
      </div>
      
      <Sitebar/>
      
    </div>
  )
}

export default Dashboard
