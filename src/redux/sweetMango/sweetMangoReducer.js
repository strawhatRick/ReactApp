import { BUY_SWEET_MANGO, NOT_BUY_SWEET_MANGO } from './sweetMangoTypes'
import Data from '../../Data';

const sweetMango = Data[2].sweetMango;

const sweetMangoReducer = (state = sweetMango, action) => {
    switch(action.type) {
        case BUY_SWEET_MANGO:
            return{
                  ...state,
                    val: (state.val) + 1,
                    bill: ((state.val+1)*(state.price))
            }

            case NOT_BUY_SWEET_MANGO:{
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

export default sweetMangoReducer;