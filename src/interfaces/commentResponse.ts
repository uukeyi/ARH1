export interface ICommentResponse {
    id : number,
    description : string,
    createdAt : string,
    authorId : number,
    discussionId : number,
    parentId : number,
    isDeleted : boolean
    author : IAuthorResponse,
    discussion : IDiscussionResponse,
    parent : string
}
export interface IAuthorResponse {
    id : number,
    email : string,
    password : string,
    emailConfirmed : true,
    name : string,
    isAdmin : boolean,
    createdAt : string,
    isBlocked : boolean,
    isDeleted : boolean
}
export interface IDiscussionResponse {
    id : number,
    title : string,
    description : string,
    authorId : number,
    categoryId : number,
    createdAt : string,
    isDeleted : boolean,
    author : IAuthorResponse,
    category : {
        id : number,
        name : string,
        description : string,
        iconUrl : string,
        isDeleted : boolean
    },
    comments : string[],
}


