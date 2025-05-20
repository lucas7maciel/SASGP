import { FAQ } from "./FAQ";
import { HomeSection } from "./Home";
import { PartnerShips } from "./Partnerships";
import { Sections } from "./Sections";
import { Tender } from "./Tender";

export default function Home() {
  return (
    <div className="w-full">
      <HomeSection />
      <Sections />
      <Tender />
      <PartnerShips />
      <FAQ />
    </div>
  );
}
