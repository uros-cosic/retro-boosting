import BoostingServiceSection from "@/components/BoostingServiceSection";
import CoachingServiceSection from "@/components/CoachingServiceSection";
import GameList from "@/components/GameList";
import IndexHero from "@/components/IndexHero";
import ReviewsSection from "@/components/ReviewsSection";
import TrustPilotSection from "@/components/TrustPilotSection";

export default function Home() {
  return (
    <>
      <IndexHero />
      <TrustPilotSection />
      <BoostingServiceSection />
      <GameList />
      <CoachingServiceSection />
      <ReviewsSection />
    </>
  );
}
