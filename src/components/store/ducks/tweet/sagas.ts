import {TweetDataActionsType} from "./actionCreater";
import {setTweetData} from "./contracts/actionTypes"
import {LoadingState} from './contracts/state'
import {call,takeEvery,put} from 'redux-saga/effects'
import {TweetApi} from "../../../../services/api/twetsAPI";
import {setTweetsLoadingState} from "../tweets/actionCreater";

export function* fetchTweetsRequest(){
    try {
    const items = yield  call(TweetApi.fetchTweets)
        yield put(setTweetData(items))
    }catch (error){
        yield put(setTweetsLoadingState(LoadingState.ERROR))
    }
}

export function* tweetDataSaga(){
    yield takeEvery(TweetDataActionsType.FETCH_TWEET_DATA,fetchTweetsRequest)
}
