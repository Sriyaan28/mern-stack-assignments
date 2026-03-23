import { useState } from "react";

function Counter()
{
    // state - using hooks
    const [count, setCount] = useState(0)

    // functions to modify state
    const increment = ()=>{
        setCount(count+1)
    }
    const decrement = ()=>{
        setCount(count-1)
    }
    return(
        <div className="mx-auto border-2 max-h-screen flex gap-1 items-center justify-center">
            <p>Counter: {count}</p>
            <button className="p-4 bg-green-300" onClick={increment}>ADD</button>
            <button className="p-4 bg-red-400" onClick={decrement}>SUB</button>
        </div>
    )
}

export default Counter;