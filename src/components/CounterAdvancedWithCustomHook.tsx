import CounterButton from "./CounterButton.tsx";
import {useAdvancedCounter} from "../hooks/useAdvancedCounter.ts";

const CounterAdvancedWithCustomHook = () => {

    // Custom hook function
    const {count, lastAction, time, increase, decrease, reset} = useAdvancedCounter();

    return (
        <>
            <div className="space-y-4 text-2xl pt-12">
                <h1 className="text-center">Count is {count}</h1>
                <div className="text-center space-x-4">

                    <CounterButton label="Increase" onClick={increase}/>

                    <CounterButton label="Reset" onClick={reset} disabled={count === 0} addClass="bg-cf-dark-red"/>

                    <CounterButton label="Decrease" onClick={decrease} disabled={count === 0}/>
                </div>
            </div>
            <p className="text-center pt-8">Last change: <strong>{lastAction || "-"}</strong> at <strong> {time || "-"} </strong> </p>
        </>
    )
}

export default CounterAdvancedWithCustomHook;