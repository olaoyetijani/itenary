import { AppSidebar } from "./AppSidebar";
import Navbar from "./Navbar";
import TripActivities from "./TripActivities";
import { TripHero } from "./TripHero";
import TripHotels from "./TripHotels";
import TripItenaries from "./TripItenaries";

// flex items-center

export function Landing() {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-[300px_auto] items-start my-8">
        <AppSidebar />
        <main className="bg-white">
          <TripHero />
          <TripItenaries />
          <TripHotels />
          <TripActivities />
        </main>
      </div>
    </div>
  );
}
