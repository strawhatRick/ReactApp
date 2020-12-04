import { combineReducers } from 'redux';
import appleReducer from './apple/appleReducer';
import pineappleReducer from './pineapple/pineappleReducer';
import sweetMangoReducer from './sweetMango/sweetMangoReducer';
import redOnionReducer from './redOnion/redOnionReducer';

const rootReducer = combineReducers({
    apple: appleReducer,
    pineapple: pineappleReducer,
    sweetMango: sweetMangoReducer,
    redOnion: redOnionReducer
});

export default rootReducer;