import {FetchSignInActionInterface, UserActionType} from "./contracts/actionTypes";
import {AuthApi} from "../../../services/api/loginApi";
import {call, put, takeLatest} from 'redux-saga/effects'
import {setUserData, setUserDataLoadingStatus} from "./actionCreater";
import {LoadingStatus} from "../../types";

    export function* fetchSighInRequest ( {payload} : FetchSignInActionInterface ) {
        try{
            const {data} = yield  call(AuthApi.signIn,payload)
            window.localStorage.setItem('token', data.token);
            console.log("SagasUser",data)
            yield put(setUserData(data));
        }catch (e) {
            yield put(setUserDataLoadingStatus(LoadingStatus.ERROR))
            console.log("ошибка Saga")
        }

    }


    export function* userSaga() {
    yield takeLatest(UserActionType.FETCH_SIGN_IN,fetchSighInRequest )
    }

