import React from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import Vimeo from "@u-wave/react-vimeo";

export function TEeconomyActions() {
  return (
    <div>
      <div className="mt-18 mx-auto w-2/3">
        <div className="flex items-center mb-4">
          <span className="inline-flex bg-green-lighter rounded-full mr-4 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
              />
            </svg>
          </span>{" "}
          <span className="text-grey-darker">
          Invest in research and development of new technologies and innovative products that promote active transportation,	
          </span>
        </div>
        <div className="flex items-center mb-4">
          <span className="inline-flex bg-green-lighter rounded-full mr-4 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </span>{" "}
          <span className="text-grey-darker">
            {" "}
            Provide grants and subsidies for businesses to develop and implement active transportation plans that encourage employees to walk, cycle, or use other active transportation modes for commuting and business travel	
          </span>
        </div>
        <div className="flex items-center mb-4">
          <span className="inline-flex bg-green-lighter rounded-full mr-4 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
              />
            </svg>
          </span>{" "}
          <span className="text-grey-darker">
            {" "}
            Create and promote active transportation-related events and festivals	
          </span>
        </div>
        <div className="flex items-center mb-4">
          <span className="inline-flex bg-green-lighter rounded-full mr-4 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
              />
            </svg>
          </span>{" "}
          <span className="text-grey-darker">
            {" "}
            Develop and implement smart city strategies that use data and
            technology to optimize active transportation infrastructure
          </span>
        </div>
        <div className="flex items-center mb-4">
          <span className="inline-flex bg-green-lighter rounded-full mr-4 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
              />
            </svg>
          </span>{" "}
          <span className="text-grey-darker">
            {" "}
            Provide financial incentives and tax breaks for companies that invest in active transportation infrastructure, products, and services.

          </span>
        </div>

        <div className="flex items-center mb-4">
          <span className="inline-flex bg-green-lighter rounded-full mr-4 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
              />
            </svg>
          </span>{" "}
          <span className="text-grey-darker">
          Promote the development of local manufacturing and supply chains for active transportation products, such as bicycles, components, and accessories, to create new job opportunities and support local economic development.
          </span>
        </div>
      </div>
    </div>
  );
}
export function TEeconomyTranformation() {
  return (
    <div>
      <div className="mt-8 mx-auto w-2/3">
        <div className="flex items-center mb-4">
          <span className="inline-flex bg-green-lighter rounded-full mr-4 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>{" "}
          <span className="text-grey-darker">
            Bolster Indias leadership in Active Mobility Manufacturing by
            Funding for AM startups and subsidy for businesses to scale active
            mobility.
          </span>
        </div>
        <div className="flex items-center mb-4">
          <span className="inline-flex bg-green-lighter rounded-full mr-4 p-1">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </span>{" "}
          <span className="text-grey-darker">
            {" "}
            High quality standards for products and services delivering active mobility.
          </span>
        </div>
        <div className="flex items-center mb-4">
          <span className="inline-flex bg-green-lighter rounded-full mr-4 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
              />
            </svg>
          </span>{" "}
          <span className="text-grey-darker">
            {" "}
            Create new differentiated Product and Service Offerings in active
            mobility.
          </span>
        </div>

        <div className="flex items-center mb-4">
          <span className="inline-flex bg-green-lighter rounded-full mr-4 p-1">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5"
              />
            </svg>
          </span>{" "}
          <span className="text-grey-darker">
            {" "}
            Digital-Outcome-Driven Metrics for Manufacturing in Active Mobility.
          </span>
        </div>
        <div className="flex items-center mb-4">
          <span className="inline-flex bg-green-lighter rounded-full mr-4 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
              />
            </svg>
          </span>{" "}
          <span className="text-grey-darker">
            {" "}
            Enable Innovation and Cost Savings in Active Mobility.
          </span>
        </div>
        <div className="flex items-center mb-4">
          <span className="inline-flex bg-green-lighter rounded-full mr-4 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </span>{" "}
          <span className="text-grey-darker">
            {" "}
            Create and Grow in new markets in active mobility like bicycle
            tourism and active travel{" "}
          </span>
        </div>

        <div className="flex items-center mb-4">
          <span className="inline-flex bg-green-lighter rounded-full mr-4 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </span>{" "}
          <span className="text-grey-darker">
            Target unmet market demand like in cargo & logistics{" "}
          </span>
        </div>

        <div className="flex items-center mb-4">
          <span className="inline-flex bg-green-lighter rounded-full mr-4 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.412 15.655L9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457L3 3m5.457 5.457l7.086 7.086m0 0L21 21"
              />
            </svg>
          </span>{" "}
          <span className="text-grey-darker">
            Strengthen domestic AM manufacturing, design and research, fortify
            the economy and national security, and reinforce India's supply
            chains for active mobility
          </span>
        </div>
      </div>
    </div>
  );
}

