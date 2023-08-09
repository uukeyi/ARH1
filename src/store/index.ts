import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import discussionQuestionsSlice from "./slices/discussionQuestionsSlice";

import authSlice from "./slices/authSlice";
import commentsSlice from "./slices/commentsSlice";
import  landingPageSlice  from "./slices/landingPageSlice";
export const store = configureStore({
   reducer: {
      discussionQuestions: discussionQuestionsSlice,
      authSlice: authSlice,
      commentsSlice: commentsSlice,
      landingPageSlice : landingPageSlice
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
