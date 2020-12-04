import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {buyRedOnion} from '../../redux/redOnion/redOnionAction';


const RedOnion = (props) => {
    const redOnion = useSelector(state => state.redOnion);
    console.log(redOnion);
    const dispatch = useDispatch();
    
    return (
        <>
            <h4> {redOnion.name} </h4>
            <img src={redOnion.img} alt={redOnion.name} height='300' width='300' />
            <h6> {redOnion.price} </h6>
            <p>No. of items {redOnion.val}</p>
            <p>Sub bill amt. {redOnion.bill}</p>
            <button onClick={() => {
                // setVal(val+1);
                // setBill((val+1)*redOnion.price);
                dispatch(buyRedOnion());
                }}>INCREASE</button>
        </>
    )
}

export default RedOnion;