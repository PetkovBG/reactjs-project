import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {

     
    console.log(key);
    console.log(initialValue);
    const [state, setState] = useState(() => {

        const persistedStateSerialized = localStorage.getItem(key);

        if (persistedState) {
            const persistedState = JSON.parse(persistedStateSerialized);
            //return the new state with return persistedState
            return persistedState;
        }

        return initialValue;
    })