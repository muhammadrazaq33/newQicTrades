// import Navbar from "@/components/navbar";
// import Hero from "@/components/hero";
import LiveMarket from "@/components/HomePageComponents/LiveMarket";
import HowItWorks from "@/components/HomePageComponents/HowItWorks";
import PlatformFeatures from "@/components/HomePageComponents/PlatformFeatures";
import Hero from "@/components/HomePageComponents/Hero";
// import PlatformFeatures from "@/components/platform-features";

export default function HomePage() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="bg-[url('/Images/bgimage.png')] bg-cover bg-center ">
        <div className="w-full max-w-screen-xl mx-auto px-3 sm:px-8 py-15 md:py-20 text-slate-800">
          <Hero />
        </div>
      </div>
      {/* <Hero /> */}
      <div className="bg-[#F9FAFB]">
        <div className="w-full max-w-screen-xl mx-auto px-3 sm:px-8 py-15 md:py-20 bg-[#F9FAFB] text-slate-800">
          <LiveMarket />
        </div>
      </div>
      <div className="bg-[#F3F4F6]">
        <div className="w-full max-w-screen-xl mx-auto px-3 sm:px-8 py-15 md:py-20 ">
          <HowItWorks />
        </div>
      </div>
      <div className="bg-[#1B1B1B]">
        <div className="w-full max-w-screen-xl mx-auto px-3 sm:px-8 py-15 md:py-20 ">
          <PlatformFeatures />
        </div>
      </div>
      {/* <main className="w-full max-w-screen-2xl mx-auto px-3 sm:px-6 pb-6 pt-4 md:pb-8 bg-[#F5F7FA] text-slate-800">
        <LiveMarket />
        <HowItWorks />
        <PlatformFeatures />
      </main> */}
    </>
  );
}
