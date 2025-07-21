/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Flight, Hotel } from "../utils/types";
import {
  createContext,
  useReducer,
  useContext,
  type ReactNode,
  type Dispatch,
} from "react";

export interface Activity {
  id: string;
  title: string;
  location: string;
  [key: string]: any;
}

interface ItineraryState {
  flights: Flight[];
  hotels: Hotel[];
  activities: Activity[];
}

type Action =
  | { type: "ADD_FLIGHT"; payload: Flight }
  | { type: "ADD_HOTEL"; payload: Hotel }
  | { type: "ADD_ACTIVITY"; payload: Activity };

const initialState: ItineraryState = {
  flights: [],
  hotels: [],
  activities: [],
};

function reducer(state: ItineraryState, action: Action): ItineraryState {
  switch (action.type) {
    case "ADD_FLIGHT":
      return { ...state, flights: [...state.flights, action.payload] };
    case "ADD_HOTEL":
      return { ...state, hotels: [...state.hotels, action.payload] };
    case "ADD_ACTIVITY":
      return { ...state, activities: [...state.activities, action.payload] };
    default:
      return state;
  }
}

interface ItineraryContextType {
  state: ItineraryState;
  dispatch: Dispatch<Action>;
}

const ItineraryContext = createContext<ItineraryContextType | undefined>(
  undefined
);

interface ItineraryProviderProps {
  children: ReactNode;
}

export const ItineraryProvider = ({ children }: ItineraryProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ItineraryContext.Provider value={{ state, dispatch }}>
      {children}
    </ItineraryContext.Provider>
  );
};

export const useItinerary = (): ItineraryContextType => {
  const context = useContext(ItineraryContext);
  if (!context) {
    throw new Error("useItinerary must be used within an ItineraryProvider");
  }
  return context;
};
