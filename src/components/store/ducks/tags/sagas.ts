import { setTagsLoadingState, setTags} from "./actionCreater";
import {TagLoadingState} from './contracts/state'
import {call,takeEvery,put} from 'redux-saga/effects'
import {TagsApi} from "../../../../services/api/tagsAPI";
import {TagsActionsType} from "./contracts/actionType";

export function* fetchTagsRequest(){
    try {
        const items = yield  call(TagsApi.fetchTweets)
        yield put(setTags(items))
    }catch (error){
        yield put(setTagsLoadingState(TagLoadingState.ERROR))
    }
}

export function* tagsSaga(){
    yield takeEvery(TagsActionsType.FETCH_TAGS,fetchTagsRequest)
}
