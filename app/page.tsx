import TopBar from "@/components/TopBar";
import SearchBar from "@/components/SearchBar";
import CategoryTabs from "@/components/CategoryTabs";
import BannerCarousel from "@/components/BannerCarousel";
import AddressCard from "@/components/AddressCard";
import PopularServices from "@/components/PopularServices";

export default function Home() {
  return (
    <main className="
      max-w-md
      mx-auto
      px-4
      pt-5
      pb-32
      bg-stone-50
      min-h-screen
    ">
      {/* 
        ВАЖНО:
        - все внешние отступы управляются ТОЛЬКО здесь
        - компоненты внутри не имеют mb-*
      */}
      <div className="space-y-2.5">
        <TopBar name="Иван Иванов" />
        <SearchBar />
        <CategoryTabs />
        <BannerCarousel />
        <AddressCard />
        <PopularServices />
      </div>
    </main>
  );
}
