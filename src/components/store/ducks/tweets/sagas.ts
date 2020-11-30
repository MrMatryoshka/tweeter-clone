import {TweetsActionsType, setTweetsLoadingState, setTweets} from "./actionCreater";
import {LoadingState} from './contracts/state'
import {call,takeEvery,put} from 'redux-saga/effects'
import {TweetApi} from "../../../../services/api/twetsAPI";

export function* fetchTweetsRequest(){
    try {
    const items = yield  call(TweetApi.fetchTweets)
        yield put(setTweets(items))
    }catch (error){
        yield put(setTweetsLoadingState(LoadingState.ERROR))
    }
}

export function* tweetsSaga(){
    yield takeEvery(TweetsActionsType.FETCH_TWEETS,fetchTweetsRequest)
}
