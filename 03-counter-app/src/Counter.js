import {useState} from 'react';
import PropTypes from 'prop-types';

const Counter = ({start:value = 10}) => {
    const [count, setCount] = useState(value);
    const handleAdd = () => setCount(count + 1);
    const handleReset = () => setCount(value);
    const handleSubstract = () => setCount(count - 1);
    return (
        <>
            <h2>{count}</h2>
            <button onClick={handleSubstract}>-1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleAdd}>+1</button>
        </>
    );
};

/* Counter.propTypes = {
    start: PropTypes.number.isRequired
} */


export default Counter;