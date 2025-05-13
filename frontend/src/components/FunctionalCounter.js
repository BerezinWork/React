import { useState } from 'react';

function FunctionalCounter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prevState)=> prevState + 1);
        // setCount(count + 1);
    }

    return (
        <div>
            <div>
                {count}
            </div>
            <button onClick={increment} >Increment</button>
        </div>
    )
}

export default FunctionalCounter;