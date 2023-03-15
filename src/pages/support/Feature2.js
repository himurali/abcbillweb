

import React from 'react';
import clsx from 'clsx';   
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'



export default function Feature2 () {

    const myStyle1 = {
        backgroundImage:
          "url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80')",
      };

      
  return (
     
     <div>  <section className="bg-gray-100 dark:bg-gray-800 lg:py-112 lg:flex lg:justify-center" >
   
 
<div>      
	<div className="bannerFondo bg-green-800	bg-left-top bg-auto bg-repeat-x"  style={myStyle1} >
	</div>

      <div className="-mt-64 ">
        <div className="w-full text-center">
         
      </div>
              
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 ">
  
          <div className="p-2 sm:p-10 text-center cursor-pointer">
              <div className="py-16 max-w-sm rounded overflow-hidden shadow-lg hover:bg-white transition duration-500  bg-white">
                  <div className="space-y-10">
                      <i className="fa fa-spa" ></i>
                      
                      <div className="px-6 py-4">
                          <div className="space-y-5">
                              <div className="font-bold text-xl mb-2">Spa</div>
                              <p className="text-gray-700 text-base">
                                  Todo tipo de masajes y técnicas
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
  
          <div className="p-2 sm:p-10 text-center cursor-pointer text-white"> 
              <div className="py-16 max-w-sm rounded overflow-hidden shadow-lg bg-orange-500 hover:bg-orange-600 transition duration-500">
                  <div className="space-y-10">
                    <i className="fa fa-head-side-mask"  ></i>
                      <div className="px-6 py-4">
                          <div className="space-y-5">
                              <div className="font-bold text-xl mb-2">Bioseguridad</div>
                              <p className="text-base">
                                  Altos estandares de bioseguridad
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
  
          <div className="p-2 sm:p-10 text-center cursor-pointer translate-x-2">
              <div className="py-16 max-w-sm rounded overflow-hidden shadow-lg hover:bg-white transition duration-500 bg-white ">
                  <div className="space-y-10">
                      <i className="fa fa-swimmer" ></i>
                      
                      <div className="px-6 py-4">
                          <div className="space-y-5">
                              <div className="font-bold text-xl mb-2">Piscina</div>
                              <p className="text-gray-700 text-base">
                                  Piscina temperada
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
  
      </div>
      </div>
  
  </div>

 </section>

    
     </div> 
    
  );
}
