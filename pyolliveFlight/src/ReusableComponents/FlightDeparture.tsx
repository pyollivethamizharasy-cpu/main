import { useState } from "react";
import LeftVector from "../assets/leftsidevector.svg";
import Sort from "../assets/Sort.svg";
import Dropdown from "../assets/dropdown.svg";
import '../../src/ReusableComponents/FlightDeparture.css';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../components/ui/tooltip";


const fareOptions = [
    "Regular",
    "Student",
    "Senior Citizen",
    "Armed Forces",
    "Doctor and Nurses",
]


export function TripType() {
    const [trip, setTrip] = useState<"oneway" | "round">("oneway");

    // optional swap logic
    const [fromCity, setFromCity] = useState("Delhi");
    const [toCity, setToCity] = useState("Mumbai");
    const [selectedFareOption, setSelectedFareOption] = useState("Regular");

    const isRegularSelected = selectedFareOption === "Regular";

    //Search Logic
    // const [search, setSearch] = useState("");
    const [open, setOpen] = useState<"From" | "To" | null>(null);

    const swapCities = () => {
        setFromCity(toCity);
        setToCity(fromCity);
    };

    const getAirportName = (city: string) => {
        switch (city) {
            case "Delhi":
                return "DEL, Indira Gandhi International Airport India";
            case "Mumbai":
                return "BOM, Chhatrapati Shivaji International Airport";
            case "Bangalore":
                return "BLR, Kempegowda International Airport";
            default:
                return "";
        }
    };

    // const handleselect = (city: string) => {
    //     if (open === "From") {
    //         setFromCity(city);
    //     } else if (open === "To") {
    //         setToCity(city);
    //     }

    //     setOpen(null);     // close modal
    //     setSearch("");
    // }

    const airports = [
        {
            city: "Mumbai",
            country: "India",
            code: "BOM",
            airport: "Chhatrapati Shivaji International Airport",
        },
        {
            city: "Delhi",
            country: "India",
            code: "DEL",
            airport: "Indira Gandhi International Airport",
        },
        {
            city: "Pune",
            country: "India",
            code: "PNQ",
            airport: "Pune Airport",
        },
        {
            city: "Bangalore",
            country: "India",
            code: "BLR",
            airport: "Kempegowda International Airport",
        },
    ];


    return (
        <div className="absolute top-[140px] z-10 w-full flex justify-center">
            <div className="w-[1106px] min-h-[266px] bg-white shadow-[0_0_9.01px_0_#AACDFF] rounded-[17px] p-2 overflow-visible ">

                {/* TOP BAR */}
                <div className="flex items-center justify-between px-6">

                    {/* LEFT - TRIP TYPE */}
                    <div className="flex gap-6">

                        {/* ONE WAY */}
                        <label
                            className={`flex items-center gap-2 cursor-pointer px-3 h-[29px] rounded-[14px]
              ${trip === "oneway"
                                    ? "bg-[#EAF5FF] text-[#2276E3] font-semibold"
                                    : "text-[#858585]"
                                }`}
                        >
                            <input
                                type="radio"
                                name="trip"
                                checked={trip === "oneway"}
                                onChange={() => setTrip("oneway")}
                                className="sr-only peer"
                            />
                            <span className="w-4 h-4 rounded-full border border-[#C4C4C4] flex items-center justify-center
                peer-checked:bg-[#2276E3] peer-checked:border-[#2276E3]">
                                <span className="w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100" />
                            </span>
                            Oneway
                        </label>

                        {/* ROUND TRIP */}
                        <label
                            className={`flex items-center gap-2 cursor-pointer px-3 h-[29px] rounded-[14px]
              ${trip === "round"
                                    ? "bg-[#EAF5FF] text-[#2276E3] font-semibold"
                                    : "text-[#858585]"
                                }`}
                        >
                            <input
                                type="radio"
                                name="trip"
                                checked={trip === "round"}
                                onChange={() => setTrip("round")}
                                className="sr-only peer"
                            />
                            <span className="w-4 h-4 rounded-full border border-[#C4C4C4] flex items-center justify-center
                peer-checked:bg-[#2276E3] peer-checked:border-[#2276E3]">
                                <span className="w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100" />
                            </span>
                            Round Trip
                        </label>

                    </div>

                    {/* RIGHT BUTTON */}
                    <button className="flex items-center justify-center w-[326px] h-[32px]
            bg-gradient-to-r from-[#3783F1] to-[#204C8B] rounded-[7px] px-4">
                        <div className="flex items-center gap-2">
                            <img src={LeftVector} className="w-4 h-5" />
                            <span className="font-poppins text-[15.15px] text-white">
                                Book International and Domestic Flights
                            </span>
                        </div>
                    </button>

                </div>

                {/* MAIN CONTENT */}
                <div className="p-6">
                    <div className="rounded-xl p-[1.05px] bg-gradient-to-r from-[#AA6A00] via-[#004857] via-[#3783F1] to-[#292B82] hover:bg-[#F7FFF7] cursor-pointer pointer-events-auto">
                        <div className="rounded-xl bg-white">
                            <div className="relative grid grid-cols-5 gap-4 p-4">
                                {/* FULL HEIGHT VERTICAL DIVIDER */}
                                <span
                                    className="absolute inset-y-0 left-[20%] w-[1px] bg-gradient-to-r from-[rgba(226,149,13,0.5)] to-[rgba(124,82,7,0.5)]"
                                />
                                <span className="absolute inset-y-0 left-[40%] w-[1px] bg-gradient-to-r from-[rgba(226,149,13,0.5)] to-[rgba(124,82,7,0.5)]" />
                                <span className="absolute inset-y-0 left-[60%] w-[1px] bg-gradient-to-r from-[rgba(226,149,13,0.5)] to-[rgba(124,82,7,0.5)]" />
                                <span className="absolute inset-y-0 left-[80%] w-[1px] bg-gradient-to-r from-[rgba(226,149,13,0.5)] to-[rgba(124,82,7,0.5)]" />

                                {/* CENTER SWAP BUTTON */}
                                <button
                                    className="absolute top-1/2 left-[20%] -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full  bg-white border border-[#E5E7EB] shadow-md z-10 flex items-center justify-center hover:rotate-180 transition-transform duration-300"
                                    aria-label="Swap From and To"
                                >
                                    <img src={Sort} alt="sort" onClick={swapCities} className="max-w-none" />
                                </button>
                                {/* FROM */}
                                <div className="pr-6 cursor-pointer relative" onClick={() => setOpen("From")}>
                                    <p className="dept_way">From</p>
                                    <p className="text-[20px] font-semibold">{fromCity}</p>
                                    <p className="text-[12px] text-[#6B7280]">
                                        {fromCity === "Delhi" && "DEL, Delhi Airport India"}
                                        {fromCity === "Mumbai" && "BOM, Chhatrapati Shivaji International"}
                                        {fromCity === "Bangalore" && "BLR, Kempegowda International"}
                                    </p>

                                    {/* {open === "From" && (
                                        <div className="absolute top-full mt-2 w-[300px] bg-white shadow-lg rounded-lg z-50">
                                            {["Delhi", "Mumbai", "Bangalore"].map(city => (
                                                <div
                                                    key={city}
                                                    onClick={() => {
                                                        setFromCity(city);
                                                        setOpen(null);
                                                    }}
                                                    className="p-3 hover:bg-[#F0F6FF] cursor-pointer"
                                                >
                                                    <p className="font-semibold">{city}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )} */}
                                    {open === "From" && (
                                        <div className="absolute top-full mt-2 w-[360px] bg-white
    rounded-xl shadow-[0_6px_20px_rgba(0,0,0,0.15)] z-50">

                                            {/* Search */}
                                            <div className="flex items-center gap-2 p-3 border-b">
                                                <span className="text-gray-400">🔍</span>
                                                <input
                                                    placeholder="Search city or airport"
                                                    className="w-full text-sm outline-none"
                                                />
                                            </div>

                                            <p className="px-4 pt-3 text-[13px] font-semibold text-gray-700">
                                                Most Traveled Airports
                                            </p>

                                            <div className="max-h-[260px] overflow-y-auto">
                                                {airports.map((a) => (
                                                    <div
                                                        key={a.code}
                                                        onClick={() => {
                                                            setFromCity(a.city);
                                                            setOpen(null);
                                                        }}
                                                        className="flex gap-3 px-4 py-3 cursor-pointer hover:bg-[#F0F6FF]"
                                                    >
                                                        <div>
                                                            <p className="text-[14px] font-semibold">
                                                                {a.city}, {a.country}
                                                            </p>
                                                            <p className="text-[12px] text-gray-500">
                                                                {a.code}, {a.airport}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                </div>

                                {/* TO */}
                                <div className="pl-6 cursor-pointer relative p-2" onClick={() => setOpen("To")}>
                                    <p className="dept_way">To</p>
                                    <p className="text-[20px] font-semibold">{toCity}</p>
                                    <p className="text-[12px] text-[#6B7280] truncate">
                                        {toCity === "Delhi" && "DEL, Delhi Airport India"}
                                        {toCity === "Mumbai" && "BOM, Chhatrapati Shivaji International"}
                                        {toCity === "Bangalore" && "BLR, Kempegowda International"}
                                    </p>

                                    {open === "To" && (
                                        <div className="absolute top-full mt-2 w-[360px] bg-white
                                            rounded-xl shadow-[0_6px_20px_rgba(0,0,0,0.15)] z-50">

                                            {/* Search */}
                                            <div className="flex items-center gap-2 p-3 border-b">
                                                <span className="text-gray-400">🔍</span>
                                                <input
                                                    placeholder="Search city or airport"
                                                    className="w-full text-sm outline-none"
                                                />
                                            </div>

                                            <p className="px-4 pt-3 text-[13px] font-semibold text-gray-700">
                                                Most Traveled Airports
                                            </p>

                                            <div className="max-h-[260px] overflow-y-auto">
                                                {airports.map((a) => (
                                                    <div
                                                        key={a.code}
                                                        onClick={() => {
                                                            setToCity(a.city);
                                                            setOpen(null);
                                                        }}

                                                        className="flex gap-3 px-4 py-3 cursor-pointer hover:bg-[#F0F6FF]"
                                                    >
                                                        
                                                        <div>
                                                            <p className="text-[14px] font-semibold">
                                                                {a.city}, {a.country}
                                                            </p>
                                                            <p className="text-[12px] text-gray-500">
                                                                {a.code}, {a.airport}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                </div>



                                {/* OTHER FIELDS */}
                                <div className="dept_way cursor-pointer p-2">
                                    <div className="flex gap-2">
                                        <span className="leading-none">Departure</span>
                                        <img src={Dropdown} className="w-3 h-3" />
                                    </div>
                                    <div className="font-poppins font-semibold text-[23px] py-2 text-[#000000]">18 <span className="font-poppins font-normal text-[14px] text-[#484848]">Dec</span>
                                        <span className="font-poppins font-normal text-[14px] text-[#484848]">'26</span>
                                        <p className="font-poppins font-normal text-[14px] text-[#484848]">Thursday</p>
                                    </div>

                                </div>

                                <div className="dept_way cursor-pointer p-2">
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm">Return</span>
                                        <img src={Dropdown} alt="dropdown" className="w-3 h-3" />
                                    </div>

                                    <p className="mt-1 text-[14px] font-medium text-[#858484] leading-tight">
                                        Book round trip to save extra
                                    </p>
                                </div>

                                <div className="dept_way p-2">
                                    <p className="text-sm text-gray-500">Traveller & Class</p>

                                    <div className="mt-1">
                                        <p className="text-base font-poppins font-semibold text-[23px] text-[#000000]">
                                            1 <span className="font-normal font-poppins text-[16px] text-[#2C2C2C] font-normal">Traveller</span>
                                        </p>
                                        <p className="text-sm font-inter font-normal text-[10.52px] leading-[100%] tracking-normal text-[#6E6E6E]">Economy</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <TooltipProvider delayDuration={200}>
                            <div className="px-6 flex items-center flex-wrap gap-2">
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <div className="font-poppins font-semibold text-[12px] leading-[1] tracking-normal text-[#000000] flex items-center">SPECIAL FARES <span className="font-poppins font-medium text-[12px] leading-[100%] tracking-normal text-[#888888]">(Optional)</span> :</div>
                                    </TooltipTrigger>
                                    <TooltipContent side="top" className="text-xs">
                                        Select a special fare if applicable
                                    </TooltipContent>

                                </Tooltip>


                                <div
                                    onClick={() => setSelectedFareOption("Regular")}
                                    className={`ml-2 special_fares flex items-center justify-center cursor-pointer ${isRegularSelected
                                        ? "bg-[#0084E8] text-white font-semibold"
                                        : "bg-[#F5F5F5] text-[#323232] hover:bg-[#d7d3d3]"
                                        }`}
                                >
                                    <span className="font-poppins font-normal text-[12px] leading-[100%] tracking-normal">
                                        Regular
                                    </span>
                                </div>

                                {[
                                    { Label: "Student", tip: "This offer is applicable to students aged 12+ only. A valid student ID and student visa (if required) are mandatory." },
                                    { Label: "Senior Citizen", tip: "Applicable to senior citizens aged 60 years and above. Valid date-of-birth proof required at the airport." },
                                    { Label: "Armed Forces", tip: "Eligible for serving/retired Indian Armed Forces members and dependents. Valid ID must be presented at the airport." },
                                    { Label: "Doctor and Nurses", tip: "Applicable to senior citizens aged 60 years and above. Valid date-of-birth proof required at the airport." },
                                ].map((fare) => {
                                    const isSelected = selectedFareOption === fare.Label;
                                    return (
                                        <Tooltip key={fare.Label}>
                                            <TooltipTrigger asChild>
                                                <div
                                                    onClick={() => setSelectedFareOption(fare.Label)}
                                                    className={`ml-2 special_fares flex items-center justify-center cursor-pointer ${isSelected
                                                        ? "bg-[#0084E8] text-white font-semibold"
                                                        : "bg-[#F5F5F5] text-[#323232] hover:bg-[#d7d3d3]"
                                                        }`}
                                                >
                                                    <span className="font-poppins font-normal text-[12px] leading-[100%] tracking-normal">
                                                        {fare.Label}
                                                    </span>
                                                </div>
                                            </TooltipTrigger>

                                            <TooltipContent
                                                side="bottom"
                                                className="text-xs w-[319px] h-[76px] bg-[#fff] text-[#000000]
                                                opacity-100 rounded-tl-[12px] rounded-tr-[2px] rounded-br-[12px] rounded-bl-[12px]
                                                shadow-[0_0_10.52px_0px_#00000026]"
                                            >
                                                {fare.tip}
                                            </TooltipContent>
                                        </Tooltip>

                                    )
                                }
                                    // (
                                    // <Tooltip key={fare.Label}>
                                    //     <TooltipTrigger asChild>
                                    //         <div className="ml-2 special_fares flex items-center justify-center cursor-pointer hover:bg-[#d7d3d3]"><span className="font-poppins text-[#323232] font-normal text-[12px] leading-[100%] tracking-normal">{fare.Label}</span></div>
                                    //     </TooltipTrigger>
                                    //     <TooltipContent side="bottom" className="text-xs w-[319px] h-[76px] bg-[#fff] text-[#000000]
                                    //                     opacity-100 rounded-tl-[12px] rounded-tr-[2px] rounded-br-[12px] rounded-bl-[12px] shadow-[0_0_10.52px_0px_#00000026]">
                                    //         {fare.tip}
                                    //     </TooltipContent>
                                    // </Tooltip>)
                                )}
                            </div>

                        </TooltipProvider>
                    </div>

                </div>
                <div className="flex justify-center p-5 ">
                    <button className="text-[#fff] w-[258px] height-[49px] border-[1px] border-[#4B5E4B] bg-[#4B5E4B] rounded-[24px] font-poppins font-semibold text-[16px] leading-[100%] tracking-normal">Search</button>
                </div>

            </div>


        </div>

    );
}

export default TripType;




