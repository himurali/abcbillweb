import React from "react"; 
import Layout from "@theme/Layout"; 
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"; 
import Herosection from "../components/homepage/Herosection"
 

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

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
       
      <main>
      
        <Herosection/>

          </main>
    </Layout>
  );
}
