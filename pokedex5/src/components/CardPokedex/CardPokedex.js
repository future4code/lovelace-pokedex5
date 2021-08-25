import { useContext } from "react";
import React from 'react';
import GlobalContext from "../../global/GlobalContext";


export default function CardPokedex(props) {
    const { states, requests, setters } = useContext(GlobalContext);

    return (
        <div>
            <p>Nome do Pokemon:{props.name}</p>
            <button onClick={() => setters.removeFromPokedex(props.pokemon)}>
                remover
            </button>
        </div>
    )
}
