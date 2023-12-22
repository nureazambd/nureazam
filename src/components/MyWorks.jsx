import React from 'react'
import {linkIcon, rtchubsWeb, bizcloudmanager, mom2b, shopHatt, portfolioWebsite, carRepairServicing} from '../assets'
function MyWorks() {
  return (
    <div className="container px-5 py-12 mx-auto max-w-7xl">
      <div className="flex flex-col text-left w-full mb-2">
        <h1 className="lg:w-2/3 uppercase leading-relaxed text-[18px] font-semibold text-[#aaa6c3]">
          My work
        </h1>
        <h1 className="sm:text-6xl text-6xl font-black title-font mb-2 text-gray-50">
          Projects.
        </h1>
        <p className="text-white-100 text-[18px] pl-1 tracking-wider my-6 text-[#aaa6c3] w-[100%] sm:w-[65%]">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </div>

      <div className=" sm:flex my-6">
        <div class="max-w-sm rounded-lg overflow-hidden bg-[#151030] shadow-2xl mx-2 my-4 sm:my-0">
          <div className="p-6">
            <div className="relative w-full h-[230px]">
              <img
                class="w-full"
                src={rtchubsWeb}
                alt="Sunset in the mountains"
              />
              <div className="absolute inset-0 flex justify-end m-3 card-img_hover ">
                <div
                  onClick={() =>
                    window.open(
                      "https://rtchubs.com/",
                      "_blank"
                    )
                  }
                  className="black-gradient w-10 h-10 bg-black rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img
                    src={linkIcon}
                    alt="source code"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            </div>
            <div class=" py-4">
              <div class="font-bold text-xl mb-2">Software Company Web</div>
              <p class="text-[#aaa6c3] text-base text-[16px]">
              Discover a cutting-edge website I've crafted using Nuxt.js, Tailwind CSS, and JavaScript. Seamlessly blending sleek design with powerful functionality, it ensures a seamless, responsive experience. Explore the seamless interface and innovative features, showcasing a commitment to excellence in every aspect.
              </p>
            </div>
            <div class=" pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-600 mr-2 mb-2">
                #Nuxt.js
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-green-600 mr-2 mb-2">
                #Tailwind CSS
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-red-600 mr-2 mb-2">
                #JavaScript
              </span>
            </div>
          </div>
        </div>

        <div class="max-w-sm rounded-lg overflow-hidden bg-[#151030] shadow-2xl mx-2 sm:mx-6 my-4 sm:my-0">
          <div className="p-6">
            <div className="relative w-full h-[230px]">
              <img
                class="w-full"
                src={bizcloudmanager}
                alt="Sunset in the mountains"
              />
              <div className="absolute inset-0 flex justify-end m-3 card-img_hover ">
                <div
                  onClick={() =>
                    window.open(
                      "https://bizcloudmanager.com",
                      "_blank"
                    )
                  }
                  className="black-gradient w-10 h-10 bg-black rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img
                    src={linkIcon}
                    alt="source code"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            </div>
            <div class=" py-4">
              <div class="font-bold text-xl mb-2">Biz Cloud Manager</div>
              <p class="text-[#aaa6c3] text-base text-[16px]">
              A cutting-edge solution at the intersection of Vue.js, Node, and Element UI. Seamlessly control and optimize your cloud resources with an intuitive Vue.js frontend, robust Node.js backend, and the sleek Element UI. Elevate your cloud management experience with efficiency, security, and responsive.
              </p>
            </div>
            <div class=" pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-600 mr-2 mb-2">
                #Vue.js
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-green-600 mr-2 mb-2">
                #Element Ui
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-red-600 mr-2 mb-2">
                #Node.js
              </span>
            </div>
          </div>
        </div>

        <div class="max-w-sm rounded-lg overflow-hidden bg-[#151030] shadow-2xl mx-2 my-4 sm:my-0">
          <div className="p-6">
            <div className="relative w-full h-[230px]">
              <img
                class="w-full"
                src={mom2b}
                alt="Sunset in the mountains"
              />
              <div className="absolute inset-0 flex justify-end m-3 card-img_hover ">
                <div
                  onClick={() =>
                    window.open(
                      "https://github.com/nureazambd/webadminfrontend-mom2b",
                      "_blank"
                    )
                  }
                  className="black-gradient w-10 h-10 bg-black rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img
                    src={linkIcon}
                    alt="source code"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            </div>
            <div class=" py-4">
              <div class="font-bold text-xl mb-2">Mom2B</div>
              <p class="text-[#aaa6c3] text-base text-[16px]">
              {/* Developed a Car Repair frontend with React, Bootstrap, HTML, CSS, and JavaScript. Utilized React components for modularity, Bootstrap for styling, and ensured code documentation for clarity. The result is a responsive and visually appealing website, ready for seamless car repair and servicing interactions. */}
              </p>
            </div>
            <div class=" pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-600 mr-2 mb-2">
                #React.js
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-green-600 mr-2 mb-2">
                #React Bootstrap
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-red-600 mr-2 mb-2">
                #JavaScript
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className=" sm:flex my-6">
        <div class="max-w-sm rounded-lg overflow-hidden bg-[#151030] shadow-2xl mx-2 my-4 sm:my-0">
          <div className="p-6">
            <div className="relative w-full h-[230px]">
              <img
                class="w-full"
                src={shopHatt}
                alt="Sunset in the mountains"
              />
              <div className="absolute inset-0 flex justify-end m-3 card-img_hover ">
                <div
                  onClick={() =>
                    window.open(
                      "https://github.com/nureazambd/shop-hatt-frontend",
                      "_blank"
                    )
                  }
                  className="black-gradient w-10 h-10 bg-black rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img
                    src={linkIcon}
                    alt="source code"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            </div>
            <div class=" py-4">
              <div class="font-bold text-xl mb-2">Shop Hatt</div>
              <p class="text-[#aaa6c3] text-base text-[16px]">
                {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil. */}
              </p>
            </div>
            <div class=" pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-600 mr-2 mb-2">
                #Nuxt.js
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-green-600 mr-2 mb-2">
                #Tailwind CSS
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-red-600 mr-2 mb-2">
                #JavaScript
              </span>
            </div>
          </div>
        </div>

        <div class="max-w-sm rounded-lg overflow-hidden bg-[#151030] shadow-2xl mx-2 sm:mx-6 my-4 sm:my-0">
          <div className="p-6">
            <div className="relative w-full h-[230px]">
              <img
                class="w-full"
                src={portfolioWebsite}
                alt="Sunset in the mountains"
              />
              <div className="absolute inset-0 flex justify-end m-3 card-img_hover ">
                <div
                  onClick={() =>
                    window.open(
                      "https://github.com/nureazambd/nureazam-3d-portfolio",
                      "_blank"
                    )
                  }
                  className="black-gradient w-10 h-10 bg-black rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img
                    src={linkIcon}
                    alt="source code"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            </div>
            <div class=" py-4">
              <div class="font-bold text-xl mb-2">3D Portfolio Website</div>
              <p class="text-[#aaa6c3] text-base text-[16px]">
                {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil. */}
              </p>
            </div>
            <div class=" pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-600 mr-2 mb-2">
                #React.js
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-green-600 mr-2 mb-2">
                #Tailwind CSS
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-red-600 mr-2 mb-2">
                #JavaScript
              </span>
            </div>
          </div>
        </div>

        <div class="max-w-sm rounded-lg overflow-hidden bg-[#151030] shadow-2xl mx-2 my-4 sm:my-0">
          <div className="p-6">
            <div className="relative w-full h-[230px]">
              <img
                class="w-full"
                src={carRepairServicing}
                alt="Sunset in the mountains"
              />
              <div className="absolute inset-0 flex justify-end m-3 card-img_hover ">
                <div
                  onClick={() =>
                    window.open(
                      "https://github.com/nureazambd/car-repair-servicing-made-easy",
                      "_blank"
                    )
                  }
                  className="black-gradient w-10 h-10 bg-black rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img
                    src={linkIcon}
                    alt="source code"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            </div>
            <div class=" py-4">
              <div class="font-bold text-xl mb-2">Car Repair & Servicing</div>
              <p class="text-[#aaa6c3] text-base text-[16px]">
              Developed a Car Repair frontend with React, Bootstrap, HTML, CSS, and JavaScript. Utilized React components for modularity, Bootstrap for styling, and ensured code documentation for clarity. The result is a responsive and visually appealing website, ready for seamless car repair and servicing interactions.
              </p>
            </div>
            <div class=" pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-600 mr-2 mb-2">
                #React.js
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-green-600 mr-2 mb-2">
                #CSS&Bootstrap
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-red-600 mr-2 mb-2">
                #JavaScript
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyWorks