import React from 'react';
import clsx from 'clsx';   
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'



export default function Herosection () {
  return (
     
     <div className="bg-gray-900 dark:bg-gray-900"> 
   

<div className="flex flex-col md:flex-row items-center justify-center">
  <div className="w-full md:w-1/2 p-8">
    <img src="https://i.imgur.com/fBcopdw.jpg" alt="Image" className="w-full h-auto"></img>
  </div>
  <div className="w-full md:w-1/2 p-8 flex flex-col items-center justify-center">
    <h1 className="text-4xl font-bold text-center mb-4 text-white">Let us Transform India into a Cycling Nation</h1>
    <p className="text-lg text-center mb-4  text-white"> Our mission is to create a healthier, more sustainable, and prosperous India by shaping the
     future of mobility through the ATMANIRBHAR BHARAT CYCLE BILL .</p>
     <h1 className="mt-4 text-2xl font-bold leading-tight text-white sm:text-2xl">
            Move Yourself 
   
                       </h1>
    <div className="flex flex-col md:flex-row items-center justify-center">
      <a href="/joinus" className="w-full md:w-auto px-4 py-2 rounded-full bg-gray-500 text-white hover:bg-yellow-200 mb-4 md:mr-4"> Join us</a>
      <a href="/docs/pillars/justice" className="w-full md:w-auto px-4 py-2 rounded-full bg-gray-500 text-white hover:bg-yellow-200 mb-4 md:mr-4">Pillars</a>
      <a href="/support"  className="w-full md:w-auto px-4 py-2 rounded-full bg-gray-500 text-gray-100 hover:bg-yellow-200 mb-4">Support Us</a>
      <a href="https://chng.it/VTJVgd5Wzb"  className="mx-4 w-full md:w-auto px-4 py-2 rounded-full bg-gray-500 text-gray-100 hover:bg-yellow-200 mb-4">Sign Petition </a>


            
    </div>
    <p className="text-lg text-center mb-4  text-white">   #abcbill #indiacycling #healthyindia .</p>

  </div>
</div>
    
     </div> 
    
  );
}
