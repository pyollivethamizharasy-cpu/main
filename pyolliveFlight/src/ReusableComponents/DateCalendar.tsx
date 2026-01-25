import { useState } from "react";
import dayjs from "dayjs";

type PriceMap = Record<string, number>;

type Props = {
  value?: Date;
  onSelect: (date: Date) => void;
  prices?: PriceMap;
};

const weekDays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

export default function FlightCalendar({
  value,
  onSelect,
  prices = {},
}: Props) {
  const [month, setMonth] = useState(dayjs());

  const renderMonth = (base: dayjs.Dayjs) => {
    const start = base.startOf("month").day(1);
    const end = base.endOf("month");

    const days: dayjs.Dayjs[] = [];
    let date = start;

    while (date.isBefore(end) || date.isSame(end, "day")) {
      days.push(date);
      date = date.add(1, "day");
    }

    return (
      <div className="w-[320px]">
        <h3 className="text-center font-semibold mb-3">
          {base.format("MMMM YYYY")}
        </h3>

        <div className="grid grid-cols-7 text-xs text-gray-500 mb-2">
          {weekDays.map((d) => (
            <div key={d} className="text-center">{d}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-y-2">
          {days.map((d) => {
            const key = d.format("YYYY-MM-DD");
            const price = prices[key];
            const isSelected = value && dayjs(value).isSame(d, "day");
            const isPast = d.isBefore(dayjs(), "day");

            return (
              <button
                key={key}
                disabled={isPast}
                onClick={() => onSelect(d.toDate())}
                className={`
                  h-[54px] rounded-md flex flex-col items-center justify-center border
                  ${isSelected ? "bg-green-600 text-white" : "bg-white"}
                  ${isPast ? "opacity-40 cursor-not-allowed" : "hover:bg-[#F1F7FF]"}
                `}
              >
                <span className="text-sm font-medium">{d.date()}</span>

                {price && (
                  <span
                    className={`text-[10px] mt-0.5 ${
                      isSelected ? "text-white" : "text-green-600"
                    }`}
                  >
                    ₹{price.toLocaleString()}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.35)] p-6 w-[720px]">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => setMonth(month.subtract(1, "month"))}
          className="w-9 h-9 bg-black text-white rounded"
        >
          ‹
        </button>

        <span className="font-semibold text-sm">
          Select Departure Date
        </span>

        <button
          onClick={() => setMonth(month.add(1, "month"))}
          className="w-9 h-9 bg-black text-white rounded"
        >
          ›
        </button>
      </div>

      {/* TWO MONTHS */}
      <div className="flex gap-6 justify-center">
        {renderMonth(month)}
        {renderMonth(month.add(1, "month"))}
      </div>
    </div>
  );
}
