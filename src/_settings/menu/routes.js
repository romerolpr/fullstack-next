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
                pathname: '/clients/update',
                label: 'Cadastro/ Edição de clientes'
            }
        ]
    },
]