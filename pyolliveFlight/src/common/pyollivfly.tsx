// import React from "react";
import FlightDeparture from "../ReusableComponents/FlightDeparture";
import FlightDesign from "../ReusableComponents/FlightDesign";

const AllFlight = () => {
    return (
        <div className="relative flex justify-center">
            <FlightDesign />
            <FlightDeparture />
        </div>
    )
}

export default AllFlight;