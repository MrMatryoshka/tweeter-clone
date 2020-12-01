import {LoadingState} from './contracts/state';
import {call,takeEvery,put} from 'redux-saga/effects'
import {setTweetsLoadingState} from "../tweets/actionCreater";
import {TweetDataApi} from "../../../../services/api/twetAPI";
import {Tweets} from "../tweets/contracts/state";
import {FetchTweetDataActionInterface, TweetDataActionsType} from "./contracts/actionTypes";
import {setTweetData} from "./actionCreater";

export function* fetchTweetDataRequest({payload:tweetId}: FetchTweetDataActionInterface){

    try {
    const data : Tweets[] = yield  call(TweetDataApi.fetchTweetData, tweetId)
        yield put(setTweetData(data[0]))
    }catch (error){
        yield put(setTweetsLoadingState(LoadingState.ERROR))
    }
}

export function* tweetDataSaga(){
    yield takeEvery(TweetDataActionsType.FETCH_TWEET_DATA,fetchTweetDataRequest)
}
