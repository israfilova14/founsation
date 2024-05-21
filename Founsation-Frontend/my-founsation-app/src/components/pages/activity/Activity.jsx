import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addWishlistPage, getAllActivities } from '../../../redux/features/activity/activitySlice'
import charity from "../../../assets/images/charity.png"
import "../activity/Activity.scss"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Activity = () => {
    const { activity } = useSelector((store) => store.activity);
    console.log(activity);
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(getAllActivities())
    },[])

    const addWishlist=(element)=>{
      dispatch(addWishlistPage(element))
    }
  return (
    <div className="activites-box">
    {activity &&
      activity.map((item) => (
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
          <FavoriteBorderIcon onClick={()=>{addWishlist(item)}}></FavoriteBorderIcon>
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

export default Activity