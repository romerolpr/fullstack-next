import { combineReducers } from "redux";

// importa todos os reducers criados
import settingsReducer from './users/settings';
import userReducer from './users';
import listsReducer from './lists';

// exporta os reducers
export default combineReducers({
    settings: settingsReducer,
    users: userReducer,
    lists: listsReducer
})