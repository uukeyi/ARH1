import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDiscussionQuestions = createAsyncThunk<
   any,
   string,
   { rejectValue?: string }
>("discussionQuestionsSlice/getDiscussionQuestions", async (path, { rejectWithValue }) => {
   try {
      const response = await axios.get(
         "https://jsonplaceholder.typicode.com/posts"
      );
      return response;
   } catch (error: any) {
      return rejectWithValue(error.message);
   }
});
