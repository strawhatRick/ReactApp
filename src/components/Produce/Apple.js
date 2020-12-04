import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {buyApple} from '../../redux/apple/appleAction';


const Apple = (props) => {
    const apple = useSelector(state => state.apple);
    console.log(apple);
    const dispatch = useDispatch();
    return (
        <>
            <h4> {apple.name} </h4>
            <img src={apple.img} alt={apple.name} height='300' width='300' />
            <h6> {apple.price} </h6>
            <p>No. of items {apple.val}</p>
            <p>Sub bill amt. {apple.bill}</p>
            <button onClick={() => {
                // setVal(val+1);
                // setBill((val+1)*apple.price);
                dispatch(buyApple());
                }}>INCREASE</button>
        </>
    )
}

export default Apple;