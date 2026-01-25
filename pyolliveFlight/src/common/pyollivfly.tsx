// import React,{useEffect,useState,useRef} from "react";
import FlightDeparture from "../ReusableComponents/FlightDeparture";
import FlightDesign from "../ReusableComponents/FlightDesign";
import FlightsBooking from "../ReusableComponents/FlightsBooking";
import OfferCard from "../ReusableComponents/ReuseableCards";
import Card1 from "../assets/card1.png";
import AxisLogo from "../assets/Axis.png";
import card2 from "../assets/card2.png";
import HdfcLogo from "../assets/HDFC.png";
import card3 from "../assets/card3.png";
import PopularFlightRoutes from "../ReusableComponents/PopularFlightRoutes";


const offers = [
    {
        image: Card1,
        title: "Up TO 12% Off",
        title2: "On Flights With Axis Bank",
        subtitle: "Credit Card EMI Transactions! T&C",
        logo: AxisLogo,
        couponCode: "AXIS1009",
    },
    {
        image: card2,
        title: "Up TO 12% Off",
        title2: "On Flights With Axis Bank",
        subtitle: "Credit Card EMI Transactions!",
        logo: HdfcLogo,
        couponCode: "HDFC1009",
    },
    {
        image: card3,
        title: "Up TO 20% Off",
        title2: "Credit Card EMI Transactions! T&C",
        subtitle: "",
        logo: AxisLogo,
        couponCode: "ICCCM60",
    },
];



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

            {/* Spacer for absolute card */}
            <div className="h-[271px]" />

            {/* NEXT SECTION (NOW CORRECT) */}
            <div className="flex justify-center">
                <div className="w-full max-w-[1200px]">
                    <FlightsBooking />
                </div>
            </div>
            <div className="flex justify-center py-5">
                <div className="w-full max-w-[1200px] flex gap-4">
                    {offers.map((offer, index) => (
                        <OfferCard key={index} {...offer} />
                    ))}
                </div>
            </div>
            <PopularFlightRoutes />

            <div className="flex justify-center py-5">
                <div className="w-full max-w-[1200px]">
                    <h4 className="font-semibold font-poppins text-[18px] text-[#373738]">Why Book Your Flight with Py Olliv?</h4>
                    <p className="text-[#747474] font-poppins font-medium text-[14px] leading-[35px]">

                        Booking flights with Py Olliv is simple, fast, and hassle-free. Our smooth booking flow helps you search, compare, and book flights in just a few easy steps. With clear fare details, multiple fare options, and transparent pricing, you always know what you’re paying for.
                        Py Olliv offers a user-friendly experience that lets you add services like extra baggage, meals, and insurance effortlessly during booking. Real-time availability, secure payments, and instant confirmations ensure a stressxx1x-free journey from start to finish.
                        Whether you’re planning a short trip or a long journey, Py Olliv makes flight booking quick, convenient, and reliable—so you can focus on your travel, not the process.
                    </p>
                </div>
            </div>

        </div>

    )
}

export default AllFlight;