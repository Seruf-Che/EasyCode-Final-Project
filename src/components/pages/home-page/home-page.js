import React from "react";
import SimpleSlider from "../../simple-slider/simple-slider";
import Section from "../../wrappers-components/section/section";
import Categories from "../../categories/categories";
import BestSales from "../../best-sales/best-sales";

const HomePage = () => {
  return(
    <main>
      <SimpleSlider />
      <Section heading={"Categories"}>
        <Categories />
      </Section>
      <Section heading={"Best Sales"}>
        <BestSales />
      </Section>
    </main>
  )
};

export default HomePage