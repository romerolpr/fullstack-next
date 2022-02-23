import getConfig from 'next/config';

// resgata as variaveis de ambiente em Next.config
const { publicRuntimeConfig } = getConfig();

// método GET
async function get(url) {
    const requestOptions = {
        method: 'GET'
    }
    return fetch(url, requestOptions).then(handleResponse);
}

// método POST para inserir na tabela
async function post(url, body) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(body)
    }
    return fetch(url, requestOptions).then(handleResponse)
}

// método para realizar update na tabela
async function put(url, body) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    }
    return fetch(url, requestOptions).then(handleResponse);   
}

// realiza o tratamento das respostas das requisições
function handleResponse(response) {

    return response.text().then(text => {

        const data = text && JSON.parse(text)
        
        if (!response.ok) {
            const error = (data && data.message) || response.statusText
            return Promise.reject(error)
        }

        return data

    })
}

export const fetchWrapper = {
    get,
    post,
    put
}