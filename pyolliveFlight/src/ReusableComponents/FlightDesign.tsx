import RightsideFlight from "../assets/RightsideFlight.svg";
import LeftsideFlight from "../assets/LeftsideFlight.svg";
import RightVector from "../assets/rightsidevector.svg";
import LeftVector from "../assets/leftsidevector.svg";

const SelectDeparture = () => {
  return (
    <div className="relative w-full flex justify-center">
      <div
        className="
          relative
          z-0
          w-[1209px]
          h-[210px]
          pb-[80px]
          rounded-[42px]
          bg-gradient-to-r from-[#4B5E4B] to-[#233523]
          overflow-hidden
          flex
          items-center
          justify-center
        "
      >
        {/* Left Flight */}
        <img
          src={RightsideFlight}
          alt="left flight"
          className="
            absolute
            left-[-10px]
            top-[22%]
            w-[210px]
            pointer-events-none
          "
        />

        {/* Center Title */}
        <div className="relative z-10 flex items-center gap-3">
          <img src={RightVector} alt="right vector" className="w-7 h-7" />

          <h2 className="text-white font-semibold text-[32px] tracking-wide">
            Find The Best Travel
          </h2>

          <img src={LeftVector} alt="left vector" className="w-7 h-7" />
        </div>

        {/* Right Flight */}
        <img
          src={LeftsideFlight}
          alt="right flight"
          className="
            absolute
            right-[-10px]
            top-[22%]
            w-[210px]
            pointer-events-none
          "
        />
      </div>
    </div>
  );
};

export default SelectDeparture;
