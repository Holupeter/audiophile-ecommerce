import HomepageHero from "@/components/HomepageHero/HomepageHero";
import HomepageCategories from "@/components/HomepageCategories/HomepageCategories";
import HomepagePromos from "@/components/HomepagePromos/HomepagePromos";
import AudioGearSection from "@/components/AudioGearSection/AudioGearSection";

export default function Home() {
  return (
    <main>
      <HomepageHero />
      <HomepageCategories />
      <HomepagePromos />
      <AudioGearSection />
    </main>
  );
}