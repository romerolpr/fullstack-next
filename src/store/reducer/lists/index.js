import { HYDRATE } from "next-redux-wrapper";
import { USERS_LISTS_UPDATE } from '../../actions'

// importa o estado inicial default lista de usuários
import { initialList } from "../../../_settings/reducer/initialList";

const listReducer = (state = initialList, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload.posts;
    case USERS_LISTS_UPDATE:
      return action.payload;
    default:
      return state;
  }
}

export default listReducer;