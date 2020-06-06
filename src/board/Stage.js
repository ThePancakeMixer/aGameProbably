import React, {useState,useEffect} from 'react';
import Ship from '../models/Ship'
import './Stage.css'

function Stage() {

    function moveTheShip(x,y){
        SetShipPosition({
            position: 'relative', 
            top:  x + 'px',
            left: y + 'px'
        })
    }

    let [ShipPosition,SetShipPosition] = useState({
    })

    let x = 0;
    let y = 0;

    useEffect(() => {
        const interval = setInterval(() => {
            moveTheShip(x+=5,y+=5)
          }, 10);
          return () => clearInterval(interval);        
    },[])


  return (
      <div className="StageDiv">
          <Ship ShipPosition={ShipPosition}></Ship>
      </div>
  );
}

export default Stage