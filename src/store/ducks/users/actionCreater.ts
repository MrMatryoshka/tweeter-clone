import {
    FetchUsersActionInterface,
    SetUsersActionInterface,
    SetUsersDataLoadingStatusActionInterface,
    UsersActionsType
} from "./contracts/actionType";
import {User} from "../user/contracts/state";


export const setUsers = (payload: User[]) : SetUsersActionInterface => ({
    type: UsersActionsType.SET_ITEMS ,
    payload,
})

export const fetchUsers = () : FetchUsersActionInterface => ({
    type:UsersActionsType.FETCH_ITEMS
})

// export const setUsersDataLoadingStatus = ( payload :User[]) : SetUsersDataLoadingStatusActionInterface => ( {
//         type:UsersActionsType.SET_LOADING_STATE,
//         payload
//     }
// )

export type UsersAction =
    SetUsersActionInterface |
    FetchUsersActionInterface
