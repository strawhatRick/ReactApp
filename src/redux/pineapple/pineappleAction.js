import { BUY_PINEAPPLE, NOT_BUY_PINEAPPLE } from './pineappleTypes';
export const buyPineapple = () => {
    return {
        type: BUY_PINEAPPLE
    }
}

export const notBuyPineapple = () => {
    return {
        type: NOT_BUY_PINEAPPLE
    }
}