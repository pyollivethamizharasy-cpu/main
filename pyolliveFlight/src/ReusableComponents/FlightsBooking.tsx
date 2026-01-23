import HandTicket from "../assets/handticket.svg";

const FlightBooking = () => {
  return (
    <div className="relative overflow-hidden rounded-[16px] border border-[#E8F1FF] bg-[#E8F1FF] p-3 flex items-center">
      
      {/* TEXT CONTENT */}
      <div className="max-w-[75%]">
        <span className="block font-poppins font-medium text-[20px] text-[#3000C1]">
          Book your flight in just a few steps
        </span>
        <p className="mt-1 font-poppins font-normal text-[16px] text-[#000000]">
          Search for flights, compare prices, choose your preferred seat, and confirm your booking securely in minutes.
        </p>
      </div>

      {/* IMAGE – FULL RIGHT OVERLAP */}
      <img
        src={HandTicket}
        alt="hand ticket"
        className="absolute right-0 top-1/2 -translate-y-1/2 h-full object-contain"
      />
    </div>
  );
};

export default FlightBooking;
