import { Location } from "./Location";
import { FAQ } from "./FAQ";
import { HomeSection } from "./Home";
import { PartnerShips } from "./Partnerships";
import Stats from "./Stats";
// import { Sections } from "./Sections";
import { Tender } from "./Tender";
import { Software } from "./Software";

export default function Home() {
  return (
    <div className="w-full">
      <HomeSection />
      <Software />
      <Stats />
      {/* <Sections /> */}
      <Location />
      <Tender />
      <PartnerShips />
      <FAQ />
    </div>
  );
}
