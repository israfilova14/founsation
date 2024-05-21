import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  activity: [],
};

export const getAllActivity = createAsyncThunk("activity", async () => {
  const response = await axios.get("http://localhost:5100/founsation");
  console.log(response.data);
  return response.data;
});
export const activitySlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllActivity.fulfilled, (state, action) => {
      state.activity = action.payload;
    });
  },
});

export const {} = activitySlice.actions;

export default activitySlice.reducer;
