

import React from 'react';
import clsx from 'clsx';   
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'



export default function Feature2 () {

    const myStyle1 = {
        width: 600,
        height: 400,
        backgroundImage:
          "url('https://images.unsplash.com/photo-1645614454383-b38bc1cca791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')",
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
             Atmanirbhar <span className="text-blue-500">for bicycle manufacturing </span>
             </h2>
 
             <p className="mt-4 text-gray-500 dark:text-gray-300">
             fostering innovation, entrepreneurship, and collaboration in the bicycle industry
             </p>
 
             <div className="inline-flex w-full mt-6 sm:w-auto">
          
             </div>
         </div>
     </div>
 </section>

    
     </div> 
    
  );
}
