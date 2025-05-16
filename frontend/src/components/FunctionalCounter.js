import { useState, useEffect } from 'react';

export default function FunctionalCounter () {
    const [count, setCount] = useState(2);
    const [count2, setCount2] = useState(1);

    useEffect(() => {
        console.log('Mounting! (componentDidMount)');

        return () => {
            console.log('Unmount! (componentWillUnmount)');
        }
    }, []);

    useEffect(() => {
        console.log('Updating! (componentDidUpdate)');
    }, [count, count2]);

    const increment = () => {
        setCount((prevState) => prevState + 1);
        setCount((prevState) => prevState + 1);
    }

    const increment2 = () => {
        setCount2((prevState) => prevState + 1);
        setCount2((prevState) => prevState + 1);
    }

    return (
        <>
            <div>
                <span>Hello, I'm first react component!</span>
                <div>
                    {count}
                </div>
            </div>
            <button onClick={increment}>Increment</button>
            <button onClick={increment2}>Increment 2</button>
        </>
    )
}