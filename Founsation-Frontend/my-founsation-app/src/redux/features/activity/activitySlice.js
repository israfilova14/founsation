import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"
const initialState = {
    activity: [],
    wishlist: [],
  }

export const getAllActivities = createAsyncThunk('activity', async() => {
    const response = await axios.get("http://localhost:5100/founsation")
    console.log(response.data);
    return response.data
})

export const activitySlice = createSlice({
  name: 'activity',
  initialState,
  reducers: {
    addWishlistPage: (state, action) => {
      state.wishlist.push(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllActivities.fulfilled, (state, action) => {
        state.activity = action.payload
    })
  },
})

export const {addWishlistPage} = activitySlice.actions

export default activitySlice.reducer