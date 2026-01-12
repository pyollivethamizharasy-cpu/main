// import React from "react";
import FlightDeparture from "../ReusableComponents/FlightDeparture";
import FlightDesign from "../ReusableComponents/FlightDesign";

const AllFlight = () =>{
    return(
        <div>
           <div>
            <FlightDesign />
           </div>
           <div>
            <FlightDeparture />
           </div>
        </div>
    )
}

export default AllFlight;