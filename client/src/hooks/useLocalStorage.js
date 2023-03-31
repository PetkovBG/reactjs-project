import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {

     
    // console.log("Log from useLocalStorage", key);
    // console.log(initialValue);
    const [state, setState] = useState(() => {
        //this is a synchronous operation
        const persistedStateSerialized = localStorage.getItem(key);

        if (persistedStateSerialized) {
            const persistedState = JSON.parse(persistedStateSerialized);
            //return the new state with return persistedState
            return persistedState;
        }

        return initialValue;
    });

    const setLocalStorageState = (value) => {

        //TODO - type checking - if function 2:25 advanced techniques

        console.log('Log from setLocalStorage', value);
        setState(value)

        localStorage.setItem(key, JSON.stringify(value));

    }

    return [
        state,
        setLocalStorageState,
    ]

}