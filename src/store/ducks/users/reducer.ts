import produce, {Draft} from "immer";
import {UsersState} from "./contracts/state";
import {LoadingStatus} from "../../types";
import {UsersAction} from "./actionCreater";
import {UsersActionsType} from "./contracts/actionType";

const initialTagsState: UsersState = {
    items : [],
    loadingStatus : LoadingStatus.NEVER,

};


export  const usersReducer = produce((draft : Draft<UsersState>, action : UsersAction) => {

    switch (action.type) {
        case UsersActionsType.SET_ITEMS :
            draft.items = action.payload
            draft.loadingStatus = LoadingStatus.LOADED
            break

        case UsersActionsType.FETCH_ITEMS :
            draft.items = []
            draft.loadingStatus = LoadingStatus.LOADING
            break

        // case UsersActionsType.SET_LOADING_TAG_STATE :
        //     draft.loadingStatus = action.payload
        //     break

        default:
            break
    }

},initialTagsState);
