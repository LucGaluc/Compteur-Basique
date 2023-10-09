import React, { useReducer } from "react";

// Définir le reducer
const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return (state = state + 1);
        case "DECREMENT":
            return (state = state - 1);
        case "DOUBLE":
            return (state = state * 2);
        case "POWER":
            return (state = state * state);
        case "HALF":
            return (state = state / 2);
        case "RANDOM":
            return (state = Math.floor(Math.random() * 100));
        case "RESET":
            return (state = 0);
        default:
            return state;
    }
};

const Counter = () => {
    // useReducer avec le réducteur défini
    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <h1>Compteur: {count}</h1>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>
                Incrémenter²
            </button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>
                Décrémenter
            </button>
            <button onClick={() => dispatch({ type: "DOUBLE" })}>
                Doubler
            </button>
            <button onClick={() => dispatch({ type: "POWER" })}>
                Puissance
            </button>
            <button onClick={() => dispatch({ type: "HALF" })}>
                Diviser par deux
            </button>
            <button onClick={() => dispatch({ type: "RANDOM" })}>
                Aléatoire
            </button>
            <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
        </div>
    );
};

export default Counter;
