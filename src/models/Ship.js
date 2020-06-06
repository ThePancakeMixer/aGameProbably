import React, {useState, useEffect} from 'react';
import './Ship.css'


function Ship(props) {
    return (
        <svg style={props.ShipPosition} width="25" height="25" viewBox="0 0 496 324" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 323H494L248 1L2 323Z" stroke="white" fill="white"/>
        </svg>
    );
}



export default Ship