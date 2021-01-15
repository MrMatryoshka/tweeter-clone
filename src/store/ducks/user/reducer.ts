import {UserState} from "./contracts/state";
import {LoadingStatus} from "../../types";
import produce, {Draft} from "immer";
import {UserAction} from "./actionCreater";
import {UserActionType} from "./contracts/actionTypes";


const initialUserState : UserState ={
    data: undefined,
    status: LoadingStatus.NEVER
}

export const userReducer = produce((draft:Draft<UserState>,action: UserAction) => {
    switch (action.type) {
        case UserActionType.SET_USER_DATA :
            draft.data = action.payload
            console.log("userReduser" , draft.data)
            draft.status = LoadingStatus.SUCCESS
            break
        case UserActionType.SET_LOADING_STATE :
            draft.status = action.payload
            break
        default:
            break;

    }
},initialUserState)
