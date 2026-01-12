import { useState } from "react";

export function TripType() {
    const [trip, setTrip] = useState("oneway");

    return (
        <div className="absolute top-[140px]">
        <div className="w-[1106px] h-[266px] border border-white shadow-[0_0_9.01px_0_#AACDFF] rounded-[17px] p-2">
            <div className="flex items-center justify-between px-6">

                {/* LEFT SIDE */}
                <div className="flex gap-6">
                   <label
  className={`flex items-center gap-2 cursor-pointer
    ${trip === "oneway"
      ? "bg-[#EAF5FF] w-[107px] h-[29px] rounded-[14px] p-2 \
         text-[#2276E3] font-inter font-semibold text-[15.15px] leading-[100%] tracking-normal not-italic \
         [text-shadow:0px_2.84px_3.79px_#91CBFF]"
      : "bg-transparent text-[#858585] font-poppins font-normal text-[15.15px]"
    }
  `}
>

                        <input
                            type="radio"
                            name="trip"
                            value="oneway"
                            checked={trip === "oneway"}
                            onChange={() => setTrip("oneway")}
                            className="h-4 w-4 accent-blue-600"
                        />
                        One Way
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="trip"
                            value="round"
                            checked={trip === "round"}
                            onChange={() => setTrip("round")}
                            className="h-4 w-4 accent-blue-600"
                        />
                        Round Trip
                    </label>
                </div>

                {/* RIGHT SIDE */}
                <div className="justify-center items-center flex w-[321px] h-[29px] font-normal font-poppins text-right tracking-normal text-[16px] leading-[100%] text-[#fff] bg-[linear-gradient(90deg,#3783F1_0%,#204C8B_100%)] rounded-[7px]">
                    <h4>Book International and Domestic Flights</h4>
                </div>

            </div>
        </div>
        </div>
    );
}

export default TripType;
