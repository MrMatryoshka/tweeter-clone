import {RootState} from "../../store";
import {LoadingState, TweetDataState} from "./contracts/state";
// import {createSelector} from "reselect";

export const selectTweetData =(state : RootState) : TweetDataState => state.tweet

export const selectLoadingState = (state : RootState): LoadingState => selectTweetData(state).loadingState
export const selectIsTweetDataLoading = (state : RootState):boolean => selectLoadingState(state) === LoadingState.LOADING
export const selectIsTweetDataLoaded = (state : RootState): boolean => selectLoadingState(state) === LoadingState.LOADED


// export const selectTweetDataItems = createSelector(selectTweetData, (tweetData) => tweetData.data)
export const selectTweetDataItems = (state:RootState): TweetDataState['data'] => selectTweetData(state).data

