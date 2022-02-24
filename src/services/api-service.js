import { toast } from 'react-toastify';
import { fetchWrapper } from '../helpers';

const baseUrl = `http://localhost:3001/api`;

function register(user) {
    return fetchWrapper.post(`${baseUrl}/v1/users`, user);
}

function getAll(url) {
    return fetchWrapper.get(url == undefined ? `${baseUrl}/v1/users` : url);
}

function getById(id) {
    return fetchWrapper.get(`${baseUrl}/v1/users/${id}`);
}

function update(id, params) {
    return fetchWrapper.patch(`${baseUrl}/v1/users/${id}`, params)
}

export const apiService = {
    register,
    getAll,
    getById,
    update
}