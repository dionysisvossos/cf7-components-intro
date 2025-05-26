import {useState} from "react";
import CounterButton from "./CounterButton.tsx";
type CounterState = {
    count: number;
    lastAction: string;
    time: string;
}

const CounterAdvanced = () => {

    const getCurrentTime = () => new Date().toLocaleTimeString();

    const [state, setState] = useState<CounterState>({
        count: 0,
        lastAction: "",
        time: ""
    });

    const increaseCount = () => {
        setState({
            count: state.count + 1,
            lastAction: "Increase",
            time: getCurrentTime()
        })
    }

    const resetCount = () => {
        setState({
            count: 0,
            lastAction: "Reset",
            time: getCurrentTime()
        })
    }

    const decreaseCount = () => {
        if(state.count > 0) {
            setState({
                count: state.count - 1,
                lastAction: "Decrease",
                time: getCurrentTime()
            })
        }
    }

    return (
        <>
            <div className="space-y-4 text-2xl pt-12">
                <h1 className="text-center">Count is {state.count}</h1>
                <div className="text-center space-x-4">

                    <CounterButton label="Increase" onClick={increaseCount}/>

                    <CounterButton label="Reset" onClick={resetCount} disabled={state.count === 0} addClass="bg-cf-dark-red"/>

                    <CounterButton label="Decrease" onClick={decreaseCount} disabled={state.count === 0}/>
                </div>
            </div>
            <p className="text-center pt-8">Last change: <strong>{state.lastAction || "-"}</strong> at <strong> {state.time || "-"} </strong> </p>
        </>
    )
}

export default CounterAdvanced;