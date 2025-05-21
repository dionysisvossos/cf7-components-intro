import {useState} from 'react';
import CounterButton from "./CounterButton.tsx";

const FunctionalComponentWithState = () => {
    const [ count, setCount ] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    }

    const resetCount = () => {
        setCount(0);
    }

    const decreaseCount = () => {
        if(count > 0)
        setCount(count - 1);
    }

    return (
        <>
            <div className="space-y-4 text-2xl pt-12">
                <h1 className="text-center">Count is {count}</h1>
                <div className="text-center space-x-4">

                    <CounterButton label="Increase" onClick={increaseCount}/>

                    <CounterButton label="Reset" onClick={resetCount} disabled={count === 0} addClass="bg-cf-dark-red"/>

                    <CounterButton label="Decrease" onClick={decreaseCount} disabled={count === 0}/>
                </div>
            </div>

        </>
    )
}

export default FunctionalComponentWithState;