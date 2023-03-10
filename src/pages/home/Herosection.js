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
            <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl"> Atmanirbhar Bharath Cycle Bill  Building the Active Future for India </h1>
            <p className="mt-6 text-blue-600 dark:text-gray-300">Making  - Bharath a Cycling Nation.</p>
           
            
        </div>

        <div className="flex justify-center mt-10">
            <img className="object-cover w-full h-125 rounded-xl lg:w-4/5" src="https://blogs.worldbank.org/sites/default/files/users/user1001/np-patan-cyclist-lucian-alexe-unsplash.jpg" />
        </div>
    </div>
</section>

    
     </div> 
    
  );
}
