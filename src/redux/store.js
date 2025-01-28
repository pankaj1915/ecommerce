import {configureStore} from '@reduxjs/toolkit';
import rootReducers from './reducer/store2';
const store = configureStore({
    reducer: rootReducers,

})

export default store;
