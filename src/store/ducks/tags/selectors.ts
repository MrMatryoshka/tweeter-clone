import {RootState} from "../../store";
import {TagLoadingState, TagsState} from "./contracts/state";
import {createSelector} from "reselect";

export const selectTags = (state : RootState) : TagsState => state.tags

export const selectLoadingState = (state : RootState): TagLoadingState => selectTags(state).loadingState
export const selectIsTagsLoading = (state : RootState):boolean => selectLoadingState(state) === TagLoadingState.LOADING
export const selectIsTagsLoaded = (state : RootState): boolean => selectLoadingState(state) === TagLoadingState.LOADED


export const selectTagsItems = createSelector(selectTags, (tags) => tags.items)

