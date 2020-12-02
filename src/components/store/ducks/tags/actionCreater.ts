import {TagLoadingState, TagsState} from "./contracts/state";
import {
    FetchTagsActionInterface,
    SetTagsActionInterface,
    SetTagsLoadingStateActionInterface,
    TagsActionsType
} from "./contracts/actionType";

export const setTagsLoadingState = (payload: TagLoadingState) :  SetTagsLoadingStateActionInterface=> ({
    type: TagsActionsType.SET_LOADING_TAG_STATE ,
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
