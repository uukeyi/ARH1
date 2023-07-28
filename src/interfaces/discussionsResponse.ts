export interface IAuthor {
   id: number;
   email: string;
   password: string;
   emailConfirmed: boolean;
   name: string;
   isAdmin: boolean;
   createdAt: string;
   isBlocked: boolean;
   isDeleted: boolean;
}
export interface ICategory {
   id: number;
   name: string;
   description: string;
   iconUrl: null | string;
   isDeleted: string;
}

export interface IDiscussion {
   id: number;
   title: string;
   description: string;
   authorId: number;
   categoryId: number;
   createdAt: string;
   isDeleted: boolean;
   author: IAuthor;
   category: ICategory;
   comments: any;
}
 export interface IDiscussionGetResponse {
    entities : IDiscussion[]
    pageIndex : number,
    totalPages : number
  }