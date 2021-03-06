// menu dinâmico da aplicação
export const initialLinks = [
    {
        pathname: '/',
        label: 'Página inicial',
        dropdown: false
    },
    {
        pathname: '/clients',
        label: 'Clientes',
        dropdown: [
            {
                pathname: '/clients',
                label: 'Listagem de clientes'
            },
            {
                pathname: '/clients/new',
                label: 'Cadastrar novo cliente'
            },
            {
                pathname: '/clients/edit',
                label: 'Editar cliente existente'
            }
        ]
    },
]