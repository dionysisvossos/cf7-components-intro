import { useReducer } from "react";

type CounterState = {
    count: number;
    lastAction: string;
    time: string;
}

type Action =
    { type: 'INCREASE' }|
    { type: 'RESET' }|
    { type: 'DECREASE' };

const initialState: CounterState = {
    count: 0,
    lastAction: "",
    time: ""
}

const getCurrentTime = () => new Date().toLocaleTimeString();

function reducer(state: CounterState, action: Action): CounterState {
    switch (action.type) {
        case 'INCREASE':
            return {
                count: state.count + 1,
                lastAction: "Increase",
                time: getCurrentTime()
            };
        case 'RESET':
            return {
                count: 0,
                lastAction: "Reset",
                time: getCurrentTime()
            };
        case 'DECREASE':
            return {
                count: state.count > 0 ? state.count - 1 : 0,
                lastAction: "Decrease",
                time: getCurrentTime()
            }
    }
}


export const useCounterWithReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const increase = () => dispatch({type: 'INCREASE'});

    const reset = () => dispatch({type: 'RESET'});

    const decrease = () => dispatch({type: 'DECREASE'});

    return {
        count: state.count,
        lastAction: state.lastAction,
        time: state.time,
        increase,
        reset,
        decrease
    };
}