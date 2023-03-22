import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"; 
 

import Herosection from "./Herosection" 
import Feature3 from "./Feature3";
import ImpactFeature2 from "./ImpactFeature2";
 

export default function HomePage() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Impact from ${siteConfig.title}`}
      description=" Trigger the active mobility transformation"
    >
       
      <main>
      <Feature3></Feature3>

        <Herosection/>
        <ImpactFeature2></ImpactFeature2>

          </main>
    </Layout>
  );
}
