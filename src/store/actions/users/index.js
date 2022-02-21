import { USER_UPDATE, USER_RESET, USER_DELETE } from "..";

// Atualiza usuário
const userUpdate = (user) => ({
    type: USER_UPDATE,
    payload: user
})

const userDelete = (user) => ({
    type: USER_DELETE,
    payload: user
})

// Resetar usuário
const userReset = () => {
    return {
        type: USER_RESET
    }
}

export {
    userUpdate,
    userDelete,
    userReset
}