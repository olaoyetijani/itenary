import {
  Activity,
  ArrowDownCircle,
  ArrowLeftCircle,
  ArrowRightCircle,
  ArrowUpCircle,
  Clock,
  LocateFixed,
  Star,
} from "lucide-react";
import Activities from "./assets/activities.png";

const TripActivities = () => {
  return (
    <div className="bg-blue-700 rounded-[5px] my-5 mx-2 py-2 min-h-[600px]">
      <div className="flex flex-wrap justify-between mx-4 py-4 items-center">
        <div className="flex gap-2">
          <Activity className="h-[18px] w-[20px] text-white" />
          <span className="text-white text-base font-bold leading-5">
            Activities
          </span>
        </div>
        <button className="bg-white h-[35px] w-[120px] text-blue-600 font-medium rounded-[4px]">
          Add Activities
        </button>
      </div>

      <div className="bg-white m-3 p-2 flex flex-col lg:flex-row gap-3">
        <div className="relative w-full lg:w-auto lg:max-w-[232px] flex-shrink-0">
          <img
            className="w-full lg:w-[232px] object-cover h-[222px]"
            src={Activities || "/placeholder.svg"}
            alt=""
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
                  The Museum of Modern Art
                </h4>
                <p className="text-black text-base lg:text-lg font-medium leading-1">
                  Works from Van Gogh to Warhol & beyond plus a sculpture
                  garden, 2 cafes & The modern restaurant
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 flex-wrap">
                <div className="flex items-center gap-2 text-blue-600 font-medium text-[15px]">
                  <LocateFixed />
                  <p>Directions</p>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="text-yellow-500" />
                  <p className="text-gray-500 font-medium text-[15px]">
                    4.5 (436)
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="text-black-500" />
                  <p className="text-gray-500 font-medium text-[15px]">
                    1 Hour
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center lg:text-right flex-shrink-0">
              <h2 className="text-black text-xl lg:text-2xl font-bold leading-1">
                &#8358;123, 450.00
              </h2>
              <p className="text-black text-[14px] lg:text-[16px] font-normal leading-1">
                10:30 AM on Mar 19
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between w-full items-start lg:items-center gap-4">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-start sm:items-center text-gray-500 font-medium text-[15px] flex-1">
              <h5 className="whitespace-nowrap">What's Included:</h5>
              <div className="flex flex-wrap gap-3 items-center">
                <div className="flex gap-2 items-center">
                  <p>Admission to the empire state building</p>
                </div>
                <div className="flex gap-2 text-blue-600 items-center">
                  <p className="cursor-pointer">See more</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
              <p className="bg-blue-900 rounded-[3px] text-white p-1 text-sm">
                Day 1 - (2)
              </p>
              <div className="flex flex-col gap-2">
                <ArrowUpCircle className="w-4 h-4 cursor-pointer" />
                <ArrowDownCircle className="w-4 h-4 cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="text-blue-600 flex flex-col sm:flex-row justify-between w-full items-start sm:items-center font-medium text-[16px] gap-3">
            <div className="flex flex-wrap gap-4 sm:gap-6">
              <h4 className="cursor-pointer">Activity details</h4>
              <h4 className="cursor-pointer">Price details</h4>
            </div>
            <div>
              <h4 className="cursor-pointer">Edit details</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white m-3 p-2 flex flex-col lg:flex-row gap-3">
        <div className="relative w-full lg:w-auto lg:max-w-[232px] flex-shrink-0">
          <img
            className="w-full lg:w-[232px] object-cover h-[222px]"
            src={Activities || "/placeholder.svg"}
            alt=""
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
                  The Museum of Modern Art
                </h4>
                <p className="text-black text-base lg:text-lg font-medium leading-1">
                  Works from Van Gogh to Warhol & beyond plus a sculpture
                  garden, 2 cafes & The modern restaurant
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 flex-wrap">
                <div className="flex items-center gap-2 text-blue-600 font-medium text-[15px]">
                  <LocateFixed />
                  <p>Directions</p>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="text-yellow-500" />
                  <p className="text-gray-500 font-medium text-[15px]">
                    4.5 (436)
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="text-black-500" />
                  <p className="text-gray-500 font-medium text-[15px]">
                    1 Hour
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center lg:text-right flex-shrink-0">
              <h2 className="text-black text-xl lg:text-2xl font-bold leading-1">
                &#8358;123, 450.00
              </h2>
              <p className="text-black text-[14px] lg:text-[16px] font-normal leading-1">
                10:30 AM on Mar 19
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between w-full items-start lg:items-center gap-4">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-start sm:items-center text-gray-500 font-medium text-[15px] flex-1">
              <h5 className="whitespace-nowrap">What's Included:</h5>
              <div className="flex flex-wrap gap-3 items-center">
                <div className="flex gap-2 items-center">
                  <p>Admission to the empire state building</p>
                </div>
                <div className="flex gap-2 text-blue-600 items-center">
                  <p className="cursor-pointer">See more</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
              <p className="bg-blue-900 rounded-[3px] text-white p-1 text-sm">
                Day 1 - (2)
              </p>
              <div className="flex flex-col gap-2">
                <ArrowUpCircle className="w-4 h-4 cursor-pointer" />
                <ArrowDownCircle className="w-4 h-4 cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="text-blue-600 flex flex-col sm:flex-row justify-between w-full items-start sm:items-center font-medium text-[16px] gap-3">
            <div className="flex flex-wrap gap-4 sm:gap-6">
              <h4 className="cursor-pointer">Activity details</h4>
              <h4 className="cursor-pointer">Price details</h4>
            </div>
            <div>
              <h4 className="cursor-pointer">Edit details</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white m-3 p-2 flex flex-col lg:flex-row gap-3">
        <div className="relative w-full lg:w-auto lg:max-w-[232px] flex-shrink-0">
          <img
            className="w-full lg:w-[232px] object-cover h-[222px]"
            src={Activities || "/placeholder.svg"}
            alt=""
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
                  The Museum of Modern Art
                </h4>
                <p className="text-black text-base lg:text-lg font-medium leading-1">
                  Works from Van Gogh to Warhol & beyond plus a sculpture
                  garden, 2 cafes & The modern restaurant
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 flex-wrap">
                <div className="flex items-center gap-2 text-blue-600 font-medium text-[15px]">
                  <LocateFixed />
                  <p>Directions</p>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="text-yellow-500" />
                  <p className="text-gray-500 font-medium text-[15px]">
                    4.5 (436)
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="text-black-500" />
                  <p className="text-gray-500 font-medium text-[15px]">
                    1 Hour
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center lg:text-right flex-shrink-0">
              <h2 className="text-black text-xl lg:text-2xl font-bold leading-1">
                &#8358;123, 450.00
              </h2>
              <p className="text-black text-[14px] lg:text-[16px] font-normal leading-1">
                10:30 AM on Mar 19
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between w-full items-start lg:items-center gap-4">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-start sm:items-center text-gray-500 font-medium text-[15px] flex-1">
              <h5 className="whitespace-nowrap">What's Included:</h5>
              <div className="flex flex-wrap gap-3 items-center">
                <div className="flex gap-2 items-center">
                  <p>Admission to the empire state building</p>
                </div>
                <div className="flex gap-2 text-blue-600 items-center">
                  <p className="cursor-pointer">See more</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
              <p className="bg-blue-900 rounded-[3px] text-white p-1 text-sm">
                Day 1 - (2)
              </p>
              <div className="flex flex-col gap-2">
                <ArrowUpCircle className="w-4 h-4 cursor-pointer" />
                <ArrowDownCircle className="w-4 h-4 cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="text-blue-600 flex flex-col sm:flex-row justify-between w-full items-start sm:items-center font-medium text-[16px] gap-3">
            <div className="flex flex-wrap gap-4 sm:gap-6">
              <h4 className="cursor-pointer">Activity details</h4>
              <h4 className="cursor-pointer">Price details</h4>
            </div>
            <div>
              <h4 className="cursor-pointer">Edit details</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripActivities;
