import React from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export default function Herosection() {
  return (
    <div>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-black pb-4">
              About Us
            </h1>
            <p className="font-normal text-base leading-6 text-black ">
              Namma Nimma Cycle Foundation is a Sec 8 non-profit company based
              in Bengaluru, India, that aims to promote active mobility,
              specifically cycling, as a sustainable and healthy mode of
              transportation. The organization has been working towards its
              mission of creating a cycling culture in Bengaluru by organizing
              cycling events, promoting cycling infrastructure, and advocating
              for cycling-friendly policies.
            </p>
            <p>
              Murali HR is the CEO of Namma Nimma Cycle Foundation. has been
              actively involved in several initiatives to promote cycling and
              active mobility. He has been a vocal supporter of cycle-friendly
              policies and infrastructure development. Murali HR is a passionate
              advocate for cycling and active mobility, and has been
              instrumental in driving positive change in India's transportation
              landscape.
            </p>
          </div>
          <div className="w-full lg:w-8/12">
            <img
              className="w-full h-full"
              src="https://i.imgur.com/MrArX5I.jpg"
              alt="A group of People"
            />
          </div>
        </div>

        <div className="block rounded-lg shadow-lg bg-white">
          <div className="flex flex-wrap items-center">
            <div className="block w-full lg:flex grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-4/12">
              <img
                src="https://i.imgur.com/kBFiz7j.jpg"
                alt="Trendy Pants and Shoes"
                className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
              />
            </div>
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
              <div className="px-6 py-12 md:px-12">
                <h2 className="text-3xl font-bold mb-4 text-black display-5">
                  Origin of  ABC bill                 </h2>

                <p className="font-normal text-base leading-6 text-black ">
                  Anant Kumar, a Member of Parliament from Bangalore & Vijay
                  Kumar Former MLA, Jayanagar have always been advocating for
                  active transportation. They believed that the city needed to
                  provide more support for cycling and walking to promote a
                  healthier lifestyle and reduce traffic congestion. The idea
                  for the Active Mobility Bill came during a bike ride on a
                  Cycle Day. As we pedaled through the traffic free streets we
                  discussed how we need to make more investment in enabling
                  active mobility. We felt cycling needed a separate department
                  in every city to address the needs of the cyclists and
                  pedestrians. 
                </p>
                <h1>Continous discussions with Sri Vijay Kumar from 2017-2018</h1>
                <p className="font-normal text-base leading-6 text-black ">
                We discussed with Sri Vijay Kumar MLA about the
                need for a legislative act and a executive body for Active Mobility continously and his concern was about the following </p>
                  
                  <h3 id="inputs-from-vijay-kumar">Inputs from Vijay Kumar</h3>
                      <ol>
                      <li>In India due to the Bad Culture built from the younger school/college days - people will not be able to shift to cycling - so massive awareness about the benefits of active mobility is essential for which the state has to use its power and channels.</li>
                      <li>The Governance structure is non existing and the model of DULT designing and BBMP implementing will not work - planning and designing and execution should be integrated and the entity needs to be lead by a person who is Commited to active mobility.</li>
                      <li>Separate funding and ministry for active mobility at the center and the state for activating on a mission mode like swach bharath with key performance indicators.</li>
                      <li>Commitment from the government at the highest level for active mobility.</li>
                      </ol> 
                  <p className="font-normal text-2xl  text-blue-600 "> "Murali I shall take
                  you to the Prime Minister. This is a very important bill to
                  ensure our kids have access to clean and safe environment.
                  Previous governments have forgotten to focus on Active Mobility  and
                  have catered to the "car culture". I will help you make this change by taking you to the prime minister"
                </p>
                <p>
                But Sri Vijay Kumar who discussed  the need for a bill and a wonderful support person left us before
                making this happen on 4 May 2018 and soon after 12 Nov 2018 Sri Anant Kumar also expired. As we approach the election time we felt we should publish his work and make everyone reflect 
                the need for leadership for enacting laws to protect the vulnerable.

                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">
              Our Team
            </h1>
          </div>

          <div className="w-full lg:w-8/12 lg:pt-8">
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
             
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://i.imgur.com/fjBWsMG.png"
                  alt="Olivia featured Image"
                />
                <img
                  className="md:hidden block"
                  src="https://i.imgur.com/fjBWsMG.png"
                  alt="Olivia featured Image"
                />
                <p className="font-medium text-xl leading-5 text-black mt-4">
                  Charan CS
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://i.imgur.com/eN2vDlK.jpg"
                  alt="Liam featued Image"
                />
                <img
                  className="md:hidden block"
                  src="https://i.ibb.co/C5MMBcs/Rectangle-120.png"
                  alt="Liam featued Image"
                />
                <p className="font-medium text-xl leading-5 text-black mt-4">
                  Yateesh Kumar 
                </p>
              </div>
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
