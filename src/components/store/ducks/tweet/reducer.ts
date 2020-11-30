import produce, {Draft} from "immer";
import {LoadingState, TweetDataState} from "./contracts/state";
import { TweetDataActionsType} from "./actionCreater";
import {TweetDataAction} from "./contracts/actionTypes";


const initialTweetDataState: TweetDataState = {
    data:undefined,
    loadingState :  LoadingState.NEVER,

};


export  const tweetDataReducer = produce((draft : Draft<TweetDataState>,action : TweetDataAction) => {

    switch (action.type) {
        case TweetDataActionsType.SET_TWEET_DATA :
            draft.data = action.payload
            draft.loadingState = LoadingState.LOADED
            break

        case TweetDataActionsType.FETCH_TWEET_DATA :
            draft.data = undefined
            draft.loadingState = LoadingState.LOADING
            break

        case TweetDataActionsType.SET_LOADING_STATE :
            draft.loadingState = action.payload
            break

        default:
            break
    }

},initialTweetDataState);
