import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {    
    // get state variables from the Context
    const { dispatch } = useContext(AppContext);

    // handler for currency
    const handleCurrency = (value) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: value
        });
    }

    return (
        <div className="alert alert-success input-group mb-3">
            <div>
                <label>Currency</label>
                <select className="custom-select m-1" id="inputGroupSelect01" onChange={(event) => {handleCurrency(event.target.value)}}>
                    <option className="alert alert-success" defaultValue value="£">£ Pound</option>
                    <option className="alert alert-success" value="$">$ Dollar</option>
                    <option className="alert alert-success" value="€">€ Euro</option>
                    <option className="alert alert-success" value="₹">₹ Rupee</option>
                </select>
            </div>
        </div>
    );

};

export default Currency;