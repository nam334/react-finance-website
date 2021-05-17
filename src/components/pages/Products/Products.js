import React from "react";
import HeroSection from "../../HeroSection";
import Pricing from "../../Pricing";

import { homeObjOne, homeObjThree, homeObjFour, homeObjTwo } from "./Data";
function Products() {
  return (
    <>
      <Pricing />
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default Products;
