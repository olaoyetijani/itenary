import {
  ArrowLeftCircle,
  ArrowRightCircle,
  Calendar,
  CupSoda,
  Flag,
  Hotel,
  LocateFixed,
  Star,
  WavesLadder,
} from "lucide-react";
import hotelImage from "./assets/Rect.png";
import { Link } from "react-router-dom";
import { useItinerary } from "./context/ItenaryContext";

const TripHotels = () => {
  const { state } = useItinerary();

  return (
    <div className="bg-slate-800 rounded-[5px] py-2 my-5 mx-2 min-h-[600px]">
      <div className="flex flex-wrap justify-between mx-4 py-4 items-center">
        <div className="flex gap-2">
          <Hotel className="h-[18px] w-[20px] text-white" />
          <span className="text-white text-base font-bold leading-5">
            Hotels
          </span>
        </div>
        <button className="bg-white h-[35px] w-[120px] text-black font-medium rounded-[4px]">
          <Link to="/add-hotel"> Add Hotels</Link>
        </button>
      </div>

      {state.hotels.length > 0 ? (
        <div>
          {state.hotels.map((hotel, index) => (
            <div
              key={index}
              className="bg-white m-3 p-2 flex flex-col lg:flex-row gap-3"
            >
              <div className="relative w-full lg:w-auto lg:max-w-[232px] flex-shrink-0">
                <img
                  className="w-full lg:w-[232px] object-cover h-[222px]"
                  src={hotel.image || hotelImage || "/placeholder.svg"}
                  alt={hotel.name}
                />
                <div className="absolute top-1/2 left-2 -translate-y-1/2 text-white z-20">
                  <ArrowLeftCircle className="w-6 h-6" />
                </div>
                <div className="absolute top-1/2 right-2 -translate-y-1/2 text-white z-20">
                  <ArrowRightCircle className="w-6 h-6" />
                </div>
              </div>

              <div className="flex flex-col gap-4 lg:gap-8 w-full">
                <div className="flex flex-col lg:flex-row justify-between w-full items-start lg:items-center gap-4">
                  <div className="flex-1">
                    <div className="mb-3">
                      <h4 className="text-black text-lg lg:text-xl font-bold leading-1">
                        {hotel.name}
                      </h4>
                      <p className="text-black text-base lg:text-lg font-medium leading-1">
                        {hotel.address}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 flex-wrap">
                      <div className="flex items-center gap-2 text-blue-600 font-medium text-[15px]">
                        <LocateFixed />
                        <p>Show in map</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="text-yellow-500" />
                        <p className="text-gray-500 font-medium text-[15px]">
                          {hotel.rating || 0} ({hotel.reviewsCount || 0})
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Flag className="text-black-500" />
                        <p className="text-gray-500 font-medium text-[15px]">
                          {hotel.roomType || "Standard Room"}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center lg:text-right flex-shrink-0">
                    <h2 className="text-black text-xl lg:text-2xl font-bold leading-1">
                      &#8358;{hotel.price?.toLocaleString()}
                    </h2>
                    <p className="text-black text-[14px] lg:text-[16px] font-normal leading-1">
                      Total Price: &#8358;
                      {hotel.totalPrice?.toLocaleString() || "-"}
                    </p>
                    <p className="text-black text-[14px] lg:text-[16px] font-normal leading-1">
                      {hotel.room_qty || 1} room x {hotel.nights || 1} nights
                      incl. taxes
                    </p>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row justify-between w-full items-start lg:items-center gap-4">
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-start sm:items-center text-gray-500 font-medium text-[15px]">
                    <h5>Facilities:</h5>
                    <div className="flex flex-wrap gap-3">
                      <div className="flex gap-2 items-center">
                        <WavesLadder className="text-black" />
                        <p>Pool</p>
                      </div>
                      <div className="flex gap-2 items-center">
                        <CupSoda className="text-black" />
                        <p>Bar</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 text-sm">
                    <div className="flex gap-2 items-center">
                      <Calendar />
                      <p>Check In: {hotel.checkIn || "--/--/----"}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Calendar />
                      <p>Check Out: {hotel.checkOut || "--/--/----"}</p>
                    </div>
                  </div>
                </div>

                <div className="text-blue-600 flex flex-col sm:flex-row justify-between w-full items-start sm:items-center font-medium text-[16px] gap-3">
                  <div className="flex flex-wrap gap-4 sm:gap-6">
                    <h4 className="cursor-pointer">Hotel details</h4>
                    <h4 className="cursor-pointer">Price details</h4>
                  </div>
                  <div>
                    <h4 className="cursor-pointer">Edit details</h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-[100px] bg-white m-2 p-6 rounded-md shadow">
          <p className="text-gray-600 text-lg mb-4 font-semibold">
            No Flights in Itinerary
          </p>
          <button className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-950 transition">
            <Link to="/add-flight">Add Hotel</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default TripHotels;
