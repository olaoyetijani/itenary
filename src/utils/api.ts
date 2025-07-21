/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
  ApiHotel,
  Flight,
  Hotel,
  HotelSearchParams,
} from "../utils/types";

export interface FlightSearchParams {
  fromId: string;
  toId: string;
  //   departDate: string;
  //   returnDate?: string;
  cabinClass?: string;
  adults?: string;
  children?: string;
  infants?: string;
  currency?: string;
  countryCode?: string;
  [key: string]: any;
}

export interface Airport {
  id: string;
  name: string;
  iataCode: string;
  cityName: string;
  countryCode: string;
}

export interface FlightSearchResponse {
  data: any;
  status: string;
  [key: string]: any;
}

// url: 'https://booking-com15.p.rapidapi.com/api/v1/flights/searchFlights',

export const searchFlights = async (
  params: FlightSearchParams
): Promise<{ flights: Flight[] }> => {
  const queryString = new URLSearchParams({
    ...params,
    adults: (params.adults || "1").toString(),
    children: (params.children || "0").toString(),
    infants: (params.infants || "0").toString(),
    countryCode: params.countryCode || "NG",
    cabinClass: params.cabinClass || "ECONOMY",
    currency: params.currency || "NGN",
  }).toString();

  const url = `https://booking-com15.p.rapidapi.com/api/v1/flights/searchFlights?${queryString}`;

  const res = await fetch(url, {
    method: "GET",
    headers: {
      "x-rapidapi-key": "f513ceac66msh9767d00f1625675p11d87ejsn04bd612b3060",
      "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
    },
  });

  const data = await res.json();

  if (!data?.data?.flightOffers || !Array.isArray(data.data.flightOffers)) {
    return { flights: [] };
  }

  const flights = data.data.flightOffers.map((offer: any) => {
    const segment = offer.segments?.[0]; // First segment
    const leg = segment?.legs?.[0]; // First leg

    const departureAirport = segment?.departureAirport?.name || "";
    const arrivalAirport = segment?.arrivalAirport?.name || "";
    const departureTime = segment?.departureTime || "";
    const arrivalTime = segment?.arrivalTime || "";
    const departureAirportCode = segment?.departureAirport?.code || "";
    const arrivalAirportCode = segment?.arrivalAirport?.code || "";

    const carriersData = leg?.carriersData || [];
    const airline = carriersData?.[0];
    const airlineName = airline?.name || "";
    const airlineLogo = airline?.logo || "";

    const price = offer?.priceBreakdown?.total?.units || 0;
    const priceDetails = offer?.priceBreakdown || {};
    const cabinClass = leg?.cabinClass || "";
    const airplaneNo = leg?.flightInfo?.flightNumber || "";
    const planeType = leg?.flightInfo?.planeType || "";
    const facilities = leg?.flightInfo?.facilities || [];
    const totalTime = segment?.totalTime || 0;
    const code = offer?.token || "";

    return {
      airlineName,
      airlineLogo,
      departureTime,
      arrivalTime,
      from: departureAirportCode,
      to: arrivalAirportCode,
      price,
      priceDetails,
      cabinClass,
      airplaneNo,
      planeType,
      facilities,
      duration: totalTime,
      isEconomy: cabinClass === "ECONOMY",
      code,
    };
  });

  console.log(flights);

  return { flights };
};

export const searchAirports = async (query: string): Promise<Airport[]> => {
  const res = await fetch(
    `https://booking-com15.p.rapidapi.com/api/v1/flights/searchDestination?query=${encodeURIComponent(
      query
    )}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "f513ceac66msh9767d00f1625675p11d87ejsn04bd612b3060",
        "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
      },
    }
  );

  const data = await res.json();
  return data.data as Airport[];
};

export const searchDestination = async (query: string) => {
  const url = `https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination?query=${query}`;

  const res = await fetch(url, {
    method: "GET",
    headers: {
      "x-rapidapi-key": "c4f478ad21msh042189f978c793dp1d2b03jsnae96d38a15e5",
      "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
    },
  });

  const data = await res.json();
  return data.data || [];
};

export const searchHotels = async (
  params: HotelSearchParams
): Promise<Hotel[]> => {
  const query = new URLSearchParams(params as any).toString();
  const url = `https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels?${query}`;

  const res = await fetch(url, {
    method: "GET",
    headers: {
      "x-rapidapi-key": "c4f478ad21msh042189f978c793dp1d2b03jsnae96d38a15e5",
      "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
    },
  });

  const data = await res.json();

  return data.data.hotels.map(
    (h: ApiHotel): Hotel => ({
      id: h.id,
      name: h.name,
      address: h.address,
      rating: h.rating || 0,
      image: h.mainPhotoUrl,
      price: h.priceBreakdown?.grossPrice?.value || 0,
    })
  );
};
