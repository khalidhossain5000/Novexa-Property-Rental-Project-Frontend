import React from "react";
import Banner from "./_components/HomePageSections/Banner/Banner";
import StatsSection from "./_components/HomePageSections/StatsSection/StatsSection";
import { getAllProperties } from "./_actions/getAllProperty";

import PropertyCardSection from "./_components/HomePageSections/PropertyCardSection/PropertyCardSection";
import About from "./_components/HomePageSections/AboutSection/AboutSection";
import Faq from "./_components/HomePageSections/FaqSection/Faq";

const HomePage = async () => {
  const roomDataRes = await getAllProperties();
  const homeData = roomDataRes.data.slice(0, 6);
  return (
    <div>
      <Banner />
      <StatsSection />
      <PropertyCardSection homeData={homeData} />
      <About />
      <Faq/>
    </div>
  );
};

export default HomePage;
