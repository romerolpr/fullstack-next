import { USERS_LIST_UPDATE, USERS_LIST_GET } from "../";

// Atualiza lista
const updateList = (list) => {
    return {
        type: USERS_LIST_UPDATE,
        payload: list,
    }
}

// const getList = () => {
//     return {
//         type: USERS_LIST_GET,
//         payload: list,
//     }
// }

export {
    updateList,
    // getList
}