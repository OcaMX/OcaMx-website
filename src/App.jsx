import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BioSection from "./components/BioSection";
import MusicSection from "./components/MusicSection";
import VideoSection from "./components/VideoSection";
import TourSection from "./components/TourSection";
import ContactSection from "./components/ContactSection";
import MerchSection from "./components/MerchSection";

export default function App() {
  return (
    <main className="bg-bgBlack text-white font-sans">
      <Navbar />
      <HeroSection />
      <BioSection />
      <MusicSection />
      <VideoSection />
      <TourSection />
      <ContactSection />
      <MerchSection />
    </main>
  );
}
