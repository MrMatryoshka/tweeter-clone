import {TagsActionsType, setTagsLoadingState, setTags} from "./actionCreater";
import {LoadingState} from './contracts/state'
import {call,takeEvery,put} from 'redux-saga/effects'
import {TagsApi} from "../../../../services/api/tagsAPI";

export function* fetchTagsRequest(){
    try {
        const items = yield  call(TagsApi.fetchTweets)
        yield put(setTags(items))
    }catch (error){
        yield put(setTagsLoadingState(LoadingState.ERROR))
    }
}

export function* tagsSaga(){
    yield takeEvery(TagsActionsType.FETCH_TAGS,fetchTagsRequest)
}
