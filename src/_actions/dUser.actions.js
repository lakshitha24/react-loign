import {dUserConstants} from "../_constants";
import {dUserService} from "../_services";

export const dUserActions = {
    add,
    getAll,
    delete: _delete
}

function add(dUser) {
    return dispatch => {
        dispatch(request(dUser));

        dUserService.add(dUser)
            .then(
                user => {
                    dispatch(success());
                },
                error => {
                    dispatch(failure(error.toString()))
                }
            )
    };

    function request(dUser) {
        return {type: dUserConstants.ADD_REQUEST, dUser}
    }

    function success(dUser) {
        return {type: dUserConstants.ADD_SUCCESS, dUser}
    }

    function failure(error) {
        return {type: dUserConstants.ADD_FAILURE, error}
    }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        dUserService.getAll()
            .then(
                dUsers => dispatch(success(dUsers)),
                error => dispatch(failure(error.toString()))
            )
    };

    function request() {
        return {type: dUserConstants.GETALL_REQUEST}
    }

    function success(dUsers) {
        return {type: dUserConstants.GETALL_SUCCESS, dUsers}
    }

    function failure(error) {
        return {type: dUserConstants.GETALL_FAILURE, error}
    }
}

function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        dUserService.delete(id)
            .then(
                dUser => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) {
        return {type: dUserConstants.DELETE_REQUEST, id}
    }

    function success(id) {
        return {type: dUserConstants.DELETE_SUCCESS, id}
    }

    function failure(id, error) {
        return {type: dUserConstants.DELETE_FAILURE, id, error}
    }
}