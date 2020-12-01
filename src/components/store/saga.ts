import {all} from 'redux-saga/effects';
import {tweetsSaga} from "./ducks/tweets/sagas";
import {tagsSaga} from "./ducks/tags/sagas";
import {tweetDataSaga} from "./ducks/tweet/sagas";

export default function* rootSaga () {
    yield all([
        tweetsSaga(),
        tagsSaga(),
        tweetDataSaga()
    ])
}