import produce, {Draft} from "immer";
import {TagLoadingState, TagsState} from "./contracts/state";
import {TagsAction} from "./actionCreater";
import {TagsActionsType} from "./contracts/actionType";

const initialTagsState: TagsState = {
    items : [],
    loadingState :  TagLoadingState.NEVER,

};


export  const tagsReducer = produce((draft : Draft<TagsState>,action : TagsAction) => {

    switch (action.type) {
        case TagsActionsType.SET_TAGS :
            draft.items = action.payload
            draft.loadingState = TagLoadingState.LOADED
            break

        case TagsActionsType.FETCH_TAGS :
            draft.items = []
            draft.loadingState = TagLoadingState.LOADING
            break

        case TagsActionsType.SET_LOADING_TAG_STATE :
            draft.loadingState = action.payload
            break

        default:
            break
    }

},initialTagsState);
