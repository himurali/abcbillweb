

import React from 'react';
import clsx from 'clsx';   
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'



export default function Feature4Infra2 () {

    const myStyle1 = {
        width: 600,
        height: 400,

        backgroundImage:
          "url('https://i.imgur.com/rSAfvwk.png')",
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
            Building Effective Active Mobility  Governance     <br></br>  
              
             </h2>
             <h3 className="text-1xl  text-white"> Active Mobility Governance  <span className="text-1xl  text-blue-500"> to create more liveable cities.</span></h3>
             <p className="mt-4 text-gray-500 dark:text-gray-300">
             From a non existing governance mechanism for Active Mobility- the bill provides a Robust Organizational Structure, effective execution, robust budget  Robust budget & finance management.
             </p>
 
             <div className="inline-flex w-full mt-6 sm:w-auto">
                    
             </div>
         </div>
     </div>
 </section>

    
     </div> 
    
  );
}
