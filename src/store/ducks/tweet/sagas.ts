import {call,takeEvery,put} from 'redux-saga/effects'
import {TweetDataApi} from "../../../services/api/tweetDataAPI";
import {Tweet} from "../tweets/contracts/state";
import {FetchTweetDataActionInterface, TweetDataActionsType} from "./contracts/actionTypes";
import {setTweetData, setTweetDataLoadingState} from "./actionCreater";
import {TweetDataLoadingState} from "./contracts/state";

export function* fetchTweetDataRequest({payload:tweetId}: FetchTweetDataActionInterface){

    try {
    const data : Tweet = yield  call(TweetDataApi.fetchTweetData, tweetId)
        yield put(setTweetData(data))
    }catch (error){
        yield put(setTweetDataLoadingState(TweetDataLoadingState.ERROR))
    }
}

export function* tweetDataSaga(){
    yield takeEvery(TweetDataActionsType.FETCH_TWEET_DATA,fetchTweetDataRequest)
}
