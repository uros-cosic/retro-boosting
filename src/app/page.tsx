import BoostingServiceSection from "@/components/BoostingServiceSection";
import CoachingServiceSection from "@/components/CoachingServiceSection";
import GameList from "@/components/GameList";
import LandingPage from "@/components/LandingPage";
import References from "@/components/References";
import ReviewsSection from "@/components/ReviewsSection";

export default function Home() {
  return (
    <>
      <LandingPage />
      <References />
      <BoostingServiceSection />
      <GameList />
      <CoachingServiceSection />
      <ReviewsSection />
    </>
  );
}
