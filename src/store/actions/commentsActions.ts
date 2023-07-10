import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICommentResponse } from "../../interfaces/commentResponse";
import $host from "../../http";
interface ICreateCommentParams {
   message: string;
   parentId: number;
   discussionId: number;
   setSuccess: (value: boolean | ((prevVar: boolean) => boolean)) => void;
   setError: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}
interface IGetCommentsParams {
   discussionId: number;
   setSuccess: (value: boolean | ((prevVar: boolean) => boolean)) => void;
   setError: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}
interface IDeleteCommentsParams {
   commentId: number;
   setSuccess: (value: boolean | ((prevVar: boolean) => boolean)) => void;
   setError: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}
interface IUpdateCommentsParams {
   commentId : number,
   message : string,
   parentId : number,
   discussionId : number,
   setSuccess: (value: boolean | ((prevVar: boolean) => boolean)) => void;
   setError: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}
export const createComment = createAsyncThunk<
   ICommentResponse,
   ICreateCommentParams,
   { rejectValue?: string }
>("commentsSlice/createComment", async (config, { rejectWithValue }) => {
   try {
      const response = await $host<ICommentResponse>({
         method: "POST",
         url: "/api/Discussions/comments",
         params: {
            description: config.message,
            parentId: config.parentId,
            discussionId: config.discussionId,
         },
      });
      config.setSuccess(true);
      return response.data;
   } catch (error: any) {
      config.setError(true);
      return rejectWithValue(error.message);
   }
});

export const getComments = createAsyncThunk<
   ICommentResponse[],
   IGetCommentsParams,
   { rejectValue?: string }
>("commentsSlice/getComments", async (config, { rejectWithValue }) => {
   try {
      const response = await $host<ICommentResponse[]>({
         method: "GET",
         url: `/api/Discussions/${config.discussionId}/comments`,
      });
      config.setSuccess(true);
      return response.data;
   } catch (error: any) {
      config.setError(true);
      return rejectWithValue(error.message);
   }
});

export const deleteComment = createAsyncThunk<
   void,
   IDeleteCommentsParams,
   { rejectValue?: string }
>("commentsSlice/getComments", async (config, { rejectWithValue }) => {
   try {
      await $host<void>({
         method: "DELETE",
         url: `/api/Discussions/comments/${config.commentId}`,
      });
      config.setSuccess(true);
   } catch (error: any) {
      config.setError(true);
      return rejectWithValue(error.message);
   }
});



export const updateComment = createAsyncThunk<
   ICommentResponse,
   IUpdateCommentsParams,
   { rejectValue?: string }
>("commentsSlice/getComments", async (config, { rejectWithValue }) => {
   try {
      const response = await $host<ICommentResponse>({
         method: "POST",
         url: `/api/Discussions/comments/${config.commentId}`,
         params: {
            description: config.message,
            parentId: config.parentId,
            discussionId: config.discussionId,
         
         },
      });
      config.setSuccess(true);
      return response.data
   } catch (error: any) {
      config.setError(true);
      return rejectWithValue(error.message);
   }
});