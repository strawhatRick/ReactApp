import { BUY_APPLE,NOT_BUY_APPLE } from './appleTypes'
import Data from '../../Data';

const apple = Data[1].apple;

const appleReducer = (state = apple, action) => {
    switch(action.type) {
        case BUY_APPLE:
            return{
                  ...state,
                    val: (state.val) + 1,
                    bill: ((state.val+1)*(state.price))
            }
            case NOT_BUY_APPLE:{
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

export default appleReducer;