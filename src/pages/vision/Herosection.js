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
            <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Our mission is to create a healthier, more sustainable, and prosperous India by shaping the future of mobility </h1>
            <p className="mt-6  text-2xl text-blue-600 dark:text-gray-300">through the ATMANIRBHAR BHARAT CYCLE BILL.</p>
    
        </div>

        <div className="flex justify-center mt-10">
            <img className="object-cover w-full  rounded-xl lg:w-4/5" src="http://thewire.in/wp-content/uploads/2015/11/17741791036_83233c09db_h.jpg" />
        </div>
    </div>
</section>

    
     </div> 
    
  );
}
