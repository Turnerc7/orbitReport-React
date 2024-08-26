import './styling.css'
import React from "react";
import satData from "../components/satData.jsx";







const Buttons = ({ filterByType, setSat, displaySats }) => {
 return (
    <div className="flex-container">
      {displaySats.map((sat, id) => {
        return (
          
             <button onClick={() => filterByType(sat)} key={id} >
               {sat} Orbit
             </button>
          
        );
      })}

        <button onClick={() => setSat(satData)}>All Orbits</button>

    </div>
  );
}
  
export default Buttons;