/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useItinerary } from "./context/ItenaryContext";
import type { Hotel, HotelSearchParams } from "./utils/types";
import { searchDestination, searchHotels } from "./utils/api";

export const AddHotel: React.FC = () => {
  const { dispatch } = useItinerary();

  const [params, setParams] = useState({
    dest_id: "",
    search_type: "CITY",
    adults: "1",
    children_age: "0,17",
    room_qty: "1",
    page_number: "1",
    units: "metric",
    temperature_unit: "c",
    languagecode: "en-us",
    currency_code: "AED",
    location: "",
  });

  const [cityQuery, setCityQuery] = useState("");
  const [cityResults, setCityResults] = useState<any[]>([]);
  const [results, setResults] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(false);

  const handleCitySearch = async (value: string) => {
    setCityQuery(value);
    const results = await searchDestination(value);
    setCityResults(results);
  };

  const handleSearch = async () => {
    setLoading(true);
    try {
      const hotels = await searchHotels(params);
      setResults(hotels);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const addHotel = (hotel: Hotel) =>
    dispatch({ type: "ADD_HOTEL", payload: hotel });

  return (
    <div className="p-4 bg-white min-h-screen">
      <h1 className="text-xl font-bold mb-4">Search Hotels</h1>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <input
            placeholder="Search City"
            value={cityQuery}
            onChange={(e) => handleCitySearch(e.target.value)}
            className="border p-2 rounded w-full"
          />
          {cityResults.map((city) => (
            <div
              key={city.dest_id}
              onClick={() => {
                setParams((prev) => ({
                  ...prev,
                  dest_id: city.dest_id,
                  location: city.city_name,
                }));
                setCityQuery(city.city_name);
                setCityResults([]);
              }}
              className="cursor-pointer p-1 hover:bg-gray-200"
            >
              {city.city_name} ({city.dest_id})
            </div>
          ))}
        </div>

        <input
          placeholder="Location"
          className="border p-2 rounded w-full"
          value={params.location}
          onChange={(e) =>
            setParams((prev) => ({ ...prev, location: e.target.value }))
          }
        />
        <input
          placeholder="Adults"
          type="number"
          className="border p-2 rounded w-full"
          value={params.adults}
          onChange={(e) =>
            setParams((prev) => ({ ...prev, adults: e.target.value }))
          }
        />
        <input
          placeholder="Children Age (comma separated)"
          className="border p-2 rounded w-full"
          value={params.children_age}
          onChange={(e) =>
            setParams((prev) => ({ ...prev, children_age: e.target.value }))
          }
        />
        <input
          placeholder="Room Quantity"
          type="number"
          className="border p-2 rounded w-full"
          value={params.room_qty}
          onChange={(e) =>
            setParams((prev) => ({ ...prev, room_qty: e.target.value }))
          }
        />
        <input
          placeholder="Page Number"
          type="number"
          className="border p-2 rounded w-full"
          value={params.page_number}
          onChange={(e) =>
            setParams((prev) => ({ ...prev, page_number: e.target.value }))
          }
        />
      </div>

      <button
        onClick={handleSearch}
        className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-900"
      >
        {loading ? "Searching..." : "Search Hotels"}
      </button>

      <div className="mt-6">
        {results.map((hotel) => (
          <div key={hotel.id} className="border p-4 mb-2 rounded flex gap-4">
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-24 h-24 object-cover rounded"
            />
            <div>
              <h2 className="text-xl font-bold">{hotel.name}</h2>
              <p className="text-sm text-gray-600">{hotel.address}</p>
              <p className="text-sm text-gray-500">Rating: {hotel.rating}/5</p>
              <p className="text-lg font-semibold">
                &#8358;{hotel.price.toLocaleString()}
              </p>
              <button
                onClick={() => addHotel(hotel)}
                className="mt-2 bg-blue-800 text-white px-4 py-1 rounded"
              >
                Add to Itinerary
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddHotel;
