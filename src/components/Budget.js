import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    // get state variables from the Context
    const { budget, currency, dispatch } = useContext(AppContext);

    // handler for incrementing or decrementing budget
    const handleBudget = (value) => {
        if(value > 20000){
            alert(`Budget cannot exceed ${currency}20000`);
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        });
    };

    return (
        <div class="input-group mb-3">
            <div class="input-group-text">
                <label >Budget: £</label>
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
