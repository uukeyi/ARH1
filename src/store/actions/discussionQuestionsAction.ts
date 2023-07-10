import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import $host from '../../http';
interface IinputData {
  data: ICreateData;
  setError: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}
interface ICreateData {
  title: string;
  description: string;
}
export const getDiscussionQuestions = createAsyncThunk<any, string, { rejectValue?: string }>(
  'discussionQuestionsSlice/getDiscussionQuestions',
  async (path, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log(response);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
export const getDiscussionDetails = createAsyncThunk<
  any,
  string,
  { rejectValue?: string; id: string }
>('discussionQuestionsSlice/getDiscussionDetails', async (id, { rejectWithValue }) => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return response;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
export const getDiscussionSearch = createAsyncThunk<
  any,
  string,
  { rejectValue?: string; query: string }
>('discussionQuestionsSlice/getDiscussionSearch', async (query, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${$host}/api/Discussions?search=${query}`);
    return response;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
export const createDiscussionQuestion = createAsyncThunk<any, IinputData, { rejectValue?: string }>(
  'discussionQuestionsSlice/createDiscussionQuestions',
  async (inputData, { rejectWithValue }) => {
    const { title, description } = inputData.data;
    try {
      const responseReg = await $host<any>({
        url: '/api/Discussions',
        method: 'POST',
        params: {
          title: title,
          description: description,
        },
      });
    } catch (error: any) {
      inputData.setError(true);
      return rejectWithValue(error.message);
    }
  }
);
