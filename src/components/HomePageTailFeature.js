import React from 'react';
import clsx from 'clsx'; 

import styles from './photo.css';
export default function HomepageTailFeature () {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog"></img>  
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transition duration-300 ease-in-out delay-150 transform">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/721x401" alt="blog"></img>  
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div className="flex items-center flex-wrap">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/722x402" alt="blog"></img>  
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div className="flex items-center flex-wrap ">
              <a   href="#"  className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>

              

              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div>


  <section className="container px-5 py-24 mx-auto">
  <div className="flex flex-wrap mx-auto md:flex-nowrap p-12">

    <a href="">
    <div className="p-4 md:w-1/3">
        <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
        <div className="grid">
					<figure className="effect-layla">
						<img src="https://tympanus.net/Development/HoverEffectIdeas/img/6.jpg" alt="img06"/>
						<figcaption>
							<h2>Crazy <span>Layla</span></h2>
							<p>When Layla appears, she brings an eternal summer along.</p>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
					<figure className="effect-layla">
						<img src="https://tympanus.net/Development/HoverEffectIdeas/img/3.jpg" alt="img03"/>
						<figcaption>
							<h2>Crazy <span>Layla</span></h2>
							<p>When Layla appears, she brings an eternal summer along.</p>
							<a href="http://www.google.com">View more</a>
						</figcaption>			
					</figure>
				</div>
        </div>
      </div>
    </a>

    <a href="">
    <div className="p-4 md:w-1/3">
        <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
        <div className="grid">
					<figure className="effect-layla">
						<img src="https://tympanus.net/Development/HoverEffectIdeas/img/6.jpg" alt="img06"/>
						<figcaption>
							<h2>Crazy <span>Layla</span></h2>
							<p>When Layla appears, she brings an eternal summer along.</p>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
					<figure className="effect-layla">
						<img src="https://tympanus.net/Development/HoverEffectIdeas/img/3.jpg" alt="img03"/>
						<figcaption>
							<h2>Crazy <span>Layla</span></h2>
							<p>When Layla appears, she brings an eternal summer along.</p>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
				</div>
        </div>
      </div>
    </a>

    <a href="">
    <div className="p-4 md:w-1/3">
        <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
        <div className="grid">
					<figure className="effect-lily">
						<img src="https://tympanus.net/Development/HoverEffectIdeas/img/12.jpg" alt="img12"/>
						<figcaption>
							<div>
								<h2>Nice <span>Lily</span></h2>
								<p>Lily likes to play with crayons and pencils</p>
							</div>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
          </div>
        </div>
      </div>
    </a>

  </div>
</section>


<section data-section-id="1" data-share="" data-category="headers" data-component-id="44d0b9e2_05_awz" data-path="0">
        <div className="container mx-auto overflow-hidden" data-path="0.0">
          <div className="relative z-20 flex items-center justify-between px-4 py-5 bg-transparent" data-config-id="toggle-mobile" data-config-target=".navbar-menu" data-config-className="hidden" data-path="0.0.0">
            <div className="w-auto" data-path="0.0.0.0">
              <div className="flex flex-wrap items-center" data-path="0.0.0.0.0">
                <div className="w-auto mr-14" data-path="0.0.0.0.0.0">
                  <a href="#" data-path="0.0.0.0.0.0.0">
                    <img src="flaro-assets/logos/flaro-logo-black.svg" alt="" data-config-id="auto-img-1-5" data-path="0.0.0.0.0.0.0.0"></img> 
                  </a>
                </div>
                <div className="w-auto hidden lg:block" data-path="0.0.0.0.0.1">
                  <ul className="flex items-center mr-16" data-path="0.0.0.0.0.1.0">
                    <li className="mr-9 font-medium hover:text-gray-700" data-path="0.0.0.0.0.1.0.0"><a href="#" data-config-id="auto-txt-1-5" data-path="0.0.0.0.0.1.0.0.0">Features</a></li>
                    <li className="mr-9 font-medium hover:text-gray-700" data-path="0.0.0.0.0.1.0.1"><a href="#" data-config-id="auto-txt-2-5" data-path="0.0.0.0.0.1.0.1.0">Solutions</a></li>
                    <li className="mr-9 font-medium hover:text-gray-700" data-path="0.0.0.0.0.1.0.2"><a href="#" data-config-id="auto-txt-3-5" data-path="0.0.0.0.0.1.0.2.0">Resources</a></li>
                    <li className="font-medium hover:text-gray-700" data-path="0.0.0.0.0.1.0.3"><a href="#" data-config-id="auto-txt-4-5" data-path="0.0.0.0.0.1.0.3.0">Pricing</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-auto" data-path="0.0.0.1">
              <div className="flex flex-wrap items-center" data-path="0.0.0.1.0">
                <div className="w-auto hidden lg:block" data-path="0.0.0.1.0.0">
                  <div className="inline-block" data-path="0.0.0.1.0.0.0">
                    <button className="py-2.5 px-4 text-base w-full font-medium border border-gray-400 hover:border-gray-500 rounded-xl focus:ring focus:ring-gray-50 bg-white hover:bg-gray-50 transition ease-in-out duration-200" type="button" data-config-id="auto-txt-5-5" data-path="0.0.0.1.0.0.0.0">Join free for 30 days</button>
                  </div>
                </div>
                <div className="w-auto lg:hidden" data-path="0.0.0.1.0.1">
                  <a href="#" data-path="0.0.0.1.0.1.0">
                    <svg className="navbar-burger text-indigo-600" width="51" height="51" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-1-5" data-path="0.0.0.1.0.1.0.0">
                      <rect width="56" height="56" rx="28" fill="currentColor" data-path="0.0.0.1.0.1.0.0.0"></rect>
                      <path d="M37 32H19M37 24H19" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-path="0.0.0.1.0.1.0.0.1"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50" data-path="0.0.1">
            <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80" data-path="0.0.1.0"></div>
            <nav className="relative z-10 px-9 pt-8 bg-white h-full overflow-y-auto" data-config-id="toggle-mobile-2" data-config-target=".navbar-menu" data-config-className="hidden" data-path="0.0.1.1">
              <div className="flex flex-wrap justify-between h-full" data-path="0.0.1.1.0">
                <div className="w-full" data-path="0.0.1.1.0.0">
                  <div className="flex items-center justify-between -m-2" data-path="0.0.1.1.0.0.0">
                    <div className="w-auto p-2" data-path="0.0.1.1.0.0.0.0">
                      <a className="inline-block" href="#" data-path="0.0.1.1.0.0.0.0.0">
                        <img src="flaro-assets/logos/flaro-logo-black.svg" alt="" data-config-id="auto-img-2-5" data-path="0.0.1.1.0.0.0.0.0.0">
                        </img> </a>
                    </div>
                    <div className="w-auto p-2" data-path="0.0.1.1.0.0.0.1">
                      <a className="navbar-burger" href="#" data-path="0.0.1.1.0.0.0.1.0">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-2-5" data-path="0.0.1.1.0.0.0.1.0.0">
                          <path d="M6 18L18 6M6 6L18 18" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-path="0.0.1.1.0.0.0.1.0.0.0"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center py-16 w-full" data-path="0.0.1.1.0.1">
                  <ul data-path="0.0.1.1.0.1.0">
                    <li className="mb-12" data-path="0.0.1.1.0.1.0.0"><a className="font-medium hover:text-gray-700" href="#" data-config-id="auto-txt-6-5" data-path="0.0.1.1.0.1.0.0.0">Features</a></li>
                    <li className="mb-12" data-path="0.0.1.1.0.1.0.1"><a className="font-medium hover:text-gray-700" href="#" data-config-id="auto-txt-7-5" data-path="0.0.1.1.0.1.0.1.0">Solutions</a></li>
                    <li className="mb-12" data-path="0.0.1.1.0.1.0.2"><a className="font-medium hover:text-gray-700" href="#" data-config-id="auto-txt-8-5" data-path="0.0.1.1.0.1.0.2.0">Resources</a></li>
                    <li data-path="0.0.1.1.0.1.0.3"><a className="font-medium hover:text-gray-700" href="#" data-config-id="auto-txt-9-5" data-path="0.0.1.1.0.1.0.3.0">Pricing</a></li>
                  </ul>
                </div>
                <div className="flex flex-col justify-end w-full pb-8" data-path="0.0.1.1.0.2">
                  <div className="flex flex-wrap" data-path="0.0.1.1.0.2.0">
                    <div className="w-full" data-path="0.0.1.1.0.2.0.0">
                      <div className="block" data-path="0.0.1.1.0.2.0.0.0">
                        <button className="py-2.5 px-4 text-base w-full font-medium border border-gray-400 hover:border-gray-500 rounded-xl focus:ring focus:ring-gray-50 bg-white hover:bg-gray-50 transition ease-in-out duration-200" type="button" data-config-id="auto-txt-10-5" data-path="0.0.1.1.0.2.0.0.0.0">Join free for 30 days</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="overflow-hidden pb-16" data-path="0.1">
          <div className="container px-4 mx-auto" data-path="0.1.0">
            <div className="mb-16 relative bg-indigo-50 overflow-hidden rounded-3xl" data-path="0.1.0.0">
              <img className="absolute left-0 bottom-0" src="flaro-assets/images/headers/gradient3.svg" alt="" data-config-id="auto-img-3-5" data-path="0.1.0.0.0">
              </img> <div className="relative z-20 flex flex-wrap items-end -m-8" data-path="0.1.0.0.1">
                <div className="w-full lg:w-1/2 p-20 lg:pr-0 lg:pl-28 lg:py-28" data-path="0.1.0.0.1.0">
                  <h2 className="mb-7 text-6xl md:text-8xl xl:text-10xl font-bold font-heading tracking-px-n leading-none" data-config-id="auto-txt-11-5" data-path="0.1.0.0.1.0.0">Understand customers better than anyone</h2>
                  <p className="mb-10 text-lg text-gray-900 font-medium" data-config-id="auto-txt-12-5" data-path="0.1.0.0.1.0.1">Get the best-in-class group mentoring plans and professional benefits for your team</p>
                  <div className="mb-6 md:inline-block" data-path="0.1.0.0.1.0.2">
                    <button className="py-4 px-6 w-full text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="button" data-config-id="auto-txt-13-5" data-path="0.1.0.0.1.0.2.0">Get 1 Month Free Access</button>
                  </div>
                  <ul data-path="0.1.0.0.1.0.3">
                    <li className="inline-flex text-sm text-gray-500 font-medium" data-config-id="auto-txt-14-5" data-path="0.1.0.0.1.0.3.0">No credit card required</li>
                    <li className="inline-flex text-black px-1" data-config-id="auto-txt-15-5" data-path="0.1.0.0.1.0.3.1">•</li>
                    <li className="inline-flex text-sm text-gray-500 font-medium" data-config-id="auto-txt-16-5" data-path="0.1.0.0.1.0.3.2">Cancel anytime</li>
                  </ul>
                </div>
                <div className="w-full lg:w-1/2 p-8" data-path="0.1.0.0.1.1">
                  <img src="flaro-assets/images/headers/profiles.png" alt="" data-config-id="auto-img-4-5" data-path="0.1.0.0.1.1.0">
                  </img>
                </div>
              </div>
            </div>
            <p className="mb-9 text-gray-900 text-center font-medium" data-config-id="auto-txt-17-5" data-path="0.1.0.1">Best rated design tool in G2 and loved by world’s best designers</p>
            <div className="flex flex-wrap justify-center items-center -m-8" data-path="0.1.0.2">
              <div className="w-auto p-8" data-path="0.1.0.2.0">
                <img src="flaro-assets/logos/brands/brand-xl.png" alt="" data-config-id="auto-img-5-5" data-path="0.1.0.2.0.0">
                </img>
              </div>
              <div className="w-auto p-8" data-path="0.1.0.2.1">
                <img src="flaro-assets/logos/brands/brand-xl-2.png" alt="" data-config-id="auto-img-6-5" data-path="0.1.0.2.1.0">
                </img>
              </div>
              <div className="w-auto p-8" data-path="0.1.0.2.2">
                <img src="flaro-assets/logos/brands/brand-xl-3.png" alt="" data-config-id="auto-img-7-5" data-path="0.1.0.2.2.0">
                </img>
              </div>
              <div className="w-auto p-8" data-path="0.1.0.2.3">
                <img src="flaro-assets/logos/brands/brand-xl-4.png" alt="" data-config-id="auto-img-8-5" data-path="0.1.0.2.3.0">
                </img>
              </div>
              <div className="w-auto p-8" data-path="0.1.0.2.4">
                <img src="flaro-assets/logos/brands/brand-xl-5.png" alt="" data-config-id="auto-img-9-5" data-path="0.1.0.2.4.0">
                </img>
              </div>
            </div>
          </div>
        </div>
      </section>


     
<h1>Awesome Image Hover in Pure CSS Part I</h1>
<div className="content">
				<h2>Lily</h2>
				<div className="grid">
					<figure className="effect-lily">
						<img src="https://tympanus.net/Development/HoverEffectIdeas/img/12.jpg" alt="img12"/>
						<figcaption>
							<div>
								<h2>Nice <span>Lily</span></h2>
								<p>Lily likes to play with crayons and pencils</p>
							</div>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
					<figure className="effect-lily">
						<img src="https://tympanus.net/Development/HoverEffectIdeas/img/1.jpg" alt="img1"/>
						<figcaption>
							<div>
								<h2>Nice <span>Lily</span></h2>
								<p>Lily likes to play with crayons and pencils</p>
							</div>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
				</div>
				<h2>Sadie</h2>
				<div className="grid">
					<figure className="effect-sadie">
						<img src="https://tympanus.net/Development/HoverEffectIdeas/img/2.jpg" alt="img02"/>
						<figcaption>
							<h2>Holy <span>Sadie</span></h2>
							<p>Sadie never took her eyes off me.  She had a dark soul.</p>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
					<figure className="effect-sadie">
						<img src="https://tympanus.net/Development/HoverEffectIdeas/img/14.jpg" alt="img14"/>
						<figcaption>
							<h2>Holy <span>Sadie</span></h2>
							<p>Sadie never took her eyes off me.  She had a dark soul.</p>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
				</div>
				<h2>Honey</h2>
				<div className="grid">
					<figure className="effect-honey">
						<img src="https://tympanus.net/Development/HoverEffectIdeas/img/4.jpg" alt="img04"/>
						<figcaption>
							<h2>Dreamy <span>Honey</span> <i>Now</i></h2>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
					<figure className="effect-honey">
						<img src="https://tympanus.net/Development/HoverEffectIdeas/img/5.jpg" alt="img05"/>
						<figcaption>
							<h2>Dreamy <span>Honey</span> <i>Now</i></h2>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
				</div>
				<h2>Layla</h2>
				<div className="grid">
					<figure className="effect-layla">
						<img src="https://tympanus.net/Development/HoverEffectIdeas/img/6.jpg" alt="img06"/>
						<figcaption>
							<h2>Crazy <span>Layla</span></h2>
							<p>When Layla appears, she brings an eternal summer along.</p>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
					<figure className="effect-layla">
						<img src="https://tympanus.net/Development/HoverEffectIdeas/img/3.jpg" alt="img03"/>
						<figcaption>
							<h2>Crazy <span>Layla</span></h2>
							<p>When Layla appears, she brings an eternal summer along.</p>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
				</div>
				<h2>Zoe</h2>
				<div className="grid">
					<figure className="effect-zoe">
						<img src="https://tympanus.net/Development/HoverEffectIdeas/img/25.jpg" alt="img25"/>
						<figcaption>
							<h2>Creative <span>Zoe</span></h2>
							<p className="icon-links">
								<a href="#"><span className="icon-heart"></span></a>
								<a href="#"><span className="icon-eye"></span></a>
								<a href="#"><span className="icon-paper-clip"></span></a>
							</p>
							<p className="description">Zoe never had the patience of her sisters. She deliberately punched the bear in his face.</p>
						</figcaption>			
					</figure>
					<figure className="effect-zoe">
						<img src="https://tympanus.net/Development/HoverEffectIdeas/img/26.jpg" alt="img26"/>
						<figcaption>
							<h2>Creative <span>Zoe</span></h2>
							<p className="icon-links">
								<a href="#"><span className="icon-heart"></span></a>
								<a href="#"><span className="icon-eye"></span></a>
								<a href="#"><span className="icon-paper-clip"></span></a>
							</p>
							<p className="description">Zoe never had the patience of her sisters. She deliberately punched the bear in his face.</p>
						</figcaption>			
					</figure>
				</div>
				<h2>Oscar</h2>
				<div className="grid">
					<figure className="effect-oscar">
						<img src="https://tympanus.net/Development/HoverEffectIdeas/img/9.jpg" alt="img09"/>
						<figcaption>
							<h2>Warm <span>Oscar</span></h2>
							<p>Oscar is a decent man. He used to clean porches with pleasure.</p>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
					<figure className="effect-oscar">
						<img src="https://tympanus.net/Development/HoverEffectIdeas/img/10.jpg" alt="img10"/>
						<figcaption>
							<h2>Warm <span>Oscar</span></h2>
							<p>Oscar is a decent man. He used to clean porches with pleasure.</p>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
				</div>
				<h2>Marley</h2>
				<div className="grid">
					<figure className="effect-marley">
						<img src="https://tympanus.net/Development/HoverEffectIdeas/img/11.jpg" alt="img11"/>
						<figcaption>
							<h2>Sweet <span>Marley</span></h2>
							<p>Marley tried to convince her but she was not interested.</p>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
					<figure className="effect-marley">
						<img src="https://tympanus.net/Development/HoverEffectIdeas/img/12.jpg" alt="img12"/>
						<figcaption>
							<h2>Sweet <span>Marley</span></h2>
							<p>Marley tried to convince her but she was not interested.</p>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
				</div>
				<h2>Ruby</h2>
				<div className="grid">
					<figure className="effect-ruby">
						<img src="https://tympanus.net/Development/HoverEffectIdeas/img/13.jpg" alt="img13"/>
						<figcaption>
							<h2>Glowing <span>Ruby</span></h2>
							<p>Ruby did not need any help. Everybody knew that.</p>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
					<figure className="effect-ruby">
						<img src="https://tympanus.net/Development/HoverEffectIdeas/img/14.jpg" alt="img14"/>
						<figcaption>
							<h2>Glowing <span>Ruby</span></h2>
							<p>Ruby did not need any help. Everybody knew that.</p>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
				</div>
				<h2>Roxy</h2>
				<div className="grid">
					<figure className="effect-roxy">
						<img src="https://tympanus.net/Development/HoverEffectIdeas/img/15.jpg" alt="img15"/>
						<figcaption>
							<h2>Charming <span>Roxy</span></h2>
							<p>Roxy was my best friend. She'd cross any border for me.</p>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
					<figure className="effect-roxy">
						<img src="https://tympanus.net/Development/HoverEffectIdeas/img/1.jpg" alt="img01"/>
						<figcaption>
							<h2>Charming <span>Roxy</span></h2>
							<p>Roxy was my best friend. She'd cross any border for me.</p>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
				</div>
				<h2>Bubba</h2>
				<div className="grid">
					<figure className="effect-bubba">
						<img src="https://tympanus.net/Development/HoverEffectIdeas/img/2.jpg" alt="img02"/>
						<figcaption>
							<h2>Fresh <span>Bubba</span></h2>
							<p>Bubba likes to appear out of thin air.</p>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
					<figure className="effect-bubba">
						<img src="https://tympanus.net/Development/HoverEffectIdeas/img/16.jpg" alt="img16"/>
						<figcaption>
							<h2>Fresh <span>Bubba</span></h2>
							<p>Bubba likes to appear out of thin air.</p>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
				</div>
				<h2>Romeo</h2>
				<div className="grid">
					<figure className="effect-romeo">
						<img src="https://tympanus.net/Development/HoverEffectIdeas/img/17.jpg" alt="img17"/>
						<figcaption>
							<h2>Wild <span>Romeo</span></h2>
							<p>Romeo never knows what he wants. He seemed to be very cross about something.</p>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
					<figure className="effect-romeo">
						<img src="https://tympanus.net/Development/HoverEffectIdeas/img/18.jpg" alt="img18"/>
						<figcaption>
							<h2>Wild <span>Romeo</span></h2>
							<p>Romeo never knows what he wants. He seemed to be very cross about something.</p>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
				</div>
				<h2>Dexter</h2>
				<div className="grid">
					<figure className="effect-dexter">
						<img src="https://tympanus.net/Development/HoverEffectIdeas/img/19.jpg" alt="img19"/>
						<figcaption>
							<h2>Strange <span>Dexter</span></h2>
							<p>Dexter had his own strange way. You could watch him training ants.</p>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
					<figure className="effect-dexter">
						<img src="https://tympanus.net/Development/HoverEffectIdeas/img/12.jpg" alt="img12"/>
						<figcaption>
							<h2>Strange <span>Dexter</span></h2>
							<p>Dexter had his own strange way. You could watch him training ants.</p>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
				</div>
				<h2>Sarah</h2>
				<div className="grid">
					<figure className="effect-sarah">
						<img src="https://tympanus.net/Development/HoverEffectIdeas/img/13.jpg" alt="img13"/>
						<figcaption>
							<h2>Free <span>Sarah</span></h2>
							<p>Sarah likes to watch clouds. She's quite depressed.</p>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
					<figure className="effect-sarah">
						<img src="https://tympanus.net/Development/HoverEffectIdeas/img/20.jpg" alt="img20"/>
						<figcaption>
							<h2>Free <span>Sarah</span></h2>
							<p>Sarah likes to watch clouds. She's quite depressed.</p>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
				</div>
				<h2>Chico</h2>
				<div className="grid">
					<figure className="effect-chico">
						<img src="https://tympanus.net/Development/HoverEffectIdeas/img/15.jpg" alt="img15"/>
						<figcaption>
							<h2>Silly <span>Chico</span></h2>
							<p>Chico's main fear was missing the morning bus.</p>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
					<figure className="effect-chico">
						<img src="https://tympanus.net/Development/HoverEffectIdeas/img/4.jpg" alt="img04"/>
						<figcaption>
							<h2>Silly <span>Chico</span></h2>
							<p>Chico's main fear was missing the morning bus.</p>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
				</div>
				<h2>Milo</h2>
				<div className="grid">
					<figure className="effect-milo">
						<img src="https://tympanus.net/Development/HoverEffectIdeas/img/11.jpg" alt="img11"/>
						<figcaption>
							<h2>Faithful <span>Milo</span></h2>
							<p>Milo went to the woods. He took a fun ride and never came back.</p>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
					<figure className="effect-milo">
						<img src="https://tympanus.net/Development/HoverEffectIdeas/img/3.jpg" alt="img03"/>
						<figcaption>
							<h2>Faithful <span>Milo</span></h2>
							<p>Milo went to the woods. He took a fun ride and never came back.</p>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
				</div>
			</div>

      

  </div>



</section>

    
  );
}
