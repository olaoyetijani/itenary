/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  BaggageClaim,
  CircleCheck,
  File,
  ForkKnife,
  PlaneLanding,
  PlaneTakeoff,
  UsbIcon,
} from "lucide-react";
import { useItinerary } from "./context/ItenaryContext";
import { Link } from "react-router-dom";
import { useState } from "react";

const TripItenaries = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const { state } = useItinerary();

  return (
    <div className="mt-20 m-2">
      <div>
        <h4 className="text-black text-base font-bold leading-5">
          Trip Itenaries
        </h4>
        <p className="text-gray-600 font-medium">
          Your trip itenaries are placed here
        </p>
      </div>

      <div className="bg-gray-100 rounded-[5px] my-5 min-h-[400px]">
        <div className="flex flex-wrap justify-between mx-4 py-4 items-center">
          <div className="flex gap-2">
            <PlaneTakeoff className="h-[18px] w-[20px]" />
            <span className="text-black text-base font-bold leading-5">
              Flights
            </span>
          </div>
          <button className="bg-white h-[35px] w-[120px] text-blue-500 font-normal rounded-[4px]">
            <Link to="/add-flight">Add Flights</Link>
          </button>
        </div>

        {state.flights.length > 0 ? (
          <div>
            {state.flights.map((flight, index) => {
              const {
                airlineName,
                airlineLogo,
                from,
                to,
                departureTime,
                arrivalTime,
                price,
                code,
                cabinClass,
                airplaneNo,
                date,
                duration,
                facilities,
              } = flight;

              return (
                <div
                  key={index}
                  className="bg-white m-3 p-2 divide-y divide-gray-500"
                >
                  <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] lg:grid-cols-[250px_auto_200px] gap-4 md:gap-2 justify-between items-center rounded-[5px]">
                    <div className="flex items-center gap-4">
                      <img
                        src={airlineLogo || "/placeholder.svg"}
                        alt="airline-logo"
                        className="w-6 h-6"
                      />
                      <div className="grid gap-1 items-center justify-center">
                        <h4 className="text-black text-xl font-bold leading-1">
                          {airlineName}
                        </h4>
                        <div className="flex gap-3">
                          <span className="text-gray-500 font-medium">
                            {airplaneNo}
                          </span>
                          <p className="text-white font-normal text-sm bg-blue-900 p-1 rounded-[4px]">
                            {cabinClass || "Economy"}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-10 items-center">
                      <div className="text-center">
                        <h4 className="text-black text-center text-xl font-bold leading-1">
                          {departureTime.slice(11, 16)}
                        </h4>
                        <p className="text-gray-500 font-medium">{date}</p>
                      </div>

                      {/* Duration and Progress */}
                      <div className="flex-1 flex flex-col gap-4 w-full md:w-auto">
                        <div className="flex gap-4 md:gap-20 justify-between items-center">
                          <PlaneTakeoff />
                          <span className="text-gray-500 font-medium text-xs md:text-base">
                            Duration: {duration}
                          </span>
                          <PlaneLanding />
                        </div>

                        {/* Progress Line */}
                        <div className="grid grid-cols-[auto_auto_auto] w-full">
                          <div className="h-[10px] w-full md:w-[120px] rounded-[5px] bg-slate-300"></div>
                          <div className="h-[10px] w-full md:w-[120px] rounded-[5px] -ml-1 z-0 bg-blue-600"></div>
                          <div className="h-[10px] w-full md:w-[115px] rounded-[5px] bg-slate-300 -ml-2"></div>
                        </div>

                        <div className="flex gap-4 md:gap-20 justify-between items-center">
                          <h4 className="text-black text-base md:text-xl font-bold leading-1">
                            {from}
                          </h4>
                          <span className="text-gray-500 font-medium text-xs md:text-base">
                            Direct
                          </span>
                          <h4 className="text-black text-base md:text-xl font-bold leading-1">
                            {to}
                          </h4>
                        </div>
                      </div>

                      <div className="text-center">
                        <h4 className="text-black text-center text-xl font-bold leading-1">
                          {arrivalTime.slice(11, 16)}
                        </h4>
                        <p className="text-gray-500 font-medium">{date}</p>
                      </div>
                    </div>

                    <div className="text-center md:text-right">
                      <h2 className="text-black text-2xl font-bold leading-1">
                        &#8358;{price?.toLocaleString()}
                      </h2>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-3 md:gap-5 items-start md:items-center py-6 px-3 text-gray-500 font-medium text-base md:text-xl overflow-x-auto">
                    <h5 className="whitespace-nowrap">Facilities:</h5>
                    <div className="flex flex-wrap gap-y-2 gap-x-4">
                      {(facilities && facilities.length > 0
                        ? facilities
                        : [
                            "Baggage: 20kg, Cabin Baggage: 8kg",
                            "In flight entertainment",
                            "In flight meal",
                            "USB Port",
                          ]
                      ).map((item, i) => {
                        const icons = [
                          <BaggageClaim
                            key={`b-${i}`}
                            className="w-4 h-4 flex-shrink-0"
                          />,
                          <File
                            key={`f-${i}`}
                            className="w-4 h-4 flex-shrink-0"
                          />,
                          <ForkKnife
                            key={`k-${i}`}
                            className="w-4 h-4 flex-shrink-0"
                          />,
                          <UsbIcon
                            key={`u-${i}`}
                            className="w-4 h-4 flex-shrink-0"
                          />,
                        ];

                        const currentIcon = icons[i] || (
                          <CircleCheck
                            key={`default-${i}`}
                            className="w-4 h-4 flex-shrink-0"
                          />
                        );

                        return (
                          <div key={i} className="flex gap-2 items-center">
                            {currentIcon}
                            <p className="text-sm md:text-base">{item}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 px-3 text-blue-600 font-medium text-base md:text-xl">
                    <div className="flex flex-wrap gap-4 md:gap-6 mb-3 md:mb-0">
                      <h4 className="cursor-pointer">Flight details</h4>
                      <h4
                        className="cursor-pointer"
                        onClick={() =>
                          setOpenIndex(openIndex === index ? null : index)
                        }
                      >
                        Price details
                      </h4>
                    </div>
                    <h4 className="cursor-pointer">Edit details</h4>
                  </div>

                  {openIndex === index && (
                    <div className="px-6 py-4 bg-gray-100 text-sm text-gray-700">
                      <p>
                        <strong>Base Fare:</strong> ₦{price?.toLocaleString()}
                      </p>
                      <p>
                        <strong>Taxes:</strong> ₦
                        {(price * 0.12).toLocaleString()}
                      </p>
                      <p>
                        <strong>Total:</strong> ₦
                        {(price * 1.12).toLocaleString()}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center h-[100px] bg-white m-2 p-6 rounded-md shadow">
            <p className="text-gray-600 text-lg mb-4 font-semibold">
              No Flights in Itinerary
            </p>
            <button className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-950 transition">
              <Link to="/add-flight">Add Flights</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TripItenaries;
