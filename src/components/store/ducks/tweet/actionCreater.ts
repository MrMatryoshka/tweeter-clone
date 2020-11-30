import {Action} from "redux";
import {Tweets} from "../tweets/contracts/state";
import {LoadingState} from "./contracts/state";

export enum TweetDataActionsType {
    SET_TWEET_DATA ='tweet/SET_TWEET_DATA',
    FETCH_TWEET_DATA ='tweet/FETCH_TWEET_DATA',
    SET_LOADING_STATE = 'tweet/SET_LOADING_STATE'
}

export  interface SetTweetDataActionInterface extends  Action<TweetDataActionsType> {
    type: TweetDataActionsType.SET_TWEET_DATA ;
    payload: Tweets;

}
export  interface FetchTweetDataActionInterface extends  Action<TweetDataActionsType> {
    type: TweetDataActionsType.FETCH_TWEET_DATA ;

}

export  interface SetTweetDataLoadingStateActionInterface extends  Action<TweetDataActionsType> {
    type: TweetDataActionsType.SET_LOADING_STATE ;
    payload:LoadingState;

}


