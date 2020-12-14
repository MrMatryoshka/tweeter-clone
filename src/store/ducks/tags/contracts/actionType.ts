import {TagLoadingState, TagsState} from "./state";
import {Action} from "redux";

export enum TagsActionsType {
    SET_TAGS ='tag/ SET_TAGS',
    FETCH_TAGS ='tag/FETCH_TAGS',
    SET_LOADING_TAG_STATE = 'tweets/SET_LOADING_TAG_STATE'
}

export  interface SetTagsActionInterface extends  Action<TagsActionsType> {
    type: TagsActionsType.SET_TAGS ;
    payload: TagsState['items'];

}
export  interface FetchTagsActionInterface extends  Action<TagsActionsType> {
    type: TagsActionsType.FETCH_TAGS ;

}

export  interface SetTagsLoadingStateActionInterface extends  Action<TagsActionsType> {
    type: TagsActionsType.SET_LOADING_TAG_STATE ;
    payload:TagLoadingState;

}
