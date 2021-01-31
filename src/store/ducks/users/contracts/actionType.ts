import {Action} from "redux";
import {User} from "../../user/contracts/state";
import {LoadingStatus} from "../../../types";



export enum UsersActionsType {
    SET_ITEMS ='users/ SET_ITEMS',
    FETCH_ITEMS ='users/FETCH_ITEMS',
    SET_LOADING_STATE = 'users/SET_LOADING_STATE',

}

export  interface SetUsersActionInterface extends  Action<UsersActionsType> {
    type: UsersActionsType.SET_ITEMS ;
    payload: User[]

}
export  interface FetchUsersActionInterface extends  Action<UsersActionsType> {
    type: UsersActionsType.FETCH_ITEMS ;

}
export interface SetUsersDataLoadingStatusActionInterface extends Action<UsersActionsType>{
    type:UsersActionsType.SET_LOADING_STATE
    payload:LoadingStatus
}


