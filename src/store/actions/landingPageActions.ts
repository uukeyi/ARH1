import { createAsyncThunk } from "@reduxjs/toolkit";
import $host from "../../http";
import {
   ILandingBlock,
   ILandingBlockElement,
} from "../../interfaces/landingPageResponse";
import axios from "axios";

interface IGetLandingPageBlocksParams {
   showInvisible: boolean;
   setError: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}
interface IUpdateElement {
   elementId: number | string;
   value: string;
   setError: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}
interface ICreateBlock {
   nameBlock: string;
   orderIndex: number;
   setError: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}
interface IDeleteBlock {
   idBlock: number | string;
   setError: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}
interface IUpdateBlock {
   orderIndex: number | string;
   idBlock: number | string;
   setError: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}
interface ICreateElement {
   idBlock: number | string;
   typeId: number | string;
   value: string;
   orderIndex: number | string;
   setError: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}
export const getLandingPageBlocks = createAsyncThunk<
   ILandingBlock[],
   IGetLandingPageBlocksParams,
   { rejectValue?: string }
>(
   "landingPageSlice/getLandingPageBlocks",
   async (params, { rejectWithValue }) => {
      try {
         const response = await axios<ILandingBlock[]>({
            method: "GET",
            url: "http://194.87.238.163/api/LandingBlocks",
            params: {
               showInvisible: params.showInvisible,
            },
         });
         return response.data;
      } catch (error: any) {
         params.setError(true);
         return rejectWithValue(error.message);
      }
   }
);
export const updateElement = createAsyncThunk<
   ILandingBlockElement,
   IUpdateElement,
   { rejectValue?: string }
>("landingPageSlice/updateElement", async (params, { rejectWithValue }) => {
   try {
      const response = await $host<ILandingBlockElement>({
         method: "PUT",
         url: "/api/LandingBlocks/elements",
         params: {
            id: params.elementId,
         },
         data: {
            value: params.value,
         },
      });
      return response.data;
   } catch (error: any) {
      params.setError(true);
      return rejectWithValue(error.message);
   }
});

export const createBlock = createAsyncThunk<
   ILandingBlock,
   ICreateBlock,
   { rejectValue?: string }
>("landingPageSlice/createBlock", async (params, { rejectWithValue }) => {
   try {
      const response = await $host<ILandingBlock>({
         method: "POST",
         url: "/api/LandingBlocks",
         data: {
            name: params.nameBlock,
            orderIndex: params.orderIndex,
         },
      });
      return response.data;
   } catch (error: any) {
      params.setError(true);
      return rejectWithValue(error.message);
   }
});

export const deleteBlock = createAsyncThunk<
   void,
   IDeleteBlock,
   { rejectValue?: string }
>("landingPageSlice/deleteBlock", async (params, { rejectWithValue }) => {
   try {
      await $host<ILandingBlock>({
         method: "DELETE",
         url: "/api/LandingBlocks",
         params: {
            id: params.idBlock,
         },
      });
   } catch (error: any) {
      params.setError(true);
      return rejectWithValue(error.message);
   }
});

export const updateBlock = createAsyncThunk<
   ILandingBlock,
   IUpdateBlock,
   { rejectValue?: string }
>("landingPageSlice/updateBlock", async (params, { rejectWithValue }) => {
   try {
      const response = await $host<ILandingBlock>({
         method: "PUT",
         url: "/api/LandingBlocks",
         data: {
            orderIndex: params.orderIndex,
         },
         params: {
            id: params.idBlock,
         },
      });
      return response.data;
   } catch (error: any) {
      params.setError(true);
      return rejectWithValue(error.message);
   }
});

export const createElement = createAsyncThunk<
   ILandingBlockElement,
   ICreateElement,
   { rejectValue?: string }
>("landingPageSlice/createElement", async (params, { rejectWithValue }) => {
   try {
      const response = await $host<ILandingBlockElement>({
         method: "POST",
         url: "/api/LandingBlocks/elements",
         data: {
            orderIndex: params.orderIndex,
            value: params.value,
            typeId: params.typeId,
            blockId: params.idBlock,
         },
      });
      return response.data;
   } catch (error: any) {
      params.setError(true);
      return rejectWithValue(error.message);
   }
});
