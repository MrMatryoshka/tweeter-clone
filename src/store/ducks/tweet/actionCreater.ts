import {
    FetchTweetDataActionInterface,
    SetTweetDataActionInterface,
    SetTweetDataLoadingStateActionInterface,
    TweetDataActionsType
} from "./contracts/actionTypes";
import {TweetDataLoadingState, TweetDataState} from "./contracts/state";

export const setTweetDataLoadingState = (payload: TweetDataLoadingState) :  SetTweetDataLoadingStateActionInterface => ({
    type: TweetDataActionsType.SET_LOADING_STATE ,
    payload
})


export const setTweetData = (payload: TweetDataState['data']) : SetTweetDataActionInterface => ({
    type: TweetDataActionsType.SET_TWEET_DATA,
    payload,
})

export const fetchTweetData = (payload: string) : FetchTweetDataActionInterface => ({
    type: TweetDataActionsType.FETCH_TWEET_DATA,
    payload
})

export type TweetDataAction =
    SetTweetDataActionInterface |
    FetchTweetDataActionInterface|
    SetTweetDataLoadingStateActionInterface
