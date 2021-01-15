import {RootState} from "../../store";
import {AddFormState, TweetsState} from "./contracts/state";
import {createSelector} from "reselect";
import {LoadingStatus} from "../../types";

export  const selectTweetsState = (state: RootState) : TweetsState => state.tweets

export const selectLoadingState = (state : RootState): LoadingStatus => selectTweetsState(state).loadingState

export const selectAddFormLoadingState = (state : RootState): AddFormState => selectTweetsState(state).addFormState

export const selectIsTweetsLoading = (state : RootState):boolean => selectLoadingState(state) === LoadingStatus.LOADING

export const selectIsTweetsLoaded = (state : RootState): boolean => selectLoadingState(state) === LoadingStatus.LOADED


export const selectTweetsItems = createSelector(selectTweetsState, (tweets) => tweets.items)

