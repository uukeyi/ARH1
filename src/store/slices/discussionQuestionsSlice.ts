import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  createDiscussionQuestion,
  getDiscussionCategories,
  getDiscussionDetails,
  getDiscussionProps,
  getDiscussionQuestions,
} from '../actions/discussionQuestionsAction';
import {
  // ICategoriesGetResponse,
  ICategory,
  IDiscussion,
  IDiscussionGetResponse,
  discussionPrototype,
} from '../../interfaces/discussionsResponse';
interface IQuestionsArrayState {
  questions: IDiscussion[];
  singleQuestion: IDiscussion;
  categories: ICategory[];
}
const initialState: IQuestionsArrayState = {
  questions: [],
  categories: [],
  singleQuestion: discussionPrototype,
};
export const discussionQuestionsSlice = createSlice({
  name: 'discussionQuestionsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDiscussionCategories.fulfilled, (state, action: PayloadAction<any>) => {
      state.categories = action.payload;
    });
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
