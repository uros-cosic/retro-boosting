import BoostingServiceSection from "@/components/BoostingServiceSection";
import CoachingServiceSection from "@/components/CoachingServiceSection";
import GameList from "@/components/GameList";
import LandingPage from "@/components/LandingPage";
import ReviewsSection from "@/components/ReviewsSection";
import TrustPilotSection from "@/components/TrustPilotSection";

export default function Home() {
  return (
    <>
      <LandingPage />
      <TrustPilotSection />
      <BoostingServiceSection />
      <GameList />
      <CoachingServiceSection />
      <ReviewsSection />
    </>
  );
}
