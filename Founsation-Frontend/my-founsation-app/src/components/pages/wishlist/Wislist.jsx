import React  from 'react'
import { useSelector } from 'react-redux';
import "../wishlist/Wishlist.scss"
import charity from "../../../assets/images/charity.png"

const Wishlist = () => {
  const wishlist = useSelector(store => store.activity).wishlist
  console.log(wishlist);
   
 
  return (
    <div className='wishlist-box'>
      
      {
        wishlist.map((item) => (
          <div className="activity-box" key={item._id}>
            <img
             src={charity}
              alt=""
              className="charity-image"
              style={{ width: "80px", height: "80px", borderRadius: "50%" }}
            />
            <p className="tile" style={{ fontSize: "20px" }}>
              {item.title}
            </p>
            
            <p
              className="description"
              style={{ fontSize: "20px", width: "300px" }}
            >
              {item.description}
            </p>
          </div>
        ))}

      
    </div>
  )
}

export default Wishlist