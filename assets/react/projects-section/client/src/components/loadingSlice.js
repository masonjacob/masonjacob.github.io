import { createSlice } from '@reduxjs/toolkit'

export const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    projectList:{},
  },
  reducers: {
    setProjectList: (state, action) => {
        state.projectList = action.payload;
    }
  }
});

export const {setProjectList} = loadingSlice.actions;

export const selectProjectList = (state) => state.loading.projectList;

export default loadingSlice.reducer;