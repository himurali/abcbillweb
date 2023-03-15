import React from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Vimeo from "@u-wave/react-vimeo";

export default function Herosection() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
      
      </section>


      
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">Our Mission </h1>
                    <p className="font-normal text-base leading-6 text-gray-600 dark:text-white">     
                    Our mission is to create a healthier, more sustainable, and
              prosperous India by shaping the future of mobility through the ATMANIRBHAR BHARAT CYCLE BILL.{" "}</p>
              
              <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">Our Vision </h1>
                    <p className="font-normal text-base leading-6 text-gray-600 dark:text-white">     
                    Transform India into a world leader in sustainable transportation and active living{" "}</p>
                    
                    <div>Make cycling is an integral part of everyday life, promoting a cleaner environment, reducing traffic congestion, and creating more vibrant and connected communities.</div>
           
           </div>
                       <div className="w-full lg:w-8/12">
                    <img className="w-full h-full" src="https://i.imgur.com/yb6rcmC.jpg" alt="A group of People" />
                </div>
            </div>
    
            
        </div>
    
    </div>
  );
}
