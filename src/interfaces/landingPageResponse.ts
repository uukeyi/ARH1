export interface ILandingBlockElement {
  id: number | string;
  blockId: number | string;
  typeId: number | string;
  value: string;
  orderIndex: number | string;
  block: ILandingBlock;
  aosAnimation: string;
  type: {
    id: number | string;
    name: string;
  };
}

export interface ILandingBlock {
  id: number | string;
  name: string;
  orderIndex: number | string;
  isVisible: boolean;
  isDeleted: boolean;
  isMain: boolean;
  page: string;
  elements: ILandingBlockElement[];
}

export let landingElPrototype: ILandingBlockElement = {
  id: '',
  blockId: '',
  typeId: '',
  value: '',
  orderIndex: '',
  aosAnimation: '',

  block: {
    id: '',
    name: '',
    orderIndex: '',
    isVisible: false,
    isDeleted: false,
    isMain: false,
    page: '',
    elements: [],
  },
  type: {
    id: '',
    name: '',
  },
};
export let landingBlockPrototype: ILandingBlock = {
  id: '',
  name: '',
  isVisible: false,
  isDeleted: false,
  isMain: false,
  page: '',
  orderIndex: '',
  elements: [],
};
