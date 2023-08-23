import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    // get state variables from the Context
    const { expenses, budget, currency } = useContext(AppContext);

    // calculating total expenses
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert ${alertType}`}>
            <span>{`Remaining: ${currency}${budget - totalExpenses}`}</span>
        </div>
    );
};
export default Remaining;
