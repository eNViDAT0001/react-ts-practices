import React, { createContext, useContext, useReducer } from "react";

export type Timer = {
    name: string;
    duration: number;
}

type TimersState = {
    isRunning: boolean;
    timers: Timer[];
}

const initialState: TimersState = {
    isRunning: true,
    timers: [],
}

type TimersContextValue = TimersState & {
    addTimer: (timerData: Timer) => void,
    startTimers: () => void,
    stopTimers: () => void,
}

export const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimersContext() {
    const timersCtx = useContext(TimersContext);

    if (timersCtx === null) {
        throw new Error('TimersContext is null');
    }

    return timersCtx;
}

type TimersContextProviderProps = {
    children: React.ReactNode,
}

type StartTimersAction = {
    type: 'START_TIMERS'
}

type StopTimersAction = {
    type: 'STOP_TIMERS'
}

type AddTimerAction = {
    type: 'ADD_TIMER',
    payload: Timer
}

type Action = StartTimersAction | StopTimersAction | AddTimerAction;

function timersReducer(state: TimersState, action: Action): TimersState {
    if (action.type === 'START_TIMERS') {
        return {
            ...state,
            isRunning: true,
        }
    }

    if (action.type === 'STOP_TIMERS') {
        return {
            ...state,
            isRunning: false,
        }
    }

    if (action.type === 'ADD_TIMER') {
        return {
            ...state,
            timers: [...state.timers, action.payload],
        }
    }

    return state;
}

export default function TimersContextProvider({ children }: TimersContextProviderProps) {
    const [state, dispatch] = useReducer(timersReducer, initialState);

    const ctx: TimersContextValue = {
        timers: state.timers,
        isRunning: state.isRunning,
        addTimer(timerData: Timer) {
            dispatch({type: 'ADD_TIMER', payload: timerData})
        },
        startTimers() {
            dispatch({type: 'START_TIMERS',})
        },
        stopTimers() {
            dispatch({type: 'STOP_TIMERS',})
        }
    }
    return <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
}