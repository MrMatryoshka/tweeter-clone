import {AddFormState, Tweet, TweetsState} from "./state";
import {Action} from "redux";
import {LoadingStatus} from "../../../types";

export enum TweetsActionsType {
    SET_TWEETS ='tweets/SET_TWEETS',
    FETCH_TWEETS ='tweets/FETCH_TWEETS',
    SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',
    FETCH_ADD_TWEETS ='tweets/FETCH_ADD_TWEETS',
    ADD_TWEETS ='tweets/ADD_TWEETS',
    SET_ADD_FORM_STATE='tweets/SET_ADD_FORM_STATE'
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
    payload:LoadingStatus;

}

export  interface FetchAddTweetsActionInterface extends  Action<TweetsActionsType> {
    type: TweetsActionsType.FETCH_ADD_TWEETS;
    payload: string;

}

export  interface AddTweetsActionInterface extends  Action<TweetsActionsType> {
    type: TweetsActionsType.ADD_TWEETS;
    payload: Tweet;

}

export  interface SetAddFormTweetsLoadingStateActionInterface extends  Action<TweetsActionsType> {
    type: TweetsActionsType.SET_ADD_FORM_STATE ;
    payload:AddFormState;

}
