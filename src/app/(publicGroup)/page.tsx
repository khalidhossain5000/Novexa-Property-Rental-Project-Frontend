import React from "react";
import Banner from "./_components/Banner/Banner";
import StatsSection from "./_components/StatsSection/StatsSection";
import { getAllProperties } from "./_actions/getAllProperty";

import PropertyCardSection from "./_components/PropertyCardSection/PropertyCardSection";

const HomePage = async() => {
  const roomDataRes=await getAllProperties()
  console.log(roomDataRes,"hello res rom data")
  const homeData=roomDataRes.data.slice(0,6)
  return (
    <div>
      <Banner />
      <StatsSection/>
      <PropertyCardSection homeData={homeData} />
    </div>
  );
};

export default HomePage;
