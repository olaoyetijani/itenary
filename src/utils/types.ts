/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Flight {
  airlineName: string;
  airlineLogo: string;
  departureTime: string;
  arrivalTime: string;
  from: string;
  to: string;
  price: number;
  priceDetails: any; // Optional: define a PriceDetails interface
  cabinClass: string;
  airplaneNo: string;
  planeType: string;
  facilities: any[]; // You can type this better if needed
  duration: number;
  isEconomy: boolean;
  code: string;
  flightNumber: any;
  date: any;
}

export interface Airline {
  name: string;
  code: string;
  logoUrl: string;
}

export interface HotelSearchParams {
  dest_id: string;
  search_type: string;
  adults: string;
  children_age: string;
  room_qty: string;
  page_number: string;
  units: string;
  temperature_unit: string;
  languagecode: string;
  currency_code: string;
  location: string;
}

// export interface Hotel {
//   reviewsCount: number;
//   id: string;
//   name: string;
//   address: string;
//   rating: number;
//   image: string;
//   price: number;
// }

export interface ApiHotel {
  id: string;
  name: string;
  address: string;
  rating?: number;
  mainPhotoUrl: string;
  priceBreakdown?: {
    grossPrice?: {
      value?: number;
    };
  };
}

export interface Hotel {
  id: string;
  name: string;
  address: string;
  rating: number;
  image: string;
  price: number;
  reviewsCount?: number;
  roomType?: string;
  totalPrice?: number;
  room_qty?: number;
  nights?: number;
  checkIn?: string;
  checkOut?: string;
}
