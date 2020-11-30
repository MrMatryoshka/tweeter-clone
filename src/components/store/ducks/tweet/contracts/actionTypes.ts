import {
    FetchTweetDataActionInterface,
    SetTweetDataActionInterface,
    SetTweetDataLoadingStateActionInterface,
    TweetDataActionsType
} from "../actionCreater";
import {LoadingState} from "./state";
import {Tweets} from "../../tweets/contracts/state";

export const setTweetDataLoadingState = (payload: LoadingState) :  SetTweetDataLoadingStateActionInterface=> ({
    type: TweetDataActionsType.SET_LOADING_STATE ,
    payload,
})


export const setTweetData = (payload: Tweets) : SetTweetDataActionInterface => ({
    type: TweetDataActionsType.SET_TWEET_DATA ,
    payload,
})

export const fetchTweetData = () : FetchTweetDataActionInterface => ({
    type: TweetDataActionsType.FETCH_TWEET_DATA
})

export type TweetDataAction =
    SetTweetDataActionInterface |
    FetchTweetDataActionInterface|
    SetTweetDataLoadingStateActionInterface
