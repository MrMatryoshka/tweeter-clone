import {AddFormState, LoadingState, Tweet, TweetsState} from "./contracts/state";
import {
    AddTweetsActionInterface,
    FetchAddTweetsActionInterface,
    FetchTweetsActionInterface, SetAddFormTweetsLoadingStateActionInterface,
    SetTweetsActionInterface,
    SetTweetsLoadingStateActionInterface,
    TweetsActionsType
} from "./contracts/actionTypes";


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

export const fetchAddTweets = (payload: string) : FetchAddTweetsActionInterface => ({
    type: TweetsActionsType.FETCH_ADD_TWEETS ,
    payload,
})

export const addTweets = (payload: Tweet) : AddTweetsActionInterface => ({
    type: TweetsActionsType.ADD_TWEETS ,
    payload,
})

export const setAddFormTweetsStateLoadingState = (payload: AddFormState) :  SetAddFormTweetsLoadingStateActionInterface => ({
    type: TweetsActionsType.SET_ADD_FORM_STATE ,
    payload,
})




export type TweetsAction =
    SetTweetsActionInterface |
    FetchTweetsActionInterface|
    SetTweetsLoadingStateActionInterface |
    FetchAddTweetsActionInterface |
    AddTweetsActionInterface |
    SetAddFormTweetsLoadingStateActionInterface

