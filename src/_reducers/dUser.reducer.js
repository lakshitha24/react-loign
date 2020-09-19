import {dUserConstants} from "../_constants";

export function dUser(state = {}, action) {
    switch (action.type) {
        case dUserConstants.GETALL_REQUEST:
            return {loading: true};
        case dUserConstants.GETALL_SUCCESS:
            return {items: action.dUsers};
        case dUserConstants.GETALL_FAILURE:
            return {error: action.error};
        case dUserConstants.DELETE_REQUEST:
            return {
                ...state,
                items: state.items.map(dUser =>
                    dUser.id === action.id ? {...dUser, deleting: true} : dUser
                )
            };
        case dUserConstants.GETALL_SUCCESS:
            return {
                items: state.item.filter(dUser => dUser.id !== action.id)
            };
        case dUserConstants.DELETE_FAILURE:
            return {
                ...state,
                items: state.items.map(dUser=>{
                    if(dUser.id === action.id){
                        const {deleting, ...userCopy} = dUser;
                        return {...userCopy, deleteError: action.error}
                    }
                    return dUser
                })
            }
        default:
            return state;
    }
}