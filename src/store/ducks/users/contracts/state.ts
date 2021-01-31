import {User} from "../../user/contracts/state";
import {LoadingStatus} from "../../../types";

export  interface UsersState {
    items: User[],
    loadingStatus: LoadingStatus;
}
