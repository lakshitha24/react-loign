import {dUserConstants} from "../_constants";

export function addDUser(state={},action){
    switch (action.type){
        case dUserConstants.ADD_REQUEST:
            return {adding : true}
        case dUserConstants.ADD_SUCCESS:
            return {};
        case dUserConstants.ADD_FAILURE:
            return {};
        default:
            return false;
    }
}

