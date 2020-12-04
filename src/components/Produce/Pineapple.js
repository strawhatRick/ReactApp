import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyPineapple } from '../../redux/pineapple/pineappleAction';


const Pineapple = (props) => {
    const pineapple = useSelector(state => state.pineapple)
    console.log(pineapple);
    const dispatch = useDispatch();

    return (
        <>
            <h4> {pineapple.name} </h4>
            <img src={pineapple.img} alt={pineapple.name} height='300' width='300' />
            <h6> {pineapple.price} </h6>
            <p>No. of items {pineapple.val}</p>
            <p>Sub bill amt. {pineapple.bill}</p>
            <button onClick={() => {
                // setVal(val+1);
                // setBill((val+1)*pineapple.price);
                dispatch(buyPineapple());
                }}>INCREASE</button>
        </>
    )
}

export default Pineapple;