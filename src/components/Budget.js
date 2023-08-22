import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    // get state variables from the Context
    const { budget, dispatch } = useContext(AppContext);

    // handlers for incrementing and decrementing budget
    const increaseBudget = (event) => {
        if(event.current.value > 20000){
            alert('Budget cannot exceed 20000');
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: budget + 10,
        });
    };

    const decreaseBudget = () => {
        dispatch({
            type: 'SET_BUDGET',
            payload: budget - 10,
        });
    };

    return (
        <div className='alert alert-secondary input-group-prepend'>
            <label className="input-group-text" htmlFor="inputGroupSelect01">Budget: </label>
            <input type="number" value={budget} class="form-control input-number" min="1" max="20000"  />
            <button type="button" class="btn btn-default btn-number" data-type="minus" data-field="quant[1]" onClick={increaseBudget}>
                <span class="glyphicon glyphicon-minus"></span>
            </button>
            <button type="button" class="btn btn-default btn-number" data-type="plus" data-field="quant[1]" onClick={decreaseBudget}>
                <span class="glyphicon glyphicon-plus"></span>
            </button>
            </div>
    );
};
export default Budget;
