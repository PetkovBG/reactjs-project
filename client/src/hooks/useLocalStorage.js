import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {

     
    console.log("useLocalStorage", key);
    console.log(initialValue);
    const [state, setState] = useState(() => {

        const persistedStateSerialized = localStorage.getItem(key);

        if (persistedState) {
            const persistedState = JSON.parse(persistedStateSerialized);
            //return the new state with return persistedState
            return persistedState;
        }

        return initialValue;
    });

    const setLocalStorageState = (value) => {

        console.log('Log from setLocalStorage', value);
        setState(value)

        localStorage.setItem(key, JSON.stringify(value));

    }

    return [
        state,
        setLocalStorageState,
    ]

}