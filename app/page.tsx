import TopBar from "@/components/TopBar";
import SearchBar from "@/components/SearchBar";
import CategoryTabs from "@/components/CategoryTabs";
import BannerCarousel from "@/components/BannerCarousel";
import AddressCard from "@/components/AddressCard";
import PopularServices from "@/components/PopularServices";

export default function Home() {
  return (
    <main className="max-w-md mx-auto px-4 py-6 pb-28 bg-stone-50 min-h-screen">
      <TopBar name="Иван Иванов" />
      <SearchBar />
      <CategoryTabs />
      <BannerCarousel/>
      <AddressCard/>
      <PopularServices/>
    </main>
  );
}
