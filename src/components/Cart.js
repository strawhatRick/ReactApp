import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyRedOnion, notBuyRedOnion } from '../redux/redOnion/redOnionAction';
import { buyApple, notBuyApple } from '../redux/apple/appleAction';
import { buyPineapple, notBuyPineapple } from '../redux/pineapple/pineappleAction';
import { buySweetMango, notBuySweetMango } from '../redux/sweetMango/sweetMangoAction';

const Cart = (props) => {
    const redOnion = useSelector(state => state.redOnion);
    const apple = useSelector(state => state.apple);
    const sweetMango = useSelector(state => state.sweetMango);
    const pineapple = useSelector(state => state.pineapple);
    const dispatch = useDispatch();
    useEffect(() => {
        // Update the document title using the browser API
        const total = redOnion.bill + apple.bill + pineapple.bill + sweetMango.bill;
        setTotalBill(total);
      }, [redOnion, apple, sweetMango, pineapple]);
    const [totalBill, setTotalBill] = useState(0);
    return (
        <>
            <h2>Total bill= $ {totalBill} </h2>
            
            <p> {redOnion.name} : {redOnion.val} </p>
            <button onClick={() => {
                dispatch(notBuyRedOnion());
            }}>DECREASE</button>
            <button onClick={() => {
                dispatch(buyRedOnion());
            }}>INCREASE</button>
            
            
            <p> {apple.name} : {apple.val} </p>
            <button onClick={() => {
                dispatch(notBuyApple());
            }}>DECREASE</button>
            <button onClick={() => {
                dispatch(buyApple());
            }}>INCREASE</button>
            
            
            <p> {pineapple.name} : {pineapple.val} </p>
            <button onClick={() => {
                dispatch(notBuyPineapple());
            }}>DECREASE</button>
            <button onClick={() => {
                dispatch(buyPineapple());
            }}>INCREASE</button>
            
            
            <p> {sweetMango.name} : {sweetMango.val} </p>
            <button onClick={() => {
                dispatch(notBuySweetMango());
            }}>DECREASE</button>
            <button onClick={() => {
                dispatch(buySweetMango());
            }}>INCREASE</button>

        </>
    )
}

export default Cart;