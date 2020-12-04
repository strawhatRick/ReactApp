import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buySweetMango } from '../../redux/sweetMango/sweetMangoAction';


const SweetMango = (props) => {
    const sweetMango = useSelector(state => state.sweetMango);
    console.log(sweetMango);
    const dispatch = useDispatch();

    return (
        <>
            <h4> {sweetMango.name} </h4>
            <img src={sweetMango.img} alt={sweetMango.name} height='300' width='300' />
            <h6> {sweetMango.price} </h6>
            <p>No. of items {sweetMango.val}</p>
            <p>Sub bill amt. {sweetMango.bill}</p>
            <button onClick={() => {
                // setVal(val+1);
                // setBill((val+1)*sweetMango.price);
                dispatch(buySweetMango());
                }}>INCREASE</button>
        </>
    )
}

export default SweetMango;