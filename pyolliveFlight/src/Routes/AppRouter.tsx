import { Routes, Route } from "react-router-dom";
import TripType from "../common/pyollivfly";
import ListPage from "../ReusableComponents/FlightList";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<TripType />} />
      <Route path="/flightlist" element={<ListPage />} />
    </Routes>
  );
};

export default AppRouter;
