

import React from 'react';
import clsx from 'clsx';   
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'



export default function Feature5Research () {

    const myStyle1 = {
        width: 600,
        height: 400,

        backgroundImage:
          "url('https://www.intelligenttransport.com/wp-content/uploads/bike-share-2.jpg')",
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
             Active Mobility  Research   
              
             </h2>
             <h3 className="text-1xl  text-white">Research and planning to inspire   active mobility policies and programs.  <span className="text-1xl  text-blue-500">             Identify emerging trends, technologies, and best practices
.</span></h3>
             <p className="mt-4 text-gray-500 dark:text-gray-300">
             Evidence-based policy and program development             </p>
             
         </div>
     </div>
 </section>

    
     </div> 
    
  );
}
