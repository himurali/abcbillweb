import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"; 
 

import Herosection from "./Herosection"
import Feature1 from "./Feature1"
import Feature2 from "./Feature2";
import Feature3 from "./Feature3";
import TfeatureGov from "./TfeatureGov";
import TfeatureInfra from "./TfeatureInfra"

import TfeatureEconomy from "./TfeatureEconomy"
import TfeatureJustice from "./TfeatureJustice"
import TfeatureResearch from "./TfeatureResearch";
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="bg-white-500">
    
      <div class="container w-full mx-auto media-container">
    <img src="https://res.cloudinary.com/dsmfsfyci/image/upload/v1670235926/nncfwebdocu/Lead_Ride_Banner_zpsmna.png"
         alt="Hulu Live TV, The Handmaid's Tale, The Good Doctor, Brooklyn Nine-Nine, Teen Titans Go, Transformers"
      class="w-full h-auto flex-shrink-0 opacity: 1"
    />
  </div>
  
      
    </header>
  );
}

export default function HomePage() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description=" Trigger the active mobility transformation"
    >
       
      <main>
      
        <Herosection/>
      
        <TfeatureGov></TfeatureGov>
        <TfeatureInfra></TfeatureInfra>
        <TfeatureEconomy></TfeatureEconomy>
        <TfeatureJustice></TfeatureJustice>
        <TfeatureResearch></TfeatureResearch>
          </main>
    </Layout>
  );
}
