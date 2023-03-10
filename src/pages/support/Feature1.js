

import React from 'react';
import clsx from 'clsx';   
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'



export default function Feature1 () {

    const myStyle1 = {
        backgroundImage:
          "url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80')",
      };

      
  return (
    
     <div>  <section className="bg-gray-100 dark:bg-gray-800 lg:py-12 lg:flex lg:justify-center" >
   


     
  <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
    
    <div className="rounded overflow-hidden shadow-lg">
      <img className="w-full" src="https://images.unsplash.com/photo-1523740856324-f2ce89135981?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1226&q=80" alt="Mountain"></img>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Coalition Building</div>
        <p className="text-gray-700 text-base">
        build coalitions with other like-minded organizations to amplify their voice and create a broader movement in support of the bill. This could include civil society organizations, cycling clubs, and environmental groups.        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div>
    </div>
    
    <div className="rounded overflow-hidden shadow-lg">
      <img className="w-full" src="https://images.unsplash.com/photo-1523740856324-f2ce89135981?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1226&q=80" alt="River"></img>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Grassroots Mobilization:</div>
        <p className="text-gray-700 text-base">
        mobilize grassroots support for the bill by engaging with local communities, schools, and colleges. This could involve organizing cycling rallies, workshops, and other events to promote cycling and raise awareness about the benefits of the bill.        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#summer</span>
      </div>
    </div>

 
    <div className="rounded overflow-hidden shadow-lg">
      <img className="w-full" src="https://images.unsplash.com/photo-1523740856324-f2ce89135981?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1226&q=80" alt="Forest"></img>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Lobbying</div>
        <p className="text-gray-700 text-base">
        engage in targeted lobbying efforts to influence parliamentarians and government officials. This could include meetings with MPs, sending letters or petitions to government officials, and organizing rallies or demonstrations to draw attention to the issue.        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
      </div>
    </div>
  </div> 
 </section>

    
     </div> 
    
  );
}
