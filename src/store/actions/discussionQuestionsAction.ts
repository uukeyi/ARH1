import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import $host from '../../http';
import { IDiscussion, IDiscussionGetResponse } from '../../interfaces/discussionsResponse';
interface IinputData {
  data: ICreateData;
  setError: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}
interface ICreateData {
  title: string;
  description: string;
  authorId: any;
  categoryId: string | number;
}
interface IDeleteData {
  idDiscussion: number | string;
  setError: Function;
}
export const getDiscussionQuestions = createAsyncThunk<
  IDiscussionGetResponse,
  (value: boolean | ((prevVar: boolean) => boolean)) => void,
  { rejectValue?: string }
>('discussionQuestionsSlice/getDiscussionQuestions', async (setError, { rejectWithValue }) => {
  try {
    const response = await axios.get<IDiscussionGetResponse>(
      'http://194.87.238.163/api/Discussions?pageIndex=1&pageSize=5'
    );

    return response.data;
  } catch (error: any) {
    setError(true);
    return rejectWithValue(error.message);
  }
});
export const getDiscussionDetails = createAsyncThunk<
  IDiscussion,
  {
    id: string | number;
    setError: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  },
  { rejectValue?: string }
>('discussionQuestionsSlice/getDiscussionDetails', async (config, { rejectWithValue }) => {
  try {
    const response = await axios.get<IDiscussion>(
      `http://194.87.238.163/api/Discussions/${config.id}`
    );
    return response.data;
  } catch (error: any) {
    config.setError(true);
    return rejectWithValue(error.message);
  }
});
export const getDiscussionProps = createAsyncThunk<
  IDiscussionGetResponse,
  any,
  { rejectValue?: string; props: any }
>('discussionQuestionsSlice/getDiscussionProps', async (props, { rejectWithValue }) => {
  try {
    const response = await $host<IDiscussionGetResponse>({
      method: 'GET',
      url: `/api/Discussions?pageIndex=${props.data[1]}&pageSize=5&search=${props.data[0].query}&orderCol=${props.data[3]}&orderDirection=${props.data[2]}`,
    });

    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
export const createDiscussionQuestion = createAsyncThunk<
  IDiscussion,
  IinputData,
  { rejectValue?: string }
>('discussionQuestionsSlice/createDiscussionQuestions', async (inputData, { rejectWithValue }) => {
  try {
    const responseReg = await $host<IDiscussion>({
      url: '/api/Discussions',
      method: 'POST',
      data: {
        title: inputData.data.title,
        description: inputData.data.description,
        authorId: inputData.data.authorId,
        categoryId: inputData.data.categoryId,
      },
    });
    console.log(responseReg.data);
    return responseReg.data;
  } catch (error: any) {
    console.log(error);

    inputData.setError(true);

    return rejectWithValue(error.message);
  }
});

export const deleteDiscussionQuestion = createAsyncThunk<
  void,
  IDeleteData,
  { rejectValue?: string }
>('discussionQuestionsSlice/deleteDiscussion', async (data, { rejectWithValue }) => {
  try {
    await $host<void>({
      url: `/api/Discussions/${data.idDiscussion}`,
      method: 'DELETE',
    });
  } catch (error: any) {
    data.setError(true);
    return rejectWithValue(error.message);
  }
});
