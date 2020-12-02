import {Tweets} from "../../tweets/contracts/state";

export enum TweetDataLoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER'
}

export interface TweetDataState {
    data? :Tweets,
    loadingState: TweetDataLoadingState
}
