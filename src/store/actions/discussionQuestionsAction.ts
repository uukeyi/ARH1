import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import $host from '../../http';
import {
  IDiscussion,
  IDiscussionGetResponse,
  // ICategoriesGetResponse,
} from '../../interfaces/discussionsResponse';
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
export const getDiscussionCategories = createAsyncThunk<
  any,
  (value: boolean | ((prevVar: boolean) => boolean)) => void,
  { rejectValue?: string }
>('discussionQuestionsSlice/getDiscussionCategories', async (setError, { rejectWithValue }) => {
  try {
    const response = await axios.get<any>('http://194.87.238.163/api/DiscussionCategorys');
    return response.data;
  } catch (error: any) {
    setError(true);
    return rejectWithValue(error.message);
  }
});
export const getDiscussionQuestions = createAsyncThunk<
  IDiscussionGetResponse,
  {
    categoryId: number | string | null | RegExpMatchArray;
    setError: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  },
  { rejectValue?: string }
>('discussionQuestionsSlice/getDiscussionQuestions', async (data, { rejectWithValue }) => {
  try {
    const response = await axios.get<IDiscussionGetResponse>(
      `http://194.87.238.163/api/Discussions?categoryId=${data.categoryId}&pageIndex=1&pageSize=5`
    );

    return response.data;
  } catch (error: any) {
    data.setError(true);
    return rejectWithValue(error.message);
  }
});
export const getDiscussionCount = createAsyncThunk<
  any,
  {
    categoryId: number | null | RegExpMatchArray;
    searchParams?: string | null | RegExpMatchArray;
    setError: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  },
  { rejectValue?: string }
>('discussionQuestionsSlice/getDiscussionCount', async (data, { rejectWithValue }) => {
  try {
    const response = await axios.get<any>(
      `http://194.87.238.163/api/Discussions/counts?categoryId=${data.categoryId}&search=${data.searchParams}`
    );
    console.log(data.categoryId, data.searchParams);

    return response.data;
  } catch (error: any) {
    data.setError(true);
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
      url: `/api/Discussions?categoryId=${props.data[4]}&pageIndex=${props.data[1]}&pageSize=5&search=${props.data[0].query}&orderCol=${props.data[3]}&orderDirection=${props.data[2]}`,
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
