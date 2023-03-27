import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"; 
  
import Feature3 from "./Feature3";
 
export default function HomePage() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
       
      <main>
      
       

        <p></p>
        <Feature3></Feature3>

          </main>
    </Layout>
  );
}
