import { createSlice, current } from "@reduxjs/toolkit"


const cardPerPage = 24;

const initialState = {
  totalCards:0,
  cardPerPage,
  numberPages: 1,
  currentPage: 1,
}

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers:{
    changePage:(state,action)=>{
      let newPage = state.currentPage + action.payload;
      if(!newPage) newPage = 1;
      if(newPage>state.numberPages) newPage = state.numberPages;
      state.currentPage = newPage;
    },
    setTotalCards:(state,action)=>{
      const newNumberPages = Math.ceil(action.payload/cardPerPage);
      state.totalCards = action.payload;
      state.numberPages = newNumberPages;
      if(state.currentPage > newNumberPages) state.currentPage = newNumberPages;
    },
    setCurrentPage:(state,action)=>{
      state.currentPage = action.payload
    },
  }
})

export const {changePage,setTotalCards,setCurrentPage} = pageSlice.actions;
export default pageSlice.reducer;