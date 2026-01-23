// import React from "react";
import FlightDeparture from "../ReusableComponents/FlightDeparture";
import FlightDesign from "../ReusableComponents/FlightDesign";
import FlightsBooking from "../ReusableComponents/flightsBooking";
import OfferCard from "../ReusableComponents/ReuseableCards";
import Card1 from "../assets/card1.png";
import AxisLogo from "../assets/Axis.png";

const AllFlight = () => {
    return (
        <div className="main-container">

            {/* TOP SECTION */}
            <div className="relative flex justify-center">
                <div className="w-full max-w-[1200px]">
                    <FlightDesign />
                    <FlightDeparture />
                </div>
            </div>

            {/* 🔥 SPACER FOR ABSOLUTE CARD */}
            <div className="h-[290px]" />

            {/* NEXT SECTION (NOW CORRECT) */}
            <div className="flex justify-center">
                <div className="w-full max-w-[1200px]">
                    <FlightsBooking />
                </div>
            </div>
            <div className="flex justify-center p-3">
              <div className="w-full max-w-[1200px]">
                  <OfferCard  
                  image={Card1}
                  title="Up TO 12% Off"
                  title2="On Flights With Axis Bank"
                  subtitle="Credit Card EMI Transactions! T&C"
                  logo={AxisLogo}
                  couponCode="AXIS1009"
                  />
              </div>
            </div>

        </div>

    )
}

export default AllFlight;