import {addTweets, setAddFormTweetsStateLoadingState, setTweets, setTweetsLoadingState} from "./actionCreater";
import {AddFormState, LoadingState} from './contracts/state'
import {call, put, takeEvery} from 'redux-saga/effects'
import {TweetsApi} from "../../../services/api/twetsAPI";
import {FetchAddTweetsActionInterface, TweetsActionsType} from "./contracts/actionTypes";
import {AddTweetDataApi} from "../../../services/api/addtweetAPI";

export function* fetchTweetsRequest(){
    try {
    const items = yield  call(TweetsApi.fetchTweets)
        yield put(setTweets(items))
    }catch (error){
        yield put(setTweetsLoadingState(LoadingState.ERROR))
    }
}

export function* fetchAddTweetsRequest({payload:text} : FetchAddTweetsActionInterface){
    try {
        const item = yield call(AddTweetDataApi.addTweet, text);
        yield put(addTweets(item))
    }catch (error){
        yield put(setAddFormTweetsStateLoadingState(AddFormState.ERROR))
    }
}

export function* tweetsSaga(){
    yield takeEvery(TweetsActionsType.FETCH_TWEETS,fetchTweetsRequest);
    yield takeEvery(TweetsActionsType.FETCH_ADD_TWEETS,fetchAddTweetsRequest)
}
