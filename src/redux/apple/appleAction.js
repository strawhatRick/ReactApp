import { BUY_APPLE, NOT_BUY_APPLE } from './appleTypes';
export const buyApple = () => {
    return {
        type: BUY_APPLE
    }
}

export const notBuyApple = () => {
    return {
        type: NOT_BUY_APPLE
    }
}