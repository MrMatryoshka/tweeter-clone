import {UserState} from "./contracts/state";
import {
    FetchSignInActionInterface,
    SetUserDataActionInterface,
    SetUserDataLoadingStatusActionInterface,
    UserActionType
} from "./contracts/actionTypes";
import {LoginModalProps} from "../../../pages/Signin/components/LoginModal";

export const setUserData = ( payload : UserState['data'] ) :SetUserDataActionInterface => ( {
        type:UserActionType.SET_USER_DATA,
        payload
    }
)


export const fetchSignIn = ( payload : LoginModalProps ) :FetchSignInActionInterface => ( {
        type:UserActionType.FETCH_SIGN_IN,
        payload
    }
)


export const setUserDataLoadingStatus = ( payload :UserState['status']) :SetUserDataLoadingStatusActionInterface => ( {
        type:UserActionType.SET_LOADING_STATE,
        payload
    }
)


export type UserAction =
    |SetUserDataActionInterface
    |SetUserDataLoadingStatusActionInterface
