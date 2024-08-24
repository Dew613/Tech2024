import Hero from "@/components/Hero";
import InfiniteSlider from "@/components/InfiniteSlider";


export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col mx-auto bg-hero-pattern bg-small px-3">
         <div className="w-full">
          <Hero/>
          <InfiniteSlider/>
        </div>
    </main>

  );
}
