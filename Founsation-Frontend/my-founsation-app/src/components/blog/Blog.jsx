import React from 'react'
import "../blog/Blog.scss"
import hero1 from "../../assets/images/hero_1.jpg"
import hero2 from "../../assets/images/hero_2.jpg"
const Blog = () => {
  return (
    <div className='blog-box'>
        <h1>OUR BLOG</h1>
        <p className='blog-title'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati ab possimus fugiat, autem aliquid, commodi quod voluptatum consectetur.</p>
        <div className="company-boxes">
            <div className="company-box">
                <img src={hero1} alt="" className='hero1'/>
                <h2>How to Invest In Investing Company</h2>
                <p>JANUARY 18, 2019 BY <span>JAMES COOPER</span></p>
                <p className='company-title'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat et suscipit iste libero neque.
                  Vitae quidem ducimus voluptatibus nemo cum odio ab enim nisi, itaque, libero fuga veritatis culpa quis!
                </p>
                <a href="">Get Started</a>
            </div>
            <div className="company-box">
            <img src={hero2} alt="" className='hero2'/>
                <h2>How to Invest In Investing Company</h2>
                <p>JANUARY 18, 2019 BY <span>JAMES COOPER</span></p>
                <p className='company-title'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat et suscipit iste libero neque.
                  Vitae quidem ducimus voluptatibus nemo cum odio ab enim nisi, itaque, libero fuga veritatis culpa quis!
                </p>
                <a href="">Get Started</a>
            </div>
        </div>
    </div>
  )
}

export default Blog