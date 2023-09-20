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
export const getDiscussionProps = createAsyncThunk<any, any, { rejectValue?: string; props: any }>(
  'discussionQuestionsSlice/getDiscussionQuestions',
  async (props, { rejectWithValue }) => {
    try {
      const response = await $host<any>({
        method: 'GET',
        url: `/api/Discussions?pageIndex=${props.data[1]}&pageSize=5&search=${props.data[0].query}&orderCol=${props.data[3]}&orderDirection=${props.data[2]}`,
      });

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
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
