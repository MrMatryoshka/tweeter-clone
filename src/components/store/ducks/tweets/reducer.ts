import produce, {Draft} from "immer";
import {LoadingState, TweetsState} from "./contracts/state";
import {TweetsAction, TweetsActionsType} from "./actionCreater";

const initialTweetsState: TweetsState = {
    items : [],
    loadingState :  LoadingState.NEVER,

};


export  const tweetsReducer = produce((draft : Draft<TweetsState>,action : TweetsAction) => {

    switch (action.type) {
        case TweetsActionsType.SET_TWEETS :
            draft.items = action.payload
            draft.loadingState = LoadingState.LOADED
            break

        case TweetsActionsType.FETCH_TWEETS :
            draft.items = []
            draft.loadingState = LoadingState.LOADING
            break

        case TweetsActionsType.SET_LOADING_STATE :
            draft.loadingState = action.payload
            break

        default:
            break
    }

},initialTweetsState);
