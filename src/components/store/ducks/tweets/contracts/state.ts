export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER'
}


export  interface Tweets {
    _id : string
    text:string
    user :{
        "fullname": string,
        "username": string,
        "avatarUrl" :string
    }
}

export interface TweetsState {
    items:Tweets[],
    loadingState: LoadingState
}
