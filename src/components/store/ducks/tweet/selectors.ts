import {RootState} from "../../store";
import {LoadingState, TweetDataState} from "./contracts/state";
import {createSelector} from "reselect";

export const selectTweetData =(state : RootState) : TweetDataState => state.tweets

export const selectLoadingState = (state : RootState): LoadingState => selectTweetData(state).loadingState
export const selectIsTweetsLoading = (state : RootState):boolean => selectLoadingState(state) === LoadingState.LOADING
export const selectIsTweetsLoaded = (state : RootState): boolean => selectLoadingState(state) === LoadingState.LOADED


export const selectTweetDataItems = createSelector(selectTweetData, (tweetData) => tweetData.data)

