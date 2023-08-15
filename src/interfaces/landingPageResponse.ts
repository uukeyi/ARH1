export interface ILandingBlockElement {
   id: number;
   blockId: number;
   typeId: number;
   value: string;
   orderIndex: number;
   block: ILandingBlock;
   type: {
      id: number;
      name: string;
   };
}

export interface ILandingBlock {
   id: number;
   name: string;
   orderIndex: number;
   isVisible: boolean;
   isDeleted: boolean;
   elements: ILandingBlockElement[];
}

