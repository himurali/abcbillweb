import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"; 
 
 
import Feature5 from "./Feature5";

 
export default function HomePage() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Strategy for  ${siteConfig.title}`}
      description=" Trigger the active mobility transformation"
    >
       
      <main>
      
      
        <Feature5></Feature5>

          </main>
    </Layout>
  );
}
