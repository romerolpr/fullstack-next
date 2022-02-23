import { HYDRATE } from "next-redux-wrapper";

// importa o estado inicial default settings
import { initialSetting } from "../../../_settings/reducer/initialSetting";

import { USER_SETTINGS_PER_PAGE_UPDATE } from "../../actions";

const settingsReducer = (state = initialSetting, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.settings };
    case USER_SETTINGS_PER_PAGE_UPDATE:
      return { ...state, usersPerPage: action.payload };
    default:
      return state;
  }
}

export default settingsReducer;