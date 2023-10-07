import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  createBlock,
  createElement,
  getLandingPageBlock,
  getLandingPageBlocks,
  updateBlock,
  updateElement,
} from '../actions/landingPageActions';
import {
  ILandingBlock,
  ILandingBlockElement,
  landingBlockPrototype,
} from '../../interfaces/landingPageResponse';

interface IDataState {
  elements: ILandingBlock[];
  singleBlock: ILandingBlock;
}

const initialState: IDataState = {
  elements: [],
  singleBlock: landingBlockPrototype,
};

export const landingPageSlice = createSlice({
  name: 'landingPageSlice',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getLandingPageBlocks.fulfilled,
      (state, action: PayloadAction<ILandingBlock[]>) => {
        state.elements = action.payload;
      }
    );
    builder.addCase(
      getLandingPageBlock.fulfilled,
      (state, action: PayloadAction<ILandingBlock>) => {
        state.singleBlock = action.payload;
      }
    );
    builder.addCase(
      updateElement.fulfilled,
      (state, action: PayloadAction<ILandingBlockElement>) => {
        state.elements = state.elements.filter((element) => {
          if (element.id === action.payload.block.id) {
            element = action.payload.block;
            return element;
          }
          return element;
        });
      }
    );
    builder.addCase(createBlock.fulfilled, (state, action: PayloadAction<ILandingBlock>) => {
      state.elements = [...state.elements, action.payload];
    });
    builder.addCase(updateBlock.fulfilled, (state, action: PayloadAction<ILandingBlock>) => {
      state.elements = state.elements.filter((element) => {
        if (element.id === action.payload.id) {
          element = action.payload;
          return element;
        }
        return element;
      });
    });
    builder.addCase(
      createElement.fulfilled,
      (state, action: PayloadAction<ILandingBlockElement>) => {
        state.elements = state.elements.filter((element) => {
          if (element.id === action.payload.block.id) {
            element = action.payload.block;
            return element;
          }
          return element;
        });
      }
    );
  },
});

export const {} = landingPageSlice.actions;
export default landingPageSlice.reducer;
