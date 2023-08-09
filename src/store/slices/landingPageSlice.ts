import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getLandingPageBlocks } from "../actions/landingPageActions";
import { ILandingBlock } from "../../interfaces/landingPageResponse";

interface IDataState {
  elements : ILandingBlock[]
}
const initialState: IDataState = {
   elements : []
};

export const landingPageSlice = createSlice({
   name: "landingPageSlice",
   initialState : initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getLandingPageBlocks.fulfilled, (state, action : PayloadAction<ILandingBlock[]>) => {
        state.elements = action.payload
         console.log(action.payload)
      });
      builder.addCase(getLandingPageBlocks.rejected, (state, action) => {
         // state.errorMessage = action.error
         console.log(action.error.message)
      });
      // getLandingPageBlocks
   },
});

export const {} = landingPageSlice.actions;
export default landingPageSlice.reducer;
