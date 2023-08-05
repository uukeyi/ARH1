import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICommentResponse } from "../../interfaces/commentResponse";

import {
   createComment,
   getComments,
   updateComment,
} from "../actions/commentsActions";
interface ICommentSliceState {
   comments: ICommentResponse[];
}

const initialState: ICommentSliceState = {
   comments: [],
};

export const commentsSlice = createSlice({
   name: "commentsSlice",
   initialState: initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(
         createComment.fulfilled,
         (state, action: PayloadAction<ICommentResponse>) => {
            // state.comments = [...state.comments, action.payload];
            // console.log(action)
         }
      );
      builder.addCase(
         getComments.fulfilled,
         (state, action: PayloadAction<ICommentResponse[]>) => {
            // state.comments = action.payload
            // console.log(action)
         }
      );
      //  builder.addCase(
      //     getComments.fulfilled,
      //     (state, action: PayloadAction<ICommentResponse[]>) => {
      //         // state.comments = action.payload
      //        // console.log(action)
      //     }

      //  );
      builder.addCase(
         updateComment.fulfilled,
         (state, action: PayloadAction<ICommentResponse>) => {
            // state.comments.splice(action.payload.)
            state.comments = state.comments.filter((item) => {
               if (item.id === action.payload.id) {
                  item = action.payload;
                  return item;
               }
               return item;
            });
            // state.comments = action.payload
            // console.log(action)
         }
      );
   },
});

export const {} = commentsSlice.actions;
export default commentsSlice.reducer;
