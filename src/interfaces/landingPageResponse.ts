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
   elements: ILandingBlockElement[];
}

export let landingBlockPrototype : ILandingBlockElement = {
   id: "",
   blockId: "",
   typeId: "",
   value: "",
   orderIndex: "",
   aosAnimation: "",

   block: {
      id: "",
      name: "",
      orderIndex: "",
      isVisible: false,
      isDeleted: false,
      elements: [],
   },
   type: {
      id: "",
      name: "",
   },
};