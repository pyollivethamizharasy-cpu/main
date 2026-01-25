import { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import LeftVector from "../assets/leftsidevector.svg";
import type { DateRange } from "react-day-picker";
import Sort from "../assets/Sort.svg";
import Dropdown from "../assets/dropdown.svg";
import '../../src/ReusableComponents/FlightDeparture.css';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../components/ui/tooltip";
import Search from "../assets/SearchBtn.svg";
import FlightCalendar from "../ReusableComponents/DateCalendar";
// import ListPage from "../ReusableComponents/FlightList";
import { useNavigate } from "react-router-dom";

type Airport = {
    city: string;
    country: string;
    code: string;
    airport: string;
};



export function TripType() {
    const [trip, setTrip] = useState<"oneway" | "round">("oneway");
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
    const priceMap: Record<string, number> = {
  "2025-12-07": 1961,
  "2025-12-08": 11004,
  "2025-12-18": 10004,
  "2026-01-02": 10004,
  "2026-01-03": 11004,
  "2026-01-14": 11100,
};




    // optional swap logic
    const [fromAirport, setFromAirport] = useState<Airport>(airports[1]); // Delhi
    const [toAirport, setToAirport] = useState<Airport>(airports[0]);   // Mumbai

    const [selectedFareOption, setSelectedFareOption] = useState("Regular");

    const isRegularSelected = selectedFareOption === "Regular";
    const [isSearch, setIsSearch] = useState("");
    const dropdownRef = useRef<HTMLDivElement>(null);
    const calendarRef = useRef<HTMLDivElement>(null);

    const navigate = useNavigate();
    const handleSearch = () => {
        navigate("/flightlist");
    };

    //Search Logic
    // const [search, setSearch] = useState("");
    const [open, setOpen] = useState<"From" | "To" | null>(null);

    const swapCities = () => {
        setFromAirport(toAirport);
        setToAirport(fromAirport);
    };
    const [openCalendar, setOpenCalendar] =
        useState<"departure" | null>(null);

    const [dateRange, setDateRange] = useState<DateRange | undefined>({
        from: new Date(),
        to: undefined,
    });



    useEffect(() => {
        function handleCalendarOutside(event: MouseEvent) {
            if (
                calendarRef.current &&
                !calendarRef.current.contains(event.target as Node)
            ) {
                setOpenCalendar(null);
            }
        }

        document.addEventListener("mousedown", handleCalendarOutside);
        return () => {
            document.removeEventListener("mousedown", handleCalendarOutside);
        };
    }, []);




    const filteredAirports = airports.filter((a) =>
        `${a.city} ${a.code} ${a.airport}`
            .toLowerCase()
            .includes(isSearch.toLowerCase())
    );



    return (
        <div className="absolute top-[140px] z-10 w-full flex justify-center">
            <div className="w-[1106px] min-h-[266px] bg-white shadow-[0_0_9.01px_0_#AACDFF] rounded-[17px] p-2 overflow-hidden ">

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

                                    <p className="text-[20px] font-semibold">
                                        {fromAirport.city}
                                    </p>
                                    <p
                                        className="text-[12px] text-[#6B7280] max-w-[180px] truncate overflow-hidden whitespace-nowrap"
                                        title={`${fromAirport.code}, ${fromAirport.airport}`}
                                    >
                                        {fromAirport.code}, {fromAirport.airport}
                                    </p>


                                    {open === "From" && (
                                        <div ref={dropdownRef} className="absolute top-full mt-2 w-[360px] bg-white rounded-xl shadow-lg z-50">
                                            {/* search */}
                                            <div className="flex items-center gap-2 p-3 border-b">
                                                <img src={Search} className="w-4 h-4" />
                                                <input
                                                    value={isSearch}
                                                    onChange={(e) => setIsSearch(e.target.value)}
                                                    placeholder="Search city or airport"
                                                    className="w-full text-sm outline-none"
                                                />
                                            </div>

                                            <div className="max-h-[260px] overflow-y-auto">
                                                {filteredAirports.map((a) => (
                                                    <div
                                                        key={a.code}
                                                        onClick={() => {
                                                            setFromAirport(a);   // ✅ IMPORTANT
                                                            setOpen(null);
                                                        }}
                                                        className="px-4 py-3 cursor-pointer hover:bg-[#F0F6FF]"
                                                    >
                                                        <p className="text-[14px] font-semibold">
                                                            {a.city}, {a.country}
                                                        </p>
                                                        <p className="text-[12px] text-gray-500">
                                                            {a.code}, {a.airport}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>


                                {/* TO */}
                                <div className="pl-6 cursor-pointer relative p-2" onClick={() => setOpen("To")}>
                                    <p className="dept_way">To</p>

                                    <p className="text-[20px] font-semibold">
                                        {toAirport.city}
                                    </p>
                                    <p
                                        className="text-[12px] text-[#6B7280] max-w-[180px] truncate overflow-hidden whitespace-nowrap"
                                        title={`${toAirport.code}, ${toAirport.airport}`}
                                    >
                                        {toAirport.code}, {toAirport.airport}
                                    </p>


                                    {open === "To" && (
                                        <div ref={dropdownRef} className="absolute top-full mt-2 w-[360px] bg-white rounded-xl shadow-lg z-50">
                                            <div className="flex items-center gap-2 p-3 border-b">
                                                <img src={Search} className="w-4 h-4" />
                                                <input
                                                    value={isSearch}
                                                    onChange={(e) => setIsSearch(e.target.value)}
                                                    placeholder="Search city or airport"
                                                    className="w-full text-sm outline-none"
                                                />
                                            </div>

                                            <div className="max-h-[260px] overflow-y-auto">
                                                {filteredAirports.map((a) => (
                                                    <div
                                                        key={a.code}
                                                        onClick={() => {
                                                            setToAirport(a);   // ✅ IMPORTANT
                                                            setOpen(null);
                                                        }}
                                                        className="px-4 py-3 cursor-pointer hover:bg-[#F0F6FF]"
                                                    >
                                                        <p className="text-[14px] font-semibold">
                                                            {a.city}, {a.country}
                                                        </p>
                                                        <p className="text-[12px] text-gray-500">
                                                            {a.code}, {a.airport}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>




                                {/* OTHER FIELDS */}
                                {/* <div className="dept_way cursor-pointer p-2">
                                    <div className="flex gap-2">
                                        <span className="leading-none">Departure</span>
                                        <img src={Dropdown} className="w-3 h-3" />
                                    </div>
                                    <div className="font-poppins font-semibold text-[23px] py-2 text-[#000000]">18 <span className="font-poppins font-normal text-[14px] text-[#484848]">Dec</span>
                                        <span className="font-poppins font-normal text-[14px] text-[#484848]">'26</span>
                                        <p className="font-poppins font-normal text-[14px] text-[#484848]">Thursday</p>
                                    </div>

                                    
                                </div> */}
                                {/* DEPARTURE */}
                                {/* DEPARTURE */}
                                <div
                                    className="dept_way cursor-pointer p-2"
                                    onClick={() => setOpenCalendar("departure")}
                                >
                                    <div className="flex gap-2">
                                        <span>Departure</span>
                                        <img src={Dropdown} className="w-3 h-3" />
                                    </div>

                                    <div className="font-semibold text-[23px]">
                                        {dateRange?.from
                                            ? dayjs(dateRange.from).format("DD MMM 'YY")
                                            : "Select Date"}
                                        <p className="text-sm font-normal text-gray-500">
                                            {dateRange?.from
                                                ? dayjs(dateRange.from).format("dddd")
                                                : ""}
                                        </p>
                                    </div>
                                </div>

                                {/* ✅ FULL SCREEN OVERLAY */}
                                {openCalendar === "departure" && (
                                    <div
                                        className="fixed inset-0 z-[99999] bg-black/40 flex justify-center pt-[160px]"
                                        onClick={() => setOpenCalendar(null)}
                                    >
                                        <div
                                            ref={calendarRef}
                                            onClick={(e) => e.stopPropagation()}
                                            className="pointer-events-auto"
                                        >
                                            <FlightCalendar
                                                value={dateRange?.from}
                                                prices={priceMap}
                                                onSelect={(date) => {
                                                    setDateRange({ from: date, to: undefined });
                                                    setOpenCalendar(null);
                                                }}
                                            />
                                        </div>
                                    </div>
                                )}



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
                                        : "bg-[#F5F5F5] text-[#323232] hover:bg-[#d7d3d3]"}`}>
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
                                )}
                            </div>

                        </TooltipProvider>
                    </div>

                </div>
                <div className="flex justify-center p-5 ">
                    <button
                        onClick={handleSearch}
                        className="text-[#fff] w-[258px] height-[49px] border-[1px] border-[#4B5E4B] bg-[#4B5E4B] rounded-[24px] font-poppins font-semibold text-[16px] leading-[100%] tracking-normal">
                        Search
                    </button>
                </div>

            </div>


        </div>

    );
}

export default TripType;




