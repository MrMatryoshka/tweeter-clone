import {LoadingState, TweetsState} from "./contracts/state";
import {Action} from "redux";

export enum TweetsActionsType {
    SET_TWEETS ='tweets/SET_TWEETS',
    FETCH_TWEETS ='tweets/FETCH_TWEETS',
    SET_LOADING_STATE = 'tweets/SET_LOADING_STATE'
}

export  interface SetTweetsActionInterface extends  Action<TweetsActionsType> {
    type: TweetsActionsType.SET_TWEETS ;
    payload: TweetsState['items'];

}
export  interface FetchTweetsActionInterface extends  Action<TweetsActionsType> {
    type: TweetsActionsType.FETCH_TWEETS ;

}

export  interface SetTweetsLoadingStateActionInterface extends  Action<TweetsActionsType> {
    type: TweetsActionsType.SET_LOADING_STATE ;
    payload:LoadingState;

}

export const setTweetsLoadingState = (payload: LoadingState) :  SetTweetsLoadingStateActionInterface=> ({
    type: TweetsActionsType.SET_LOADING_STATE ,
    payload,
})


export const setTweets = (payload: TweetsState['items']) : SetTweetsActionInterface => ({
    type: TweetsActionsType.SET_TWEETS ,
    payload,
})

export const fetchTweets = () : FetchTweetsActionInterface => ({
    type: TweetsActionsType.FETCH_TWEETS
})

export type TweetsAction =
    SetTweetsActionInterface |
    FetchTweetsActionInterface|
    SetTweetsLoadingStateActionInterface
