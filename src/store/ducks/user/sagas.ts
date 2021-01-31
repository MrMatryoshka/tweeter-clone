import { call, put, takeLatest } from 'redux-saga/effects';

import { LoadingStatus } from '../../types';
import {FetchSignInActionInterface, FetchSignUpActionInterface, UserActionsType} from './contracts/actionTypes';
import {AuthApi} from "../../../services/api/loginApi";
import {setUserData, setUserLoadingStatus} from "./actionCreater";

export function* fetchSignInRequest({ payload }: FetchSignInActionInterface) {
    try {
        const { data } = yield call(AuthApi.signIn, payload);
        window.localStorage.setItem('token', data.token);
        yield put(setUserData(data));
    } catch (error) {
        yield put(setUserLoadingStatus(LoadingStatus.ERROR));
    }
}

export function* fetchSignUpRequest({ payload }: FetchSignUpActionInterface) {
    try {
        yield put(setUserLoadingStatus(LoadingStatus.LOADING));
        yield call(AuthApi.signUp, payload);
        yield put(setUserLoadingStatus(LoadingStatus.SUCCESS));
    } catch (error) {
        yield put(setUserLoadingStatus(LoadingStatus.ERROR));
    }
}

export function* userSaga() {
    yield takeLatest(UserActionsType.FETCH_SIGN_IN, fetchSignInRequest);
    yield takeLatest(UserActionsType.FETCH_SIGN_UP, fetchSignUpRequest);
}
