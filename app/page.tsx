import Hero from "@/components/Hero";


export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto bg-hero-pattern bg-small">
         <div className="w-full">
          <Hero/>
        </div>
    </main>

  );
}
