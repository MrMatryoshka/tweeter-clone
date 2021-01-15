import {LoadingStatus} from "../../../types";

export enum AddFormState {
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
    ADD_FORM_TWEETS ='ADD_FORM_TWEETS'
}


export  interface Tweet {
    _id : string
    text:string
    createdAt: string
    user :{
        "fullname": string,
        "username": string,
        "avatarUrl" :string
    }
}

export interface TweetsState {
    items:Tweet[],
    loadingState: LoadingStatus,
    addFormState:AddFormState
}
