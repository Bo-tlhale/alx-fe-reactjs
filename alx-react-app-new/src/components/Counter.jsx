import { useState } from 'react'

function Counter(){
    const [count, setCount] = useState(0);
    return(
        <>
            <p>Current count: {count}</p>
            <button onClick={() => setCount(count -1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setCount(count +1)}>Increment</button>
        </>
    )
}

export default Counter;