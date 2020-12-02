import {RootState} from "../../store";
import {AddFormState, LoadingState, TweetsState} from "./contracts/state";
import {createSelector} from "reselect";

export const selectTweets =(state : RootState) : TweetsState => state.tweets

export const selectLoadingState = (state : RootState): LoadingState => selectTweets(state).loadingState

export const selectAddFormLoadingState = (state : RootState): AddFormState => selectTweets(state).addFormState

export const selectIsTweetsLoading = (state : RootState):boolean => selectLoadingState(state) === LoadingState.LOADING

export const selectIsTweetsLoaded = (state : RootState): boolean => selectLoadingState(state) === LoadingState.LOADED


export const selectTweetsItems = createSelector(selectTweets, (tweets) => tweets.items)

