import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"; 
 

import Herosection from "./Herosection" 
import TfeatureGov2 from "./TfeatureGov2";
import TfeatureInfra2 from "./TfeatureInfra2"

import TfeatureEconomy2 from "./TfeatureEconomy2"
import TfeatureJustice2 from "./TfeatureJustice2"
import TfeatureResearch from "./TfeatureResearch"; 

export default function HomePage() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description=" Trigger the active mobility transformation"
    >
       
      <main>
      
        <Herosection/>
      
        <TfeatureGov2></TfeatureGov2>
        <TfeatureInfra2></TfeatureInfra2>
        <TfeatureEconomy2></TfeatureEconomy2>
        <TfeatureJustice2></TfeatureJustice2>
        <TfeatureResearch></TfeatureResearch>
          </main>
    </Layout>
  );
}
