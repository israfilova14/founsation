import React from 'react'
import Landing from '../landing/Landing'
import Activity from '../activity/Activity'
import Leadership from '../../leadership/Leadership'
import Blog from '../../blog/Blog'
import Footer from '../footer/Footer'

const Home = () => {
  return (
    <div>
        <Landing></Landing>
        <Activity></Activity>
        <Leadership></Leadership>
        <Blog></Blog>
        <Footer></Footer>
    </div>
  )
}

export default Home