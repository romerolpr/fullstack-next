import { toast } from 'react-toastify';
import { API } from '../../src/constants';

// método GET
function get(url) {
    return API.get(url).then(handleResponse)
}

// método POST para inserir na tabela
function post(url, body) {
    return handleResponse( API.post(url, body) )
}

// método para realizar update na tabela
function patch(url, body) {
    return handleResponse( API.patch(url, body) )
}

// realiza o tratamento das respostas das requisições
function handleResponse(response) {

    return response.then(text => {
        const data = text.data;
        
        if (!data?.status) {
            const error = (data && data.message);
            toast.error('Não foi possível realizar requisição')
            return Promise.reject(error);
        }

        return data;
    });
}

export const fetchWrapper = {
    get,
    post,
    patch
}