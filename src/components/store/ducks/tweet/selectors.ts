import {RootState} from "../../store";
import {TweetDataLoadingState, TweetDataState} from "./contracts/state";

export const selectTweetData =(state : RootState) : TweetDataState => state.tweet

export const selectTweeDataLoadingState = (state : RootState): TweetDataLoadingState => selectTweetData(state).loadingState
export const selectIsTweetDataLoading = (state : RootState):boolean => selectTweeDataLoadingState(state) === TweetDataLoadingState.LOADING
export const selectIsTweetDataLoaded = (state : RootState): boolean => selectTweeDataLoadingState(state) === TweetDataLoadingState.LOADED


export const selectTweetDataItems = (state:RootState): TweetDataState['data'] => selectTweetData(state).data

