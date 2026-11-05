import React from "react";
import Banner from "./_components/HomePageSections/Banner/Banner";
import StatsSection from "./_components/HomePageSections/StatsSection/StatsSection";
import { getAllProperties } from "./_actions/getAllProperty";

import PropertyCardSection from "./_components/HomePageSections/PropertyCardSection/PropertyCardSection";
import About from "./_components/HomePageSections/AboutSection/AboutSection";
import Faq from "./_components/HomePageSections/FaqSection/Faq";
import HowItWorksSection from "./_components/HomePageSections/HowItWorksSection/HowItWorksSection";
import LandlordSection from "./_components/HomePageSections/LandlordSection/LandlordSection";
import { getMe } from "@/service/getMe";

const HomePage = async () => {
  const [roomDataRes, user] = await Promise.all([getAllProperties(), getMe()]);
  const homeData = roomDataRes.data.slice(0, 6);
  return (
    <div>
      <Banner />
      <StatsSection />
      <PropertyCardSection homeData={homeData} />
      <HowItWorksSection />
      <About />
      <LandlordSection user={user} />
      <Faq />
    </div>
  );
};

export default HomePage;
