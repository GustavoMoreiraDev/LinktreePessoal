import React from "react";
import './style.css';

export const Head = ({ tituloPage, description }) => {

    return (
        <>
            <title>{tituloPage}</title>
            <meta name="description" content={description} /> 
        </>
    )
}