export function TEconomySubPillars() {
  return (
    <div>
      <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-blue-700 uppercase last:mr-0 mr-1">
        Technology{" "}
      </span>
      <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-blue-700 uppercase last:mr-0 mr-1">
        Knowledge Building{" "}
      </span>
      <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-blue-700 uppercase last:mr-0 mr-1">
        Tourism & Travel:
      </span>
      <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-blue-700 uppercase last:mr-0 mr-1">
        AM startups
      </span>
      <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-blue-700 uppercase last:mr-0 mr-1">
        Industry
      </span>

      <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-blue-700 uppercase last:mr-0 mr-1">
        Cross-border networks
      </span>

      <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-blue-700 uppercase last:mr-0 mr-1">
        Quality Standards
      </span>

      <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-blue-700 uppercase last:mr-0 mr-1">
        Building Innovation, Research Capacity and Capability
      </span>
    </div>
  );
}

export default function TfeatureEconomy2() {
  const myStyle1 = {};

  return (
    <div>
      <section className="font-sans antialiased w-full bg-blue-300 py-8">
        <div className="container mx-auto">
          <div className="py-8 w-full mx-auto">
            <h1 className="text-indigo-darkest text-4xl text-center font-normal">
            Active Mobility  Economy.
            </h1>
            <h2 className="text-white text-4xl text-center font-normal">
              more inclusive, accessible, and equitable transportation system
              for all.
            </h2>
            <TEconomySubPillars></TEconomySubPillars>
            <div className="my-8 flex flex-wrap md:items-center w-full">
              <div className="bg-white shadow rounded w-full md:w-1/2 z-10">
                <div className="py-8 text-center text-green font-semibold uppercase">
                  Transformation outcomes
                </div>
                <hr className="py-0 my-0 border border-grey-lighter"></hr>
                <div className="py-8">
                  <div className="bg-green-300 py-5 flex px-16 items-center justify-center">
                    <div className="relative bg-white  p-8 border border-indigo-500 rounded-lg">
                      <div className="text-gray-800 text-sm">
                        <div className="absolute bottom-[175px] right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-20 h-20 bg-white border-r border-t border-indigo-500"></div>
                        <div className="mt-1">
                          <TEeconomyTranformation></TEeconomyTranformation>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-yellow-300	px-16 rounded shadow w-5/6 md:w-1/2 z-0 mx-auto -mt-1 md:-mt-0 md:-ml-1">
                <div className="py-8 text-center text-black font-semibold uppercase">
                  Aspirational Action{" "}
                </div>
                <hr className="py-0 my-0 border border-black	"></hr>
                <div className="py-8">
                  <div className="bg-green-400 py-5 flex items-center justify-center">
                    <div className="relative bg-white  p-8 border border-indigo-500 rounded-lg">
                      <div className="text-gray-800 text-sm">
                        <div className="absolute left-0  transform -translate-x-1/2 translate-y-1/2 rotate-45 w-20 h-20 bg-white border-l border-b border-indigo-500"></div>
                        <TEeconomyActions></TEeconomyActions>
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
