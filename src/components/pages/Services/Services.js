import React from "react";
import HeroSection from "../../HeroSection";
import Pricing from "../../Pricing";

import { homeObjOne, homeObjThree, homeObjFour, homeObjTwo } from "./Data";
function Services() {
  return (
    <>
      <Pricing />
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default Services;
