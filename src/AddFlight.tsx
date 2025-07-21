/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import type { Flight } from "./utils/types";
import { useItinerary } from "./context/ItenaryContext";
import {
  searchAirports,
  searchFlights,
  type Airport,
  type FlightSearchParams,
} from "./utils/api";
import { useNavigate } from "react-router-dom";

export const AddFlights: React.FC = () => {
  const { dispatch } = useItinerary();
  const navigate = useNavigate();

  const [params, setParams] = useState<FlightSearchParams>({
    fromId: "",
    toId: "",
    stops: "none",
    pageNo: "1",
    adults: "1",
    children: "0",
    infants: "0",
    sort: "BEST",
    cabinClass: "ECONOMY",
    currency_code: "NGN",
    departDate: new Date().toISOString().split("T")[0], // e.g., "2025-07-20"
  });

  const [fromResults, setFromResults] = useState<Airport[]>([]);
  const [toResults, setToResults] = useState<Airport[]>([]);
  const [results, setResults] = useState<Flight[]>([]);
  const [loading, setLoading] = useState(false);

  const handleInput = async (name: "fromId" | "toId", value: string) => {
    setParams((prev) => ({ ...prev, [name]: value }));

    if (value.length === 0) {
      name === "fromId" ? setFromResults([]) : setToResults([]);
      return;
    }

    const list = await searchAirports(value);
    name === "fromId" ? setFromResults(list) : setToResults(list);
  };

  const handleSearch = async () => {
    setLoading(true);
    try {
      const { flights } = await searchFlights(params);
      setResults(flights);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const addFlight = (f: Flight) => {
    console.log("dispatched");
    dispatch({ type: "ADD_FLIGHT", payload: f });
    navigate("/");
  };

  return (
    <div className="p-4 bg-white min-h-screen">
      <h1 className="text-xl font-bold mb-4">Search Flights</h1>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <input
            name="fromId"
            value={params.fromId}
            onChange={(e) => handleInput("fromId", e.target.value)}
            placeholder="From airport"
            className="border p-2 rounded w-full"
          />
          {fromResults.length > 0 && (
            <div className="border mt-1 rounded">
              {fromResults.map((a) => (
                <div
                  key={a.id}
                  onClick={() => {
                    setParams((prev) => ({ ...prev, fromId: a.id }));
                    setFromResults([]);
                  }}
                  className="cursor-pointer p-1 hover:bg-gray-200"
                >
                  {a.name} ({a.id})
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <input
            name="toId"
            value={params.toId}
            onChange={(e) => handleInput("toId", e.target.value)}
            placeholder="To airport"
            className="border p-2 rounded w-full"
          />
          {toResults.length > 0 && (
            <div className="border mt-1 rounded">
              {toResults.map((a) => (
                <div
                  key={a.id}
                  onClick={() => {
                    setParams((prev) => ({ ...prev, toId: a.id }));
                    setToResults([]);
                  }}
                  className="cursor-pointer p-1 hover:bg-gray-200"
                >
                  {a.name} ({a.id})
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <input
            type="date"
            value={params.departDate}
            onChange={(e) =>
              setParams((prev) => ({ ...prev, departDate: e.target.value }))
            }
            className="border p-2 rounded w-full"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Adults</label>
          <input
            type="number"
            min="1"
            name="adults"
            value={params.adults}
            onChange={(e) =>
              setParams((prev) => ({ ...prev, adults: e.target.value }))
            }
            className="border p-2 rounded w-full"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Children</label>
          <input
            type="number"
            min="0"
            name="children"
            value={params.children}
            onChange={(e) =>
              setParams((prev) => ({ ...prev, children: e.target.value }))
            }
            className="border p-2 rounded w-full"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Infants</label>
          <input
            type="number"
            min="0"
            name="infants"
            value={params.infants}
            onChange={(e) =>
              setParams((prev) => ({ ...prev, infants: e.target.value }))
            }
            className="border p-2 rounded w-full"
          />
        </div>
      </div>

      <button
        onClick={handleSearch}
        className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-900"
      >
        {loading ? "Searching..." : "Search Flights"}
      </button>

      {results?.length > 0 && (
        <div>
          {results.map((f, i) => (
            <div key={i} className="border p-4 mb-2 rounded">
              <div className="flex items-center gap-2">
                {f.airlineLogo && (
                  <img
                    src={f.airlineLogo}
                    alt={f.airlineName}
                    className="w-10 h-6 object-contain"
                  />
                )}
                <span className="font-semibold">{f.airlineName}</span>
              </div>
              <div>
                {f.from} → {f.to}
              </div>
              <div>
                {new Date(f.departureTime).toLocaleString()} →{" "}
                {new Date(f.arrivalTime).toLocaleString()}
              </div>
              <div className="font-bold text-blue-800">
                NGN {f.price.toLocaleString()}
              </div>
              <button
                className="mt-2 bg-blue-800 text-white px-4 py-1 rounded"
                onClick={() => addFlight(f)}
              >
                Add to Itinerary
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddFlights;
