import { useState } from 'react';

let Counter3 = () => {
    const [counter, setCount] = useState(0);

    return (
        <div>
            <p>Add one or square the number</p>
            <div><button onClick={() => setCount((counter) => counter + 1)}>+</button></div>
            <div>{counter}</div>
            <div><button onClick={() => setCount((counter) => counter ** 2)}>**</button></div>
        </div>
    );
}       
export default Counter3;