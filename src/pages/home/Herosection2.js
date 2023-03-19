import React from 'react';
import clsx from 'clsx';   
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'



export default function Herosection2 () {
  return (
     
     <div> 
  <div className="relative h-screen overflow-hidden bg-orange-600">
    <img src="https://i.imgur.com/fBcopdw.jpg" className="absolute object-cover w-full h-full"/>
    <div className="absolute inset-0 bg-black opacity-25">
    </div>
    <header className="absolute top-0 left-0 right-0 z-20">
        <nav className="container px-6 py-4 mx-auto">
            <div className="items-center justify-between md:flex">
                <div className="flex flex-row items-left ">
               
                    <div >
                    

                        <a href="#" className="block px-4 py-3 mt-10 text-lg font-bold text-gray-800 uppercase bg-white rounded-lg hover:bg-gray-100">
                Join us
            </a>

            <a href="#" className="block px-4 py-3 mt-10 text-lg font-bold text-gray-800 uppercase bg-white rounded-lg hover:bg-gray-100">
                Pillars
            </a>

            <a href="#" className="block px-4 py-3 mt-10 text-lg font-bold text-gray-800 uppercase bg-white rounded-lg hover:bg-gray-100">
                Support Us
            </a>
            <h1 className="mt-4 text-2xl font-bold leading-tight text-white sm:text-2xl">
            Move Yourself 
   
                       </h1>
                    </div>
                </div>
               
            </div>
        </nav>
    </header>
    <div className="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-1 xl:py-14">
        <div className="relative z-10 flex flex-col items-start lg:w-3/5 xl:w-2/5">
            <span className="font-bold md:text-2xl text-yellow-400 uppercase">
            </span>
          
        
            
         
        </div>
    </div>
</div>
    
     </div> 
    
  );
}
