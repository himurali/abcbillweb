

import React from 'react';
import clsx from 'clsx';   
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'



export default function Feature2 () {

    const myStyle1 = {
        width: 600,
        height: 400,
        backgroundImage:
          "url('https://www.herocycles.com/on/demandware.static/-/Sites-HeroCycles-Library/default/dw0ca622ba/About_Us/ourbeginnings/01%20%281%29.jpg')",
      };

      
  return (
     
     <div>  <section className="bg-gray-100 dark:bg-gray-800 lg:py-12 lg:flex lg:justify-center" >
     <div
         className="overflow-hidden bg-white dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
         <div className="lg:w-1/2">
             <div className="h-64 bg-cover lg:h-full "  style={myStyle1}></div>
         </div>
 
         <div className="max-w-xl px-16 py-12 lg:max-w-5xl lg:w-1/2">
            
  
 
             <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
             Active Mobility  Economy & Development  
             </h2>
             <h3 className="text-1xl  text-white">  Atmanirbhar Bharath infrastructure    <span className="text-1xl  text-blue-500">              for bicycle manufacturing 
                </span></h3>
            <p className="mt-4 text-gray-500 dark:text-gray-300">
            fostering innovation, entrepreneurship, and collaboration in the bicycle industry 
             </p>
         </div>
     </div>
 </section>

    
     </div> 
    
  );
}
