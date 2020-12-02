import produce, {Draft} from "immer";
import {TweetDataLoadingState, TweetDataState} from "./contracts/state";
import { TweetDataActionsType} from "./contracts/actionTypes";
import {TweetDataAction} from "./actionCreater";



const initialTweetDataState: TweetDataState = {
    data:undefined,
    loadingState :  TweetDataLoadingState.NEVER,

};


export  const tweetDataReducer = produce((draft : Draft<TweetDataState>,action : TweetDataAction) => {

    switch (action.type) {
        case TweetDataActionsType.SET_TWEET_DATA :
            draft.data = action.payload
            draft.loadingState = TweetDataLoadingState.LOADED
            break

        case TweetDataActionsType.FETCH_TWEET_DATA :
            draft.data = undefined
            draft.loadingState = TweetDataLoadingState.LOADING
            break

        case TweetDataActionsType.SET_LOADING_STATE :
            draft.loadingState = action.payload
            break

        default:
            break
    }

},initialTweetDataState);
