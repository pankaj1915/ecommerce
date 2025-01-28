import HandleReducer from './HandleReducer'
import { combineReducers } from "redux";
import HandleReducer2 from './HandleReducer2';
const rootReducers = combineReducers({
    HandleReducer,HandleReducer2
})
export default rootReducers