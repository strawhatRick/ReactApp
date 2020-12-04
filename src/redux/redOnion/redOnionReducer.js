import { BUY_RED_ONION, NOT_BUY_RED_ONION } from './redOnionTypes'
import Data from '../../Data';

const redOnion = Data[0].redOnion;

const redOnionReducer = (state = redOnion, action) => {
    switch(action.type) {
        case BUY_RED_ONION:
            return{
                  ...state,
                    val: (state.val) + 1,
                    bill: ((state.val + 1)*(state.price))
            }

        case NOT_BUY_RED_ONION:{
            if(state.val <= 0){return state}
            return{
                ...state,
                val: (state.val) - 1,
                bill: ((state.val - 1)*(state.price))
            }
        }
            

        default: return state
    }
}

export default redOnionReducer;