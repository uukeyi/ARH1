import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// ! PAYLOAD ACTION ТИПИЗИРУЕТ PAYLOAD
import { getMainPageData } from "../actions/mainPageDataAction";

interface IDataState {
   text: string;
   src?: string;
   error?: boolean;
   errorMessage?: string;
}
const initialState: IDataState = {
   text: "",
   src: "",
};

export const mainPageDataSlice = createSlice({
   name: "mainPageDataSlice",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getMainPageData.fulfilled, (state, action) => {
         // console.log(action.payload)
      });
      builder.addCase(getMainPageData.rejected, (state, action) => {
         state.error = true;
         // state.errorMessage = action.error
         console.log(action.error.message)
      });
      // getMainPageData
   },
});

export const {} = mainPageDataSlice.actions;
export default mainPageDataSlice.reducer;
