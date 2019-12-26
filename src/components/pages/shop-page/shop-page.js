import React from "react";
import Section from "../../wrappers-components/section/section";
import Categories from "../../categories/categories";
import BestSales from "../../best-sales/best-sales";

const ShopPage = () => {
  return(
    <main>
      <Section heading={"Categories"}>
        <Categories />
      </Section>
      <Section heading={"Best Sales"}>
        <BestSales />
      </Section>
    </main>
  )
};

export default ShopPage;