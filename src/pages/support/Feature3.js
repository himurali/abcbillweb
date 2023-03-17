

import React from 'react';
import clsx from 'clsx';   
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'



export default function Feature3 () {

    const myStyle1 = {
        backgroundImage:
          "url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80')",
      };

      
  return (
     
     <div>  
     <section className="relative z-10 overflow-hidden bg-white py-20 lg:py-[120px]">
       <div className="container mx-auto">
         <div className="-mx-4 flex flex-wrap lg:justify-between">
           <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
             <div className="mb-12 max-w-[570px] lg:mb-0">
               <span className="text-primary mb-4 block text-base font-semibold">
                 Contact Us
               </span>
               <h2
                 className="text-dark mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]"
               >
                 GET IN TOUCH WITH US
               </h2>
               <p className="text-body-color mb-9 text-base leading-relaxed">
               ABC Bill is a community initiative    being anchored by Namma Nimma Cycle Foundation a non-profit organization in Bangalore, 
               India, with a mission to promote active mobility and sustainable transportation across Asia. 
               <p>  Our  focus is on creating a culture of cycling, promoting the benefits of cycling, and advocating for cycling-friendly policies and infrastructure. Our  goal is to enable active mobility on a large scale, contributing to a healthier, cleaner, and more livable planet.
               </p>
               <p>  Donations to NNCF  go towards supporting active mobility projects.</p>
               <p>

<a href="https://rzp.io/l/nammacyclesupport" class="items-center justify-center w-full px-6 py-3 text-center text-white duration-200 bg-black border-2 border-black nline-flex hover:bg-transparent hover:border-black rounded-xl hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black focus-visible:ring-black">
Donate                            </a>

</p> 
<p>    If you would like to know more about the impact your donation will have please get in touch.</p>
              To enquire about partnership between your organisation and NNCF please get in touch.
              </p>
       
               <div className="mb-8 flex w-full max-w-[370px]">
                 <div
                   className="bg-primary text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]"
                 >
                   <svg
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     className="fill-current"
                   >
                     <path
                       d="M21.8182 24H16.5584C15.3896 24 14.4156 23.0256 14.4156 21.8563V17.5688C14.4156 17.1401 14.0649 16.7893 13.6364 16.7893H10.4026C9.97403 16.7893 9.62338 17.1401 9.62338 17.5688V21.8173C9.62338 22.9866 8.64935 23.961 7.48052 23.961H2.14286C0.974026 23.961 0 22.9866 0 21.8173V8.21437C0 7.62972 0.311688 7.08404 0.818182 6.77223L11.1039 0.263094C11.6494 -0.0876979 12.3896 -0.0876979 12.9351 0.263094L23.2208 6.77223C23.7273 7.08404 24 7.62972 24 8.21437V21.7783C24 23.0256 23.026 24 21.8182 24ZM10.3636 15.4251H13.5974C14.7662 15.4251 15.7403 16.3995 15.7403 17.5688V21.8173C15.7403 22.246 16.0909 22.5968 16.5195 22.5968H21.8182C22.2468 22.5968 22.5974 22.246 22.5974 21.8173V8.25335C22.5974 8.13642 22.5195 8.01949 22.4416 7.94153L12.1948 1.4324C12.0779 1.35445 11.9221 1.35445 11.8442 1.4324L1.55844 7.94153C1.44156 8.01949 1.4026 8.13642 1.4026 8.25335V21.8563C1.4026 22.285 1.75325 22.6358 2.18182 22.6358H7.48052C7.90909 22.6358 8.25974 22.285 8.25974 21.8563V17.5688C8.22078 16.3995 9.19481 15.4251 10.3636 15.4251Z"
                     />
                   </svg>
                 </div>
                 <div className="w-full">
                   <h4 className="text-dark mb-1 text-xl font-bold">Our Location</h4>
                   <p className="text-body-color text-base">
                     5th floor, Basappa Complex,
                     <p> Lavelle Road,
                     Bengaluru</p>
                   </p>
                 </div>
               </div>
              
               <div className="mb-8 flex w-full max-w-[370px]">
                 <div
                   className="bg-primary text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]"
                 >
                   <svg
                     width="28"
                     height="19"
                     viewBox="0 0 28 19"
                     className="fill-current"
                   >
                     <path
                       d="M25.3636 0H2.63636C1.18182 0 0 1.16785 0 2.6052V16.3948C0 17.8322 1.18182 19 2.63636 19H25.3636C26.8182 19 28 17.8322 28 16.3948V2.6052C28 1.16785 26.8182 0 25.3636 0ZM25.3636 1.5721C25.5909 1.5721 25.7727 1.61702 25.9545 1.75177L14.6364 8.53428C14.2273 8.75886 13.7727 8.75886 13.3636 8.53428L2.04545 1.75177C2.22727 1.66194 2.40909 1.5721 2.63636 1.5721H25.3636ZM25.3636 17.383H2.63636C2.09091 17.383 1.59091 16.9338 1.59091 16.3499V3.32388L12.5 9.8818C12.9545 10.1513 13.4545 10.2861 13.9545 10.2861C14.4545 10.2861 14.9545 10.1513 15.4091 9.8818L26.3182 3.32388V16.3499C26.4091 16.9338 25.9091 17.383 25.3636 17.383Z"
                     />
                   </svg>
                 </div>
                 <div className="w-full">
                   <h4 className="text-dark mb-1 text-xl font-bold">Email Address</h4>
                   <p className="text-body-color text-base">murali@nammacycle.in</p>
                 </div>
               </div>
             </div>
           </div>
           <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
             <div className="relative rounded-lg bg-white p-8 shadow-lg sm:p-12">
             <section>
                <div className="relative items-center w-full px-5  mx-auto md:px-12 lg:px-16 max-w-7xl">
                  <div className="w-full mx-auto text-left">
                    <div className="relative flex-col items-center m-auto align-middle">
                      <div className="items-center gap-12 text-left lg:gap-24 lg:inline-flex">
                       
                        <div className="flex flex-col mt-6 lg:mt-0">
                          <div className="max-w-xl">
                            <div>
              
                              <p className="text-3xl tracking-tight text-black ">
                               Become a Sponsor or a Partner
                              </p>
                              <p>As a sponsor, you will have the opportunity to make a meaningful contribution to our cause and have a positive impact on the community. We are grateful for any support that we receive and look forward to working with you to promote active mobility and sustainable transportation.</p>
                            </div>
                          </div>
                          <div className="mx-auto mt-6 lg:max-w-7xl">
                            <ul role="list" className="grid grid-cols-2 gap-4 list-none lg:grid-cols-1 lg:gap-3">
                              <li>
                                <div>
                                  <p className="mt-5 text-lg font-medium leading-6 text-black">
                                  Sponsor Legal Team:
                                  </p>
                                </div>
                                <div className="mt-2 text-base text-gray-500">
                                 Legal team plays a key role in ensuring that our organization complies with all legal and regulatory requirements. By sponsoring our legal team, you can help us continue to provide legal assistance and guidance to our organization and the community we serve.
                                </div>
                              </li>
                              <li>
                                <div>
                                  <p className="mt-5 text-lg font-medium leading-6 text-black">
                                  Sponsor Campaign Funding:
                                  </p>
                                </div>
                                <div className="mt-2 text-base text-gray-500">
                                Our campaigns aim to create awareness about the benefits of active mobility and sustainable transportation. By sponsoring our campaigns, you can help us reach a wider audience and make a greater impact.                                </div>
                              </li>
                              <li>
                                <div>
                                  <p className="mt-5 text-lg font-medium leading-6 text-black">
                                  Sponsor Research Team:                                  </p>
                                </div>
                                <div className="mt-2 text-base text-gray-500">
                                Our research team is responsible for conducting studies and surveys to gather data on cycling and sustainable transportation. By sponsoring our research team, you can help us continue to gather valuable insights and data that inform our initiatives and policies.                                </div>
                              </li>
                              <li>
                                <div>
                                  <p className="mt-5 text-lg font-medium leading-6 text-black">
                                  Sponsor Outreach Team:                                  </p>
                                </div>
                                <div className="mt-2 text-base text-gray-500">
                                Our outreach team is responsible for engaging with the community and raising awareness about the benefits of active mobility. By sponsoring our outreach team, you can help us continue to organize events, workshops, and other outreach programs that promote cycling and sustainable transportation.                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div className="py-12 mx-auto lg:py-16">
                            <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-6 lg:mt-8">
                               
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>            
               <div>
                 <span className="absolute -top-10 -right-9 z-[-1]">
                   <svg
                     width="100"
                     height="100"
                     viewBox="0 0 100 100"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                   >
                     <path
                       fill-rule="evenodd"
                       clip-rule="evenodd"
                       d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                       fill="#3056D3"
                     />
                   </svg>
                 </span>
                 <span className="absolute -right-10 top-[90px] z-[-1]">
                   <svg
                     width="34"
                     height="134"
                     viewBox="0 0 34 134"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                   >
                     <circle
                       cx="31.9993"
                       cy="132"
                       r="1.66667"
                       transform="rotate(180 31.9993 132)"
                       fill="#13C296"
                     />
                     <circle
                       cx="31.9993"
                       cy="117.333"
                       r="1.66667"
                       transform="rotate(180 31.9993 117.333)"
                       fill="#13C296"
                     />
                     <circle
                       cx="31.9993"
                       cy="102.667"
                       r="1.66667"
                       transform="rotate(180 31.9993 102.667)"
                       fill="#13C296"
                     />
                     <circle
                       cx="31.9993"
                       cy="88"
                       r="1.66667"
                       transform="rotate(180 31.9993 88)"
                       fill="#13C296"
                     />
                     <circle
                       cx="31.9993"
                       cy="73.3333"
                       r="1.66667"
                       transform="rotate(180 31.9993 73.3333)"
                       fill="#13C296"
                     />
                     <circle
                       cx="31.9993"
                       cy="45"
                       r="1.66667"
                       transform="rotate(180 31.9993 45)"
                       fill="#13C296"
                     />
                     <circle
                       cx="31.9993"
                       cy="16"
                       r="1.66667"
                       transform="rotate(180 31.9993 16)"
                       fill="#13C296"
                     />
                     <circle
                       cx="31.9993"
                       cy="59"
                       r="1.66667"
                       transform="rotate(180 31.9993 59)"
                       fill="#13C296"
                     />
                     <circle
                       cx="31.9993"
                       cy="30.6666"
                       r="1.66667"
                       transform="rotate(180 31.9993 30.6666)"
                       fill="#13C296"
                     />
                     <circle
                       cx="31.9993"
                       cy="1.66665"
                       r="1.66667"
                       transform="rotate(180 31.9993 1.66665)"
                       fill="#13C296"
                     />
                     <circle
                       cx="17.3333"
                       cy="132"
                       r="1.66667"
                       transform="rotate(180 17.3333 132)"
                       fill="#13C296"
                     />
                     <circle
                       cx="17.3333"
                       cy="117.333"
                       r="1.66667"
                       transform="rotate(180 17.3333 117.333)"
                       fill="#13C296"
                     />
                     <circle
                       cx="17.3333"
                       cy="102.667"
                       r="1.66667"
                       transform="rotate(180 17.3333 102.667)"
                       fill="#13C296"
                     />
                     <circle
                       cx="17.3333"
                       cy="88"
                       r="1.66667"
                       transform="rotate(180 17.3333 88)"
                       fill="#13C296"
                     />
                     <circle
                       cx="17.3333"
                       cy="73.3333"
                       r="1.66667"
                       transform="rotate(180 17.3333 73.3333)"
                       fill="#13C296"
                     />
                     <circle
                       cx="17.3333"
                       cy="45"
                       r="1.66667"
                       transform="rotate(180 17.3333 45)"
                       fill="#13C296"
                     />
                     <circle
                       cx="17.3333"
                       cy="16"
                       r="1.66667"
                       transform="rotate(180 17.3333 16)"
                       fill="#13C296"
                     />
                     <circle
                       cx="17.3333"
                       cy="59"
                       r="1.66667"
                       transform="rotate(180 17.3333 59)"
                       fill="#13C296"
                     />
                     <circle
                       cx="17.3333"
                       cy="30.6666"
                       r="1.66667"
                       transform="rotate(180 17.3333 30.6666)"
                       fill="#13C296"
                     />
                     <circle
                       cx="17.3333"
                       cy="1.66665"
                       r="1.66667"
                       transform="rotate(180 17.3333 1.66665)"
                       fill="#13C296"
                     />
                     <circle
                       cx="2.66536"
                       cy="132"
                       r="1.66667"
                       transform="rotate(180 2.66536 132)"
                       fill="#13C296"
                     />
                     <circle
                       cx="2.66536"
                       cy="117.333"
                       r="1.66667"
                       transform="rotate(180 2.66536 117.333)"
                       fill="#13C296"
                     />
                     <circle
                       cx="2.66536"
                       cy="102.667"
                       r="1.66667"
                       transform="rotate(180 2.66536 102.667)"
                       fill="#13C296"
                     />
                     <circle
                       cx="2.66536"
                       cy="88"
                       r="1.66667"
                       transform="rotate(180 2.66536 88)"
                       fill="#13C296"
                     />
                     <circle
                       cx="2.66536"
                       cy="73.3333"
                       r="1.66667"
                       transform="rotate(180 2.66536 73.3333)"
                       fill="#13C296"
                     />
                     <circle
                       cx="2.66536"
                       cy="45"
                       r="1.66667"
                       transform="rotate(180 2.66536 45)"
                       fill="#13C296"
                     />
                     <circle
                       cx="2.66536"
                       cy="16"
                       r="1.66667"
                       transform="rotate(180 2.66536 16)"
                       fill="#13C296"
                     />
                     <circle
                       cx="2.66536"
                       cy="59"
                       r="1.66667"
                       transform="rotate(180 2.66536 59)"
                       fill="#13C296"
                     />
                     <circle
                       cx="2.66536"
                       cy="30.6666"
                       r="1.66667"
                       transform="rotate(180 2.66536 30.6666)"
                       fill="#13C296"
                     />
                     <circle
                       cx="2.66536"
                       cy="1.66665"
                       r="1.66667"
                       transform="rotate(180 2.66536 1.66665)"
                       fill="#13C296"
                     />
                   </svg>
                 </span>
                 <span className="absolute -left-7 -bottom-7 z-[-1]">
                   <svg
                     width="107"
                     height="134"
                     viewBox="0 0 107 134"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                   >
                     <circle
                       cx="104.999"
                       cy="132"
                       r="1.66667"
                       transform="rotate(180 104.999 132)"
                       fill="#13C296"
                     />
                     <circle
                       cx="104.999"
                       cy="117.333"
                       r="1.66667"
                       transform="rotate(180 104.999 117.333)"
                       fill="#13C296"
                     />
                     <circle
                       cx="104.999"
                       cy="102.667"
                       r="1.66667"
                       transform="rotate(180 104.999 102.667)"
                       fill="#13C296"
                     />
                     <circle
                       cx="104.999"
                       cy="88"
                       r="1.66667"
                       transform="rotate(180 104.999 88)"
                       fill="#13C296"
                     />
                     <circle
                       cx="104.999"
                       cy="73.3333"
                       r="1.66667"
                       transform="rotate(180 104.999 73.3333)"
                       fill="#13C296"
                     />
                     <circle
                       cx="104.999"
                       cy="45"
                       r="1.66667"
                       transform="rotate(180 104.999 45)"
                       fill="#13C296"
                     />
                     <circle
                       cx="104.999"
                       cy="16"
                       r="1.66667"
                       transform="rotate(180 104.999 16)"
                       fill="#13C296"
                     />
                     <circle
                       cx="104.999"
                       cy="59"
                       r="1.66667"
                       transform="rotate(180 104.999 59)"
                       fill="#13C296"
                     />
                     <circle
                       cx="104.999"
                       cy="30.6666"
                       r="1.66667"
                       transform="rotate(180 104.999 30.6666)"
                       fill="#13C296"
                     />
                     <circle
                       cx="104.999"
                       cy="1.66665"
                       r="1.66667"
                       transform="rotate(180 104.999 1.66665)"
                       fill="#13C296"
                     />
                     <circle
                       cx="90.3333"
                       cy="132"
                       r="1.66667"
                       transform="rotate(180 90.3333 132)"
                       fill="#13C296"
                     />
                     <circle
                       cx="90.3333"
                       cy="117.333"
                       r="1.66667"
                       transform="rotate(180 90.3333 117.333)"
                       fill="#13C296"
                     />
                     <circle
                       cx="90.3333"
                       cy="102.667"
                       r="1.66667"
                       transform="rotate(180 90.3333 102.667)"
                       fill="#13C296"
                     />
                     <circle
                       cx="90.3333"
                       cy="88"
                       r="1.66667"
                       transform="rotate(180 90.3333 88)"
                       fill="#13C296"
                     />
                     <circle
                       cx="90.3333"
                       cy="73.3333"
                       r="1.66667"
                       transform="rotate(180 90.3333 73.3333)"
                       fill="#13C296"
                     />
                     <circle
                       cx="90.3333"
                       cy="45"
                       r="1.66667"
                       transform="rotate(180 90.3333 45)"
                       fill="#13C296"
                     />
                     <circle
                       cx="90.3333"
                       cy="16"
                       r="1.66667"
                       transform="rotate(180 90.3333 16)"
                       fill="#13C296"
                     />
                     <circle
                       cx="90.3333"
                       cy="59"
                       r="1.66667"
                       transform="rotate(180 90.3333 59)"
                       fill="#13C296"
                     />
                     <circle
                       cx="90.3333"
                       cy="30.6666"
                       r="1.66667"
                       transform="rotate(180 90.3333 30.6666)"
                       fill="#13C296"
                     />
                     <circle
                       cx="90.3333"
                       cy="1.66665"
                       r="1.66667"
                       transform="rotate(180 90.3333 1.66665)"
                       fill="#13C296"
                     />
                     <circle
                       cx="75.6654"
                       cy="132"
                       r="1.66667"
                       transform="rotate(180 75.6654 132)"
                       fill="#13C296"
                     />
                     <circle
                       cx="31.9993"
                       cy="132"
                       r="1.66667"
                       transform="rotate(180 31.9993 132)"
                       fill="#13C296"
                     />
                     <circle
                       cx="75.6654"
                       cy="117.333"
                       r="1.66667"
                       transform="rotate(180 75.6654 117.333)"
                       fill="#13C296"
                     />
                     <circle
                       cx="31.9993"
                       cy="117.333"
                       r="1.66667"
                       transform="rotate(180 31.9993 117.333)"
                       fill="#13C296"
                     />
                     <circle
                       cx="75.6654"
                       cy="102.667"
                       r="1.66667"
                       transform="rotate(180 75.6654 102.667)"
                       fill="#13C296"
                     />
                     <circle
                       cx="31.9993"
                       cy="102.667"
                       r="1.66667"
                       transform="rotate(180 31.9993 102.667)"
                       fill="#13C296"
                     />
                     <circle
                       cx="75.6654"
                       cy="88"
                       r="1.66667"
                       transform="rotate(180 75.6654 88)"
                       fill="#13C296"
                     />
                     <circle
                       cx="31.9993"
                       cy="88"
                       r="1.66667"
                       transform="rotate(180 31.9993 88)"
                       fill="#13C296"
                     />
                     <circle
                       cx="75.6654"
                       cy="73.3333"
                       r="1.66667"
                       transform="rotate(180 75.6654 73.3333)"
                       fill="#13C296"
                     />
                     <circle
                       cx="31.9993"
                       cy="73.3333"
                       r="1.66667"
                       transform="rotate(180 31.9993 73.3333)"
                       fill="#13C296"
                     />
                     <circle
                       cx="75.6654"
                       cy="45"
                       r="1.66667"
                       transform="rotate(180 75.6654 45)"
                       fill="#13C296"
                     />
                     <circle
                       cx="31.9993"
                       cy="45"
                       r="1.66667"
                       transform="rotate(180 31.9993 45)"
                       fill="#13C296"
                     />
                     <circle
                       cx="75.6654"
                       cy="16"
                       r="1.66667"
                       transform="rotate(180 75.6654 16)"
                       fill="#13C296"
                     />
                     <circle
                       cx="31.9993"
                       cy="16"
                       r="1.66667"
                       transform="rotate(180 31.9993 16)"
                       fill="#13C296"
                     />
                     <circle
                       cx="75.6654"
                       cy="59"
                       r="1.66667"
                       transform="rotate(180 75.6654 59)"
                       fill="#13C296"
                     />
                     <circle
                       cx="31.9993"
                       cy="59"
                       r="1.66667"
                       transform="rotate(180 31.9993 59)"
                       fill="#13C296"
                     />
                     <circle
                       cx="75.6654"
                       cy="30.6666"
                       r="1.66667"
                       transform="rotate(180 75.6654 30.6666)"
                       fill="#13C296"
                     />
                     <circle
                       cx="31.9993"
                       cy="30.6666"
                       r="1.66667"
                       transform="rotate(180 31.9993 30.6666)"
                       fill="#13C296"
                     />
                     <circle
                       cx="75.6654"
                       cy="1.66665"
                       r="1.66667"
                       transform="rotate(180 75.6654 1.66665)"
                       fill="#13C296"
                     />
                     <circle
                       cx="31.9993"
                       cy="1.66665"
                       r="1.66667"
                       transform="rotate(180 31.9993 1.66665)"
                       fill="#13C296"
                     />
                     <circle
                       cx="60.9993"
                       cy="132"
                       r="1.66667"
                       transform="rotate(180 60.9993 132)"
                       fill="#13C296"
                     />
                     <circle
                       cx="17.3333"
                       cy="132"
                       r="1.66667"
                       transform="rotate(180 17.3333 132)"
                       fill="#13C296"
                     />
                     <circle
                       cx="60.9993"
                       cy="117.333"
                       r="1.66667"
                       transform="rotate(180 60.9993 117.333)"
                       fill="#13C296"
                     />
                     <circle
                       cx="17.3333"
                       cy="117.333"
                       r="1.66667"
                       transform="rotate(180 17.3333 117.333)"
                       fill="#13C296"
                     />
                     <circle
                       cx="60.9993"
                       cy="102.667"
                       r="1.66667"
                       transform="rotate(180 60.9993 102.667)"
                       fill="#13C296"
                     />
                     <circle
                       cx="17.3333"
                       cy="102.667"
                       r="1.66667"
                       transform="rotate(180 17.3333 102.667)"
                       fill="#13C296"
                     />
                     <circle
                       cx="60.9993"
                       cy="88"
                       r="1.66667"
                       transform="rotate(180 60.9993 88)"
                       fill="#13C296"
                     />
                     <circle
                       cx="17.3333"
                       cy="88"
                       r="1.66667"
                       transform="rotate(180 17.3333 88)"
                       fill="#13C296"
                     />
                     <circle
                       cx="60.9993"
                       cy="73.3333"
                       r="1.66667"
                       transform="rotate(180 60.9993 73.3333)"
                       fill="#13C296"
                     />
                     <circle
                       cx="17.3333"
                       cy="73.3333"
                       r="1.66667"
                       transform="rotate(180 17.3333 73.3333)"
                       fill="#13C296"
                     />
                     <circle
                       cx="60.9993"
                       cy="45"
                       r="1.66667"
                       transform="rotate(180 60.9993 45)"
                       fill="#13C296"
                     />
                     <circle
                       cx="17.3333"
                       cy="45"
                       r="1.66667"
                       transform="rotate(180 17.3333 45)"
                       fill="#13C296"
                     />
                     <circle
                       cx="60.9993"
                       cy="16"
                       r="1.66667"
                       transform="rotate(180 60.9993 16)"
                       fill="#13C296"
                     />
                     <circle
                       cx="17.3333"
                       cy="16"
                       r="1.66667"
                       transform="rotate(180 17.3333 16)"
                       fill="#13C296"
                     />
                     <circle
                       cx="60.9993"
                       cy="59"
                       r="1.66667"
                       transform="rotate(180 60.9993 59)"
                       fill="#13C296"
                     />
                     <circle
                       cx="17.3333"
                       cy="59"
                       r="1.66667"
                       transform="rotate(180 17.3333 59)"
                       fill="#13C296"
                     />
                     <circle
                       cx="60.9993"
                       cy="30.6666"
                       r="1.66667"
                       transform="rotate(180 60.9993 30.6666)"
                       fill="#13C296"
                     />
                     <circle
                       cx="17.3333"
                       cy="30.6666"
                       r="1.66667"
                       transform="rotate(180 17.3333 30.6666)"
                       fill="#13C296"
                     />
                     <circle
                       cx="60.9993"
                       cy="1.66665"
                       r="1.66667"
                       transform="rotate(180 60.9993 1.66665)"
                       fill="#13C296"
                     />
                     <circle
                       cx="17.3333"
                       cy="1.66665"
                       r="1.66667"
                       transform="rotate(180 17.3333 1.66665)"
                       fill="#13C296"
                     />
                     <circle
                       cx="46.3333"
                       cy="132"
                       r="1.66667"
                       transform="rotate(180 46.3333 132)"
                       fill="#13C296"
                     />
                     <circle
                       cx="2.66536"
                       cy="132"
                       r="1.66667"
                       transform="rotate(180 2.66536 132)"
                       fill="#13C296"
                     />
                     <circle
                       cx="46.3333"
                       cy="117.333"
                       r="1.66667"
                       transform="rotate(180 46.3333 117.333)"
                       fill="#13C296"
                     />
                     <circle
                       cx="2.66536"
                       cy="117.333"
                       r="1.66667"
                       transform="rotate(180 2.66536 117.333)"
                       fill="#13C296"
                     />
                     <circle
                       cx="46.3333"
                       cy="102.667"
                       r="1.66667"
                       transform="rotate(180 46.3333 102.667)"
                       fill="#13C296"
                     />
                     <circle
                       cx="2.66536"
                       cy="102.667"
                       r="1.66667"
                       transform="rotate(180 2.66536 102.667)"
                       fill="#13C296"
                     />
                     <circle
                       cx="46.3333"
                       cy="88"
                       r="1.66667"
                       transform="rotate(180 46.3333 88)"
                       fill="#13C296"
                     />
                     <circle
                       cx="2.66536"
                       cy="88"
                       r="1.66667"
                       transform="rotate(180 2.66536 88)"
                       fill="#13C296"
                     />
                     <circle
                       cx="46.3333"
                       cy="73.3333"
                       r="1.66667"
                       transform="rotate(180 46.3333 73.3333)"
                       fill="#13C296"
                     />
                     <circle
                       cx="2.66536"
                       cy="73.3333"
                       r="1.66667"
                       transform="rotate(180 2.66536 73.3333)"
                       fill="#13C296"
                     />
                     <circle
                       cx="46.3333"
                       cy="45"
                       r="1.66667"
                       transform="rotate(180 46.3333 45)"
                       fill="#13C296"
                     />
                     <circle
                       cx="2.66536"
                       cy="45"
                       r="1.66667"
                       transform="rotate(180 2.66536 45)"
                       fill="#13C296"
                     />
                     <circle
                       cx="46.3333"
                       cy="16"
                       r="1.66667"
                       transform="rotate(180 46.3333 16)"
                       fill="#13C296"
                     />
                     <circle
                       cx="2.66536"
                       cy="16"
                       r="1.66667"
                       transform="rotate(180 2.66536 16)"
                       fill="#13C296"
                     />
                     <circle
                       cx="46.3333"
                       cy="59"
                       r="1.66667"
                       transform="rotate(180 46.3333 59)"
                       fill="#13C296"
                     />
                     <circle
                       cx="2.66536"
                       cy="59"
                       r="1.66667"
                       transform="rotate(180 2.66536 59)"
                       fill="#13C296"
                     />
                     <circle
                       cx="46.3333"
                       cy="30.6666"
                       r="1.66667"
                       transform="rotate(180 46.3333 30.6666)"
                       fill="#13C296"
                     />
                     <circle
                       cx="2.66536"
                       cy="30.6666"
                       r="1.66667"
                       transform="rotate(180 2.66536 30.6666)"
                       fill="#13C296"
                     />
                     <circle
                       cx="46.3333"
                       cy="1.66665"
                       r="1.66667"
                       transform="rotate(180 46.3333 1.66665)"
                       fill="#13C296"
                     />
                     <circle
                       cx="2.66536"
                       cy="1.66665"
                       r="1.66667"
                       transform="rotate(180 2.66536 1.66665)"
                       fill="#13C296"
                     />
                   </svg>
                 </span>
               </div>
             </div>
           </div>
         </div>
       </div>
     </section> 
     
    
     </div> 
    
  );
}
