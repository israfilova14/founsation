import React from 'react'
import "../leadership/Leadership.scss"
import person1 from "../../assets/images/person_1.jpg.webp"
import person2 from "../../assets/images/person_2.jpg.webp"
import person3 from "../../assets/images/person_3.jpg.webp"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
 
const Leadership = () => {
  return (
    <div className='leadership-box'>
        <h1>OUR LEADERSHIP</h1>
        <p className='leadership-title'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut corporis, eius, eos consectetur consequuntur sit.
             Aut, perspiciatis, reprehenderit.</p>
        <div className="cards-box">
            <div className="card-box">
                <img src={person1} alt="" className='person'/>
                <p className='company-author'>MINING EXPERT</p>
                <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, repellat. At, soluta. Repellendus vero, consequuntur!</p>
                <div className="icons-box">
                    <FacebookIcon></FacebookIcon>
                    <TwitterIcon></TwitterIcon>
                    <InstagramIcon></InstagramIcon>
                </div>
            </div>
            <div className="card-box">
                <img src={person2} alt="" className='person'/>
                <p className='company-author'>PROJECT MANAGER</p>
                <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil quia veritatis, nam quam obcaecati fuga.</p>
                <div className="icons-box">
                   <FacebookIcon></FacebookIcon>
                    <TwitterIcon></TwitterIcon>
                    <InstagramIcon></InstagramIcon>
                </div>
            </div>
            <div className="card-box">
                <img src={person3} alt="" className='person'/>
                <p className='company-author'>ENGINEER</p>
                <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas quidem, laudantium, illum minus numquam voluptas?</p>
                <div className="icons-box">
                    <FacebookIcon></FacebookIcon>
                    <TwitterIcon></TwitterIcon>
                    <InstagramIcon></InstagramIcon>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Leadership