import {LoadingState, TagsState} from "./contracts/state";
import {Action} from "redux";

export enum TagsActionsType {
    SET_TAGS ='tag/ SET_TAGS',
    FETCH_TAGS ='tag/FETCH_TAGS',
    SET_LOADING_STATE = 'tweets/SET_LOADING_STATE'
}

export  interface SetTagsActionInterface extends  Action<TagsActionsType> {
    type: TagsActionsType.SET_TAGS ;
    payload: TagsState['items'];

}
export  interface FetchTagsActionInterface extends  Action<TagsActionsType> {
    type: TagsActionsType.FETCH_TAGS ;

}

export  interface SetTagsLoadingStateActionInterface extends  Action<TagsActionsType> {
    type: TagsActionsType.SET_LOADING_STATE ;
    payload:LoadingState;

}

export const setTagsLoadingState = (payload: LoadingState) :  SetTagsLoadingStateActionInterface=> ({
    type: TagsActionsType.SET_LOADING_STATE ,
    payload,
})


export const setTags = (payload: TagsState['items']) : SetTagsActionInterface => ({
    type: TagsActionsType.SET_TAGS ,
    payload,
})

export const fetchTags = () : FetchTagsActionInterface => ({
    type: TagsActionsType.FETCH_TAGS
})

export type TagsAction =
    SetTagsActionInterface |
    FetchTagsActionInterface|
    SetTagsLoadingStateActionInterface
