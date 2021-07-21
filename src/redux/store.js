import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import mealReducer from './meal/mealReducer';

const store = createStore(mealReducer,applyMiddleware(thunk))

export default store