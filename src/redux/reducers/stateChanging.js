import { createSlice } from "@reduxjs/toolkit";
const stateChanging = createSlice({
  name: "AppStacdtus",
  initialState: {
    status: false,
    responseData: [],
    userData: {},
 
  },
  reducers: {
    getLoginStatus: (state, action) => {

      state.status = action.payload;
    },
    getResposne: (state, action) => {
      state.responseData.push(action.payload);
    },
    setUserData: (state, action) => {
      console.log(action, "action");
      state.userData = action.payload
    },
    
  },
});
export const { getLoginStatus, getResposne, setUserData,} = stateChanging.actions;
export default stateChanging.reducer;
