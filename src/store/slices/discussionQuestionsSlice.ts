import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import {
  createDiscussionQuestion,
  getDiscussionQuestions,
} from '../actions/discussionQuestionsAction';
import { IDiscussion, IDiscussionGetResponse } from '../../interfaces/discussionsResponse';

interface IQuestionsArrayState {
  questions: IDiscussion[];
}
const initialState: IQuestionsArrayState = {
  questions: [],
};

export const discussionQuestionsSlice = createSlice({
  name: 'discussionQuestionsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getDiscussionQuestions.fulfilled,
      (state, action: PayloadAction<IDiscussionGetResponse>) => {
        // state.questions = action.payload;
        state.questions = action.payload.entities;
      }
    );
    builder.addCase(getDiscussionQuestions.rejected, (state, action) => {
      // state.error = true;
      // state.errorMessage = action.error
      // console.log(action.error.message);
    });
    // getDiscussionQuestions
    builder.addCase(createDiscussionQuestion.fulfilled, (state, action: PayloadAction<any>) => {
      state.questions = [...state.questions, action.payload];
    });
    builder.addCase(createDiscussionQuestion.rejected, (state, action: PayloadAction<any>) => {
      // state.errorMessage = action.payload;
    });
  },
});

export const {} = discussionQuestionsSlice.actions;
export default discussionQuestionsSlice.reducer;
