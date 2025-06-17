import { Location } from "../localization";
import { FAQ } from "./FAQ";
import { HomeSection } from "./Home";
import { PartnerShips } from "./Partnerships";
import Stats from "./Stats";
// import { Sections } from "./Sections";
import { Tender } from "./Tender";

export default function Home() {
  return (
    <div className="w-full">
      <HomeSection />
      <Stats />
      {/* <Sections /> */}
      <Location />
      <Tender />
      <PartnerShips />
      <FAQ />
    </div>
  );
}
