import { useState } from 'react';

let Counter2 = () => {
    const [counter, setCount] = useState(0);

    return (
        <div>
            <p>Add one or subtract one</p>
            <div><button onClick={() => setCount((counter) => counter + 1)}>+</button></div>
            <div>{counter}</div>
            <div><button onClick={() => setCount((counter) => counter - 1)}>-</button></div>
        </div>
    );
}       
export default Counter2;