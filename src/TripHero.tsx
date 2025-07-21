"use client";

import { ArrowLeft, Calendar, Ellipsis, Settings, User } from "lucide-react";
import banner from "./assets/banner.png";
import profile from "./assets/box.svg";
import { Link } from "react-router-dom";

export function TripHero() {
  return (
    <div className="m-2">
      {/* Banner Section */}
      <div
        className="bg-contain bg-center bg-no-repeat h-60 w-full relative"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <ArrowLeft className="h-8 ml-5 pt-2 w-8 text-black cursor-pointer" />
      </div>

      {/* Trip Details Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 p-1 m-1">
        <div className="flex-1">
          {/* Date Badge */}
          <div className="flex flex-row items-center justify-center sm:justify-start py-1 px-3 rounded-lg bg-amber-100 w-full sm:w-[250px] mb-2">
            <Calendar className="w-[16px] h-[16px] mr-2 flex-shrink-0" />
            <span className="text-sm sm:text-base text-center sm:text-left">
              21 march 2024 - 21 April 2024
            </span>
          </div>

          {/* Trip Title and Location */}
          <h4 className="text-black text-lg sm:text-xl font-bold leading-7 sm:leading-9 mb-1">
            Bahamas Family Trip
          </h4>
          <p className="text-gray-500 font-medium text-sm sm:text-base">
            New York, United States of America | Solo Trip
          </p>
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="bg-blue-100 h-[40px] flex justify-center items-center w-[140px] rounded">
            <User className="text-blue-600" />
          </div>
          <Ellipsis className="cursor-pointer" />
        </div>
      </div>

      <div className="flex flex-col xl:flex-row justify-between items-start gap-6">
        <div className="flex flex-col sm:flex-row xl:flex-row gap-4 flex-1 w-full">
          <div className="h-[193px] w-full sm:w-[270px] rounded-xl bg-blue-950 text-white flex flex-col justify-between p-4">
            <div>
              <p className="font-medium text-base leading-5 mb-2">Activities</p>
              <p className="text-sm leading-5">
                Build, personalize, and optimize your itineraries with our trip
                planner.
              </p>
            </div>
            <button className="bg-blue-600 h-[50px] rounded-xl hover:bg-blue-700 transition-colors">
              <Link to="add-activity" className="text-white font-medium">
                Add Activities
              </Link>
            </button>
          </div>

          <div className="h-[193px] w-full sm:w-[270px] rounded-xl bg-blue-100 text-black flex flex-col justify-between p-4">
            <div>
              <p className="font-medium text-base leading-5 mb-2">Hotels</p>
              <p className="text-sm leading-5">
                Build, personalize, and optimize your itineraries with our trip
                planner.
              </p>
            </div>
            <button className="bg-blue-600 text-white font-normal h-[50px] rounded-xl hover:bg-blue-700 transition-colors">
              <Link to="/add-hotel" className="text-white">
                Add Hotels
              </Link>
            </button>
          </div>

          <div className="h-[193px] w-full sm:w-[270px] rounded-xl bg-blue-600 text-white flex flex-col justify-between p-4">
            <div>
              <p className="font-medium text-base leading-5 mb-2">Flights</p>
              <p className="text-sm leading-5">
                Build, personalize, and optimize your itineraries with our trip
                planner.
              </p>
            </div>
            <button className="bg-white h-[50px] text-blue-500 font-normal rounded-xl hover:bg-gray-50 transition-colors">
              <Link to="/add-flight" className="text-blue-500">
                Add Flights
              </Link>
            </button>
          </div>
        </div>

        <div className="flex flex-row xl:flex-col items-center justify-center xl:justify-start gap-4 w-full xl:w-auto">
          <img
            src={profile || "/placeholder.svg"}
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
            alt="Profile"
          />
          <div className="bg-white border border-gray-200 p-3 rounded-full hover:bg-gray-50 transition-colors cursor-pointer">
            <Settings className="h-[16px] w-[16px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
