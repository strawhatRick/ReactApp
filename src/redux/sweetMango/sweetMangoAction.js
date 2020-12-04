import { BUY_SWEET_MANGO, NOT_BUY_SWEET_MANGO } from './sweetMangoTypes';
export const buySweetMango = () => {
    return {
        type: BUY_SWEET_MANGO
    }
}

export const notBuySweetMango = () => {
    return {
        type: NOT_BUY_SWEET_MANGO
    }
}