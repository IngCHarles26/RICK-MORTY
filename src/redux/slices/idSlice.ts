import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  id:0
};

const idSlice = createSlice({
  name: 'detailId',
  initialState,
  reducers:{
    setIdDetail: (state,action)=>{
      state.id = action.payload;
    },
  }
})

export const {setIdDetail} = idSlice.actions;
export default idSlice.reducer;