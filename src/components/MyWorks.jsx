import React from 'react'

function MyWorks() {
  return (
    <div className='container px-5 py-12 mx-auto max-w-7xl'>
      <div className="flex flex-col text-left w-full mb-2">
    <h1 className="lg:w-2/3 uppercase leading-relaxed text-[18px] font-semibold text-[#aaa6c3]">My work</h1>
      <h1 className="sm:text-6xl text-6xl font-black title-font mb-2 text-gray-50">Projects.</h1>
      <p className='text-white-100 text-[18px] pl-1 tracking-wider my-6 text-[#aaa6c3] w-[100%] sm:w-[65%]'>
      Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
          </p>
    </div>


    <div class="max-w-sm rounded-lg overflow-hidden bg-[#151030] shadow-2xl">
  <div className='p-6'>
  
  <div className='relative w-full h-[230px]'>
  <img class="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
  <div className='absolute inset-0 flex justify-end m-3 card-img_hover '>
            <div
              onClick={() => window.open('http://localhost:5173/nureazam/#my-works', "_blank")}
              className='black-gradient w-10 h-10 bg-black rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src="http://localhost:5173/nureazam/src/assets/linkIcon.png"
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
    </div>


  <div class=" py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
  </div>
</div>


    </div>
  )
}

export default MyWorks