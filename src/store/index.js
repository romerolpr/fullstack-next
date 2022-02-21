import { createStore } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import reducers from "./reducer";

const makeStore = () => {

  // Cria uma store para salvar os estados
  const store = createStore(reducers, composeWithDevTools());

  // retorna a store
  return store;
};

export const storeWrapper = createWrapper(makeStore, { debug: false });