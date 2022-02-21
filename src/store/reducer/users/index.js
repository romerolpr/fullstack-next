import { HYDRATE } from "next-redux-wrapper";
import { USER_UPDATE, USER_RESET } from "../../actions";

// importa o estado inicial default users
import { initialUser } from '../../../_settings/reducer/initialUser';

const userReducer = (state = initialUser, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.user };
    case USER_UPDATE:
      const newState = { ...state, ...action.payload };
      newState.name = `${newState.name}`;
      return newState;
    case USER_RESET:
      return initialUser;
    default:
      return state;
  }
};

export default userReducer;