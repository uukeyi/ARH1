import { createAsyncThunk } from "@reduxjs/toolkit";
import $host from "../../http";
import { ILandingBlock } from "../../interfaces/landingPageResponse";
import axios from "axios";

interface IGetLandingPageBlocksParams {
   showInvisible: boolean;
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
