import React from 'react';
import clsx from 'clsx';   
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'



export default function Herosection () {
  return (
     
     <div> 
   <section className="bg-white dark:bg-gray-900">
    
    <div className="container px-6 py-16 mx-auto text-center">
        <div className="max-w-lg mx-auto">
            <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Building the Active Future with Namma Cycle</h1>
            <p className="mt-6 text-blue-600 dark:text-gray-300">We are building the platform for the bicycle services.</p>
           
            
        </div>

        <div className="flex justify-center mt-10">
            <img className="object-cover w-full h-96 rounded-xl lg:w-4/5" src="/img/design_new.jpg" />
        </div>
    </div>
</section>

    
     </div> 
    
  );
}
