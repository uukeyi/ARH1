import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  createDiscussionQuestion,
  getDiscussionDetails,
  getDiscussionProps,
  getDiscussionQuestions,
} from '../actions/discussionQuestionsAction';
import {
  IDiscussion,
  IDiscussionGetResponse,
  discussionPrototype,
} from '../../interfaces/discussionsResponse';
interface IQuestionsArrayState {
  questions: IDiscussion[];
  singleQuestion: IDiscussion;
}
const initialState: IQuestionsArrayState = {
  questions: [],
  singleQuestion: discussionPrototype,
};
export const discussionQuestionsSlice = createSlice({
  name: 'discussionQuestionsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getDiscussionQuestions.fulfilled,
      (state, action: PayloadAction<IDiscussionGetResponse>) => {
        state.questions = action.payload.entities;
      }
    );
    builder.addCase(
      getDiscussionProps.fulfilled,
      (state, action: PayloadAction<IDiscussionGetResponse>) => {
        state.questions = action.payload.entities;
      }
    );
    builder.addCase(
      createDiscussionQuestion.fulfilled,
      (state, action: PayloadAction<IDiscussion>) => {
        state.questions.length >= 5
          ? (state.questions = [...state.questions])
          : (state.questions = [...state.questions, action.payload]);
      }
    );
    builder.addCase(getDiscussionDetails.fulfilled, (state, action: PayloadAction<IDiscussion>) => {
      state.singleQuestion = action.payload;
    });
  },
});

export const {} = discussionQuestionsSlice.actions;
export default discussionQuestionsSlice.reducer;
