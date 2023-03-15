import React from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export default function ImpactFeature2() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="md:mx-auto md:container px-4">
          <div className="pt-10 md:pt-40">
            <div className="container mx-auto">
              <div className="flex flex-wrap items-center pb-12">
                <div className="md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6">
                  <div className="py-2 text-color">
                    <h1
                      role="heading"
                      className="text-2xl dark:text-white  lg:text-6xl md:leading-snug  font-blue-600"
                    >
                      Human Health in India:
                    </h1>
                    <p
                      role="contentinfo"
                      className="text-lg dark:text-white lg:text-xl lg:leading-7 md:leading-10 f-f-r py-4 md:py-8"
                    >
                      The Lancet, physical inactivity contributes to an
                      estimated 3.2 million deaths per year globally. In India,
                      a study published in the Indian Journal of Community
                      Medicine found that physical inactivity is a significant
                      risk factor for chronic diseases such as diabetes and
                      hypertension, which affect approximately 80 million and
                      200 million Indians, respectively.
                    </p>
                    <button className="flex items-center cursor-pointer pb-4 md:pb-0 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">
                      <span
                        aria-label="lets get started"
                        role="button"
                        className="focus outline-none f-f-r text-lg lg:text-2xl font-semibold underline text-indigo-700 dark:text-indigo-400"
                      >
                        Reduce by 10%{" "}
                      </span>
                      <div className="pl-2">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/alternating_description_with_cards-svg1.svg"
                          alt="arrow"
                        ></img>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                  <img
                    className="absolute w-full h-full inset-0 object-cover object-center rounded-md"
                    src="https://images.unsplash.com/photo-1626870882778-81110a7592d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="A girl enjoying in sunlight"
                    role="img"
                  />
                  <div className="relative z-10 bg-white rounded shadow p-6 w-10/12 -mb-20">
                    <div className="flex items-center justify-between w-full sm:w-full mb-8">
                      <div className="flex items-center">
                        <div className="p-4 bg-yellow-200 rounded-md">
                          <img
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/alternating_description_with_cards-svg2.svg"
                            alt="icon"
                          ></img>{" "}
                        </div>
                        <div className="ml-6">
                          <p className="mb-1 leading-5 text-gray-800 font-bold text-2xl">
                            Diabetes affecting 80 million Indians,
                          </p>
                          <p className="text-gray-600 dark:text-gray-200 text-sm tracking-normal font-normal leading-5">
                            Avg Disease rate
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center pl-3 text-green-400">
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
                              d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181"
                            />
                          </svg>

                          <p className="text-green-700 text-xs tracking-wide font-bold leading-normal pl-1">
                            10%
                          </p>
                        </div>
                        <p className="font-normal text-xs text-right leading-4 text-green-700 tracking-normal">
                          Decrease
                        </p>
                      </div>
                    </div>
                    <div className="relative mb-3">
                      <hr className="h-1 rounded-sm bg-gray-200" />
                      <hr className="absolute top-0 h-1 w-7/12 rounded-sm bg-indigo-700" />
                    </div>
                    <h2 className="text-base text-gray-600 dark:text-gray-200 font-normal tracking-normal leading-5">
                      Yearly Goal- 10% reduction
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-32 pt-16">
            <div className="mx-auto">
              <div className="flex flex-wrap flex-row-reverse items-center">
                <div className="md:w-1/2 lg:w-2/3 w-full lg:pl-20 md:pl-10 sm:pl-0 pl-0">
                  <div className="py-2 text-color">
                    <div>
                      <h1
                        role="heading"
                        className="text-2xl dark:text-white  lg:text-6xl md:leading-snug  font-blue-600"
                      >
                        Cardio Vascular Deaths in India
                      </h1>
                    </div>
                    <p
                      role="contentinfo"
                      className="text-lg dark:text-white lg:text-xl leading-7 md:leading-10 f-f-r py-8"
                    >
                      {" "}
                      According to the Global Burden of Disease Study 2019, there were 2.9 million deaths due to cardiovascular diseases in India in 2019.

Ischemic heart disease (IHD) is the leading cause of cardiovascular deaths in India, accounting for 1.7 million deaths in 2019.

Other major cardiovascular diseases in India include stroke, hypertensive heart disease, rheumatic heart disease, and cardiomyopath
                    </p>
                    <button className="flex items-center cursor-pointer pb-4 md:pb-0 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">
                      <span
                        aria-label="lets get started"
                        role="button"
                        className="focus outline-none f-f-r text-lg lg:text-2xl font-semibold underline text-indigo-700 dark:text-indigo-400"
                      >
                        Reduce by 10%{" "}
                      </span>
                      <div className="pl-2">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/alternating_description_with_cards-svg1.svg"
                          alt="arrow"
                        ></img>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                  <img
                    className="absolute w-full h-full inset-0 object-cover object-center rounded-md"
                    src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt="A group of three having a meeting"
                    role="img"
                  />
                  <div class="relative z-10 bg-white rounded shadow p-6 w-10/12 -mb-20">
                    <div class="flex items-center justify-between w-full sm:w-full mb-8"><div class="flex items-center">
                        <div class="p-4 bg-yellow-200 rounded-md"><img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/alternating_description_with_cards-svg2.svg" alt="icon"></img>  </div>
                        <div class="ml-6"><p class="mb-1 leading-5 text-gray-800 font-bold text-2xl">   2.9 million deaths due to cardiovascular diseases in India  .</p><p class="text-gray-600 dark:text-gray-200 text-sm tracking-normal font-normal leading-5">Avg Disease rate</p></div></div><div>
                            <div class="flex items-center pl-3 text-green-400"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181"></path></svg><p class="text-green-700 text-xs tracking-wide font-bold leading-normal pl-1">10%</p></div><p class="font-normal text-xs text-right leading-4 text-green-700 tracking-normal">Decrease</p></div></div><div class="relative mb-3"><hr class="h-1 rounded-sm bg-gray-200"></hr><hr class="absolute top-0 h-1 w-7/12 rounded-sm bg-indigo-700"></hr>
                            </div><h2 class="text-base text-gray-600 dark:text-gray-200 font-normal tracking-normal leading-5">Yearly Goal- 10% reduction</h2></div>
               
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
