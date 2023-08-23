import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    // get state variables from the Context
    const { budget, currency, dispatch } = useContext(AppContext);

    // handler for incrementing/decrementing budget
    const handleBudget = (value) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        });
    };

    return (
        <div className="input-group mb-3">
            <div className="input-group-text">
                <label>{`Budget: ${currency}`}</label>
                <input
                className='form-control m-1'
                type='number'
                id='cost'
                value={budget}
                step={10}
                onChange={(event) => handleBudget(event.target.value)}>
                </input>
            </div>
    </div>
    );
};
export default Budget;
