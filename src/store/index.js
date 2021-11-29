import { combineReducers, createStore } from "redux";
import gameXucXacReducer from "./reducer/GameXucXacReducer";
import shoeShopReducer from "./reducer/ShoeShopReducer";
const rootReducer = combineReducers({
  shoeShopReducer,gameXucXacReducer
});
const store = createStore(rootReducer);
export default store;
