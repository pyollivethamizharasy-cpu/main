
import RightsideFlight from "../assets/rightsideFlight.png";
import LeftsideFlight from "../assets/leftsideFlight.png";
import RightVector from "../assets/rightsidevector.png";
import LeftVector from "../assets/leftsidevector.png";




const SelectDeparture = () => {
    return (
        <div className="relative">
            <div
                className="
                    w-[1209px]
                    h-[204px]
                    rounded-[42px]
                    opacity-100
                   bg-[linear-gradient(90deg,#4B5E4B_0%,#233523_100%)]
                    p-0
                    flex
                    justify-evenly
                    gap-4">
                        <div> <img src={RightsideFlight} alt="rightsideFlight" /></div>
                <div className="flex">
                   
                    <img src={RightVector} alt="rightVector" />
                    <h2 className="text-white font-semibold text-[32.6px] leading-[100%] tracking-normal text-white">Find the Best travel </h2>
                    <img src={LeftVector} alt="leftVector" />
                  
                </div>
                <div>   <img src={LeftsideFlight} alt="leftsideFlight" /></div>

            </div>

        </div>
    );
};

export default SelectDeparture;
