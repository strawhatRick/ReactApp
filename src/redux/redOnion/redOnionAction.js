import { BUY_RED_ONION, NOT_BUY_RED_ONION } from './redOnionTypes';
export const buyRedOnion = () => {
    return {
        type: BUY_RED_ONION
    }
}

export const notBuyRedOnion = () => {
    return {
        type: NOT_BUY_RED_ONION
    }
}