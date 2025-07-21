import AddActivity from "./AddActivity";
import AddFlight from "./AddFlight";
import AddHotel from "./Addhotel";
import "./index.css";
import { Landing } from "./Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/add-flight" element={<AddFlight />} />
          <Route path="/add-hotel" element={<AddHotel />} />
          <Route path="/add-activity" element={<AddActivity />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
