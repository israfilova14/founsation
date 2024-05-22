import React, {useEffect, useState} from 'react'
import  "../post/Post.scss"
import axios from "axios"
import {useSelector} from "react-redux"
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { activityFormSchema } from '../../../schema/activityForm';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import charity from "../../../assets/images/charity.png"
import { useDispatch } from 'react-redux';
import { getAllActivities } from '../../../redux/features/activity/activitySlice';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Post = () => {
  const {register, formState: {errors}} = useForm({
    resolver: yupResolver(activityFormSchema)
  })
  const [image, setImage] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
 const dispatch = useDispatch()
 useEffect(()=>{
  dispatch(getAllActivities())
},[])
 const { activity } = useSelector((store) => store.activity);
 console.log(activity);

 const deleteActivity = async(id) =>{
  try{
    const deleteRes = await axios.delete(`http://localhost:5100/founsation/${id}`)
    .then(res => {
      console.log(res);
      if(res.status ===200){
        activity.filter(item => item._id !== id)
      }
    })
  }catch(err){
    console.log(err);
  }
 }
 const addActivity = async(event) => {
  event.preventDefault()
  try{
     const postRes = await axios.post ("http://localhost:5100/founsation", {
      image: image,
      title: title,
      description: description
     })
     console.log(postRes);
     dispatch(getAllActivities)
  }catch(err){
    console.log(err);
  }
 }

  return (
    <div className='post-box'>
      <form action="" onSubmit={addActivity}>
        <input type="text" placeholder='image' {...register('image')} value={image} onChange={e => setImage(e.target.value)}/>
        {errors.image?.message && (<p style={{color: "red"}}>{errors.image?.message}</p>)}
        <br/>
        <input type="text" placeholder='title' {...register('title')} value={title} onChange={e => setTitle(e.target.value)}/>
        {errors.title?.message && (<p style={{color: "red"}}>{errors.title?.message}</p>)}
        <br/>
        <input type="text" placeholder='price' {...register('description')} value={description} onChange={e => setDescription(e.target.value)}/>
        {errors.price?.message && (<p style={{color: "red"}}>{errors.price?.message}</p>)}
        <br/>
        <button className='submit-button' type='submit' >Add</button>
      </form>
      <div className="table-box">
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 990 }} size="large" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {activity.map((row) => (
              <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                   <img src={charity} alt="" className='image'/>
                </TableCell>
                <TableCell >{row.title}</TableCell>
                <TableCell >{row.description}</TableCell>
                <TableCell><DeleteOutlineIcon onClick = {() => {deleteActivity(row._id)}}></DeleteOutlineIcon></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    </div>
  )
}

export default Post