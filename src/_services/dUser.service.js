import {authHeader} from "../_helpers";

export const dUserService = {
    add,
    getAll,
    getById,
    update,
    delete: _delete
}

function add(dUser) {
    const requestOptions = {
        method: 'POST',
        headers: {...authHeader(), 'Content-Type': 'application/json ;charset=utf-8'},
        body: JSON.stringify(dUser)
    };
    return fetch(`/dUsers/register`, requestOptions).then(handleResponse);
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`/dUsers`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`https://crudcrud.com/api/47d3d7fcd9c74cc0a10e8064f611a439/dUsers/${id}`, requestOptions).then(handleResponse);
}

function update(dUser) {
    const requestOptions = {
        method: 'PUT',
        headers: {...authHeader(), 'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify(dUser)
    };

    return fetch(`https://crudcrud.com/api/47d3d7fcd9c74cc0a10e8064f611a439/dUsers/${dUser.id}`, requestOptions).then(handleResponse);
    ;
}

function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`https://crudcrud.com/api/47d3d7fcd9c74cc0a10e8064f611a439/dUsers/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                console.log('error');
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}