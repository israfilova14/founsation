import React from 'react'
 import "../footer/Footer.scss"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
const Footer = () => {
  return (
    <div className='footer-box'>
        <div className='about-box'>
            <h3>ABOUT US</h3>
            <p className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.
            </p>
        </div>
        <div className='features-box'>
            <h3>FEATURES</h3>
            <p>About Us</p>
            <p>Testimonials</p>
            <p>Terms of Service</p>
            <p>Privacy</p>
            <p>Contact Us</p>
        </div>
        <div className='paragraph-box'>
            <h3>SOME PARAGRAPH</h3>
            <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat nostrum libero iusto dolorum vero atque aliquid.</p>
            <div className="form-box-container">
                <h3>SUBSCRIBE TO NEWSLETTER</h3>
                <div className="form-box">
                    <input type="text" placeholder='Enter Email'/>
                    <button>Subscribe</button>
                </div>
                <h3>FOLLOW US</h3>
                <div className="social-media-icons">
                   <FacebookIcon></FacebookIcon>
                   <TwitterIcon></TwitterIcon>
                   <InstagramIcon></InstagramIcon>
                   <AllInclusiveIcon></AllInclusiveIcon>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer