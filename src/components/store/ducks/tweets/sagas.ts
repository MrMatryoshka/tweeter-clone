import {addTweets, setAddFormTweetsStateLoadingState, setTweets, setTweetsLoadingState} from "./actionCreater";
import {AddFormState, LoadingState} from './contracts/state'
import {call, put, takeEvery} from 'redux-saga/effects'
import {TweetsApi} from "../../../../services/api/twetsAPI";
import {FetchAddTweetsActionInterface, TweetsActionsType} from "./contracts/actionTypes";
import {AddTweetDataApi} from "../../../../services/api/addtweetAPI";

export function* fetchTweetsRequest(){
    try {
    const items = yield  call(TweetsApi.fetchTweets)
        yield put(setTweets(items))
    }catch (error){
        yield put(setTweetsLoadingState(LoadingState.ERROR))
    }
}

export function* fetchAddTweetsRequest({payload} : FetchAddTweetsActionInterface){
    try {
        const data = {
            _id: Math.random().toString(36).substr(2),
            text: payload,
            user: {
                fullname: "Nina4 Rich",
                username: "SALAZAR5",
                avatarUrl: "https://source.unsplash.com/random/100x100?5"
            }
        }

        const item = yield  call(AddTweetDataApi.addTweets,data)
        yield put(addTweets(item))
    }catch (error){
        yield put(setAddFormTweetsStateLoadingState(AddFormState.ERROR))
    }
}

export function* tweetsSaga(){
    yield takeEvery(TweetsActionsType.FETCH_TWEETS,fetchTweetsRequest);
    yield takeEvery(TweetsActionsType.FETCH_ADD_TWEETS,fetchAddTweetsRequest)
}
