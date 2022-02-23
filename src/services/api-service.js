import { fetchWrapper } from '../helpers';

const baseUrl = `/api/users`;

function register(user) {
    return fetchWrapper.post(`${baseUrl}/register`, user);
}

function getAll(url) {
    return fetchWrapper.get(url == undefined ? baseUrl : url);
}

function getById(id) {
    return fetchWrapper.get(`${baseUrl}/${id}`);
}

function update(id, params) {
    return fetchWrapper.put(`${baseUrl}/${id}`, params)
    .then(x => x)
    .catch(err => {
        throw 'Não foi possível realizar a atualização no banco de dados.'
    })
}

export const apiService = {
    register,
    getAll,
    getById,
    update
}