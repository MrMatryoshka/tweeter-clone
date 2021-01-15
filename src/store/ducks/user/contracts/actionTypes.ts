import {Action} from 'redux';
import {User} from "./state";
import {LoadingStatus} from "../../../types";
import {LoginModalProps} from "../../../../pages/Signin/components/LoginModal";


export enum UserActionType {
    SET_USER_DATA ='user/SET_USER_DATA',
    FETCH_SIGN_IN ='user/FETCH_SIGN_IN',
    SET_LOADING_STATE = 'user/SET_LOADING_STATE',

}

export interface FetchSignInActionInterface extends Action<UserActionType>{
    type:UserActionType.FETCH_SIGN_IN
    payload:LoginModalProps
}


export interface SetUserDataActionInterface extends Action<UserActionType>{
    type:UserActionType.SET_USER_DATA
    payload:User| undefined
}

export interface SetUserDataLoadingStatusActionInterface extends Action<UserActionType>{
    type:UserActionType.SET_LOADING_STATE
    payload:LoadingStatus
}
