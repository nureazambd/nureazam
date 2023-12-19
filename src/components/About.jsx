import React, { useState } from 'react'
import {web, mobile, backend, creator} from '../assets'
function About() {
    const [moreinfo, setMoreinfo] = useState(false)
  return (
    <div>
        <section className="text-white body-font overflow-hidden">
  <div className="container px-5 py-12 mx-auto max-w-7xl">
    <div className="flex flex-col text-left w-full mb-2">
    <h1 className="lg:w-2/3 uppercase leading-relaxed text-[18px] font-semibold text-[#aaa6c3]">Introduction</h1>
      <h1 className="sm:text-6xl text-6xl font-black title-font mb-2 text-gray-50">Overview.</h1>
      <p className="lg:w-2/3  leading-relaxed text-[17px] font-semibold text-[#aaa6c3]">I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, and Tailwind CSS. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!</p>
      <div className="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
      </div>
    </div>

    {moreinfo? '':<button className=" text-[17px] font-semibold hover:font-bold text-[#aaa6c3] mb-10" onClick={()=>setMoreinfo(true)}>click to more information</button>}
        {moreinfo? 
        <div className='lg:w-2/3  leading-relaxed text-[17px] font-semibold text-[#aaa6c3] mb-10'>
        I have completed my Bachelor of Science in Computer Science and Engineering (CSE) from North South University (NSU). Additionally, I was also one of the Good graduates among the entire 'Graduating Class of 2020'. Before that, I attended the Secondary School Certificate (SSC) examination and Higher Secondary Certificate (HSC) examination
        <br/><br/>
        Besides my undergraduate studies, I was involved with several organizations, including NSU Problem Solvers (NSUPS), NSU ACM Student Chapter, and NSU ACM SIGBED Student Chapter[Founder Member] and Volunteer for Bangladesh (VBD). I started working as a volunteer at VBD, Dhaka division in 2016, which is a non-political volunteer and youth wing of JAAGO. However, involvement with several organizations and working as a volunteer in several social communities significantly polished my interpersonal and social skills.
        <br/><br/>
        Personally, I am a slightly introverted person who loves to read books of different genres, e.g., thriller, mystery, fantasy, science fiction, classic, etc. Moreover, I invariably try to be contented and to evolve myself every day for the upcoming days with new challenges. Because I always remember the following quote by George Bernard Shaw,
        </div> : null  
      }

    <div className="flex flex-wrap -m-4">
      <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div className="h-[80%] p-6 rounded-lg border-2 bg-[#151030] border-gray-300 flex flex-col relative overflow-hidden">
        <div className=" p-32 sm:p-6 rounded-lg  ">
          <img className="h-20 sm:h-36 rounded w-20 sm:w-full object-cover object-center mb-6" src={web} alt="content"/>
          <h2 className="text-lg text-gray-50 font-medium title-font text-center mb-4">Web Developer</h2>
        </div>
        </div>
      </div>
      <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div className="h-[80%] p-6 rounded-lg border-2 bg-[#151030] border-gray-300 flex flex-col relative overflow-hidden">
        <div class=" p-32 sm:p-6 rounded-lg">
          <img class="h-20 sm:h-36 rounded w-20 sm:w-full object-cover object-center mb-6" src={mobile} alt="content"/>
          <h2 class="text-lg text-gray-50 font-medium title-font text-center mb-4">Web Application Developer</h2>
        </div>
        </div>
      </div>
      <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div className="h-[80%] p-6 rounded-lg border-2 bg-[#151030] border-gray-300 flex flex-col relative overflow-hidden">
        <div class=" p-32 sm:p-6 rounded-lg">
          <img class="h-20 sm:h-36 rounded w-20 sm:w-full object-cover object-center mb-6" src={backend} alt="content"/>
          <h2 class="text-lg text-gray-50 font-medium title-font text-center mb-4">Backend Developer</h2>
        </div>
        </div>
      </div>
      <div className="p-4 xl:w-1/4 md:w-1/2 w-full ">
        <div className="h-[80%] p-6 rounded-lg bg-[#151030] border-2 border-gray-300 flex flex-col relative overflow-hidden">
        <div class=" p-32 sm:p-6 rounded-lg">
          <img class="h-20 sm:h-36 rounded w-20 sm:w-full object-cover object-center mb-6" src={creator} alt="content"/>
          <h2 class="text-lg text-gray-50 font-medium title-font text-center mb-4">Ai Developer</h2>
        </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default About