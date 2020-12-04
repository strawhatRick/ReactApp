import { BUY_PINEAPPLE, NOT_BUY_PINEAPPLE } from './pineappleTypes'
import Data from '../../Data';

const pineapple = Data[3].pineapple;

const pineappleReducer = (state = pineapple, action) => {
    switch(action.type) {
        case BUY_PINEAPPLE:
            return{
                  ...state,
                    val: (state.val) + 1,
                    bill: ((state.val+1)*(state.price))
            }
            case NOT_BUY_PINEAPPLE:{
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

export default pineappleReducer;