import { HYDRATE } from "next-redux-wrapper";

// importa o estado inicial default settings
import { initialSetting } from "../../../_settings/reducer/initialSetting";

const settingsReducer = (state = initialSetting, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.settings };
    default:
      return state;
  }
}

export default settingsReducer